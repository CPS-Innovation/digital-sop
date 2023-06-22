document$.subscribe(function () {
    renderDiagrams()
        .then(injectDiagrams);
});

function renderDiagrams() {
    var elements = document.getElementsByClassName('diagram-plantuml');
    var diagrams = new Array(elements.length)
        .fill(true)
        .map(function (_, index) {
            var root = elements.item(index);
            return {index, root, content: root.firstElementChild.innerText};
        });

    return Promise.all(diagrams.map(function (diagram) {
        return renderDiagram(diagram);
    }));
}

function renderDiagram(diagram) {
    return new Promise(function (resolve, reject) {
        fetch(`https://www.plantuml.com/plantuml/svg/${compress(diagram.content)}`)
            .then(function (res) {
                return res.text();
            })
            .then(function (data) {
                diagram.svg = data;
                resolve(diagram);
            });
    });
}

function injectDiagrams(diagrams) {
    diagrams.forEach(function (diagram) {
        var controls = document.createElement('div');
        controls.classList.add('controls');
        controls.innerHTML = `
        <button class="md-raised md-button md-button--primary controls-close">
            Close
        </button>
        <button class="md-raised md-button md-button--primary controls-reset">
            Reset
        </button>`;

        var element = document.createElement('div');
        var zoomed = false;
        element.innerHTML = diagram.svg;
        element.appendChild(controls);
        element.classList.add('diagram-render');

        diagram.root.classList.add('diagram-rendered');
        diagram.root.parentNode.insertBefore(element, diagram.root);

        var svg = element
            .getElementsByTagName('svg')
            .item(0);

        svg.preserveAspectRatio.baseVal.meetOrSlice = 1;
        svg.preserveAspectRatio.baseVal.align = 6;
        svg.style = null;

        var point = svg.createSVGPoint();
        var viewBox = svg.viewBox.baseVal;
        var defaultSettings = {
            viewBox: {
                x: viewBox.x,
                y: viewBox.y,
                width: viewBox.width,
                height: viewBox.height,
            },
        };

        function reset(ev) {
            viewBox.x = defaultSettings.viewBox.x;
            viewBox.y = defaultSettings.viewBox.y;
            viewBox.width = defaultSettings.viewBox.width;
            viewBox.height = defaultSettings.viewBox.height;
            return false;
        }

        controls
            .getElementsByClassName('controls-close')
            .item(0)
            .onclick =
            function (ev) {
                zoomed = false;
                element.classList.remove('diagram-zoom-modal');
                reset();
                document.documentElement.classList.remove('hide-scrollbars');
                return false;
            }

        svg.onclick = function () {
            if (!zoomed) {
                zoomed = true;
                element.classList.add('diagram-zoom-modal');
                document.documentElement.classList.add('hide-scrollbars');
            }
        }

        controls
            .getElementsByClassName('controls-reset')
            .item(0)
            .onclick = reset;

        element.onwheel = function (ev) {
            if (!zoomed) return;

            var zoomIn = (ev.wheelDelta || ev.deltaY || ev.detail || 0) > 0;
            point.x = ev.clientX;
            point.y = ev.clientY;

            var startingPoint = point.matrixTransform(svg.getScreenCTM().inverse());
            var scaleDelta = zoomIn ? 1 / 1.6 : 1.6;

            viewBox.x -= (startingPoint.x - viewBox.x) * (scaleDelta - 1);
            viewBox.y -= (startingPoint.y - viewBox.y) * (scaleDelta - 1);
            viewBox.width *= scaleDelta;
            viewBox.height *= scaleDelta;

            return false;
        }
    });
}

function compress(s) {
    function encode64(data) {
        var r = "";
        for (i = 0; i < data.length; i += 3) {
            if (i + 2 === data.length) {
                r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), 0);
            } else if (i + 1 === data.length) {
                r += append3bytes(data.charCodeAt(i), 0, 0);
            } else {
                r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1),
                    data.charCodeAt(i + 2));
            }
        }
        return r;
    }

    function append3bytes(b1, b2, b3) {
        var c1 = b1 >> 2;
        var c2 = ((b1 & 0x3) << 4) | (b2 >> 4);
        var c3 = ((b2 & 0xF) << 2) | (b3 >> 6);
        var c4 = b3 & 0x3F;
        var r = "";
        r += encode6bit(c1 & 0x3F);
        r += encode6bit(c2 & 0x3F);
        r += encode6bit(c3 & 0x3F);
        r += encode6bit(c4 & 0x3F);
        return r;
    }

    function encode6bit(b) {
        if (b < 10) {
            return String.fromCharCode(48 + b);
        }
        b -= 10;
        if (b < 26) {
            return String.fromCharCode(65 + b);
        }
        b -= 26;
        if (b < 26) {
            return String.fromCharCode(97 + b);
        }
        b -= 26;
        if (b === 0) {
            return '-';
        }
        if (b === 1) {
            return '_';
        }
        return '?';
    }

    return encode64(deflate(unescape(encodeURIComponent(s)), 9));
}
