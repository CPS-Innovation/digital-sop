import logging
from os.path import abspath, relpath
from pathlib import Path


def slideshow(source, language, css_class, options, md, classes=None, id_value='', attrs=None, **kwargs):
    _ignored = [language, css_class, options, md, classes, id_value, attrs, kwargs]
    try:
        output = ""

        def load_svg(path):
            with open(abspath(path), 'r') as f:
                filename = Path(path)
                return fix_svg_ids(filename, f.read())

        def fix_svg_ids(filename, contents):
            prefix = f"{filename.parent.parent.stem}-{filename.parent.stem}-{filename.stem}-"

            contents = contents.replace('id="', f'id="{prefix}')
            contents = contents.replace('href="#', f'href="#{prefix}')
            contents = contents.replace('url(#', f'url(#{prefix}')
            return contents

        slides = source.split("\n")
        loaded_slides = list(map(load_svg, slides))

        for index, slide in enumerate(loaded_slides):
            output += f'<div class="slide slide-{index}">{slide}</div>'

        return f'<div class="slide-deck">{output}</div>'
    except BaseException as error:
        message = f'Something went wrong: {error}'

        if hasattr(error, 'filename'):
            message = f'{relpath(error.filename)} does not exist'

        raise_warning(message)

        return f'<div class="admonition danger">' \
               f'<p class="admonition-title">Error: {message}</p>' \
               f'<p><pre><code>{source}</code></pre></p>' \
               f'</div>'


def raise_warning(message):
    logger = logging.getLogger("mkdocs.plugins")
    logger.warning(f'[custom.formatter.slideshow] {message}')
