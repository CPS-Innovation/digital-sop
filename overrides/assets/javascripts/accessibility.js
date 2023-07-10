document$.subscribe(function () {
    const root = document.querySelector('div.accessibility');

    const setTextSize = (size) => {
        const sizes = {
            'normal': 1,
            'big': 1.3,
            'bigger': 1.6,
        };
        const computedSize = sizes[size];
        document.querySelector('html').style = `zoom: ${computedSize};-moz-transform: scale(${computedSize});-moz-transform-origin: 0 0;`;
        localStorage.setItem('text-size', size);
    };
    root.querySelector('.normal').onclick = () => setTextSize('normal');
    root.querySelector('.big').onclick = () => setTextSize('big');
    root.querySelector('.bigger').onclick = () => setTextSize('bigger');

    setTextSize(localStorage.getItem('text-size') || 'normal');
});
