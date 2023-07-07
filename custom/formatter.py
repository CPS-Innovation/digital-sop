import json
from os.path import abspath


def slideshow(source, language, css_class, options, md, classes=None, id_value='', attrs=None, **kwargs):
    try:
        output = ""

        def load_svg(path):
            with open(abspath(path), 'r') as f:
                return f.read()

        slides = source.split("\n")
        loaded_slides = list(map(load_svg, slides))

        for index, slide in enumerate(loaded_slides):
            output += f'<div class="slide slide-{index}">{slide}</div>'

        return f'<div class="slide-deck">{output}<div class="controls"></div></div>'
    except BaseException as error:
        print(error)
        return 'Could not render slideshow!'
