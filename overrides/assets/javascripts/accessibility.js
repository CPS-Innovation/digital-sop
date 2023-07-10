document$.subscribe(function () {
  const textSize = document.querySelector('div.accessibility .text-size');

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
  textSize.querySelector('.normal').onclick = () => setTextSize('normal');
  textSize.querySelector('.big').onclick = () => setTextSize('big');
  textSize.querySelector('.bigger').onclick = () => setTextSize('bigger');

  const contrast = document.querySelector('div.accessibility .contrast');

  const applyTheme = (theme) => {
    const themes = {
      default: '',
      'yellow-on-black': 'theme-yellow-on-black',
      greyscale: 'theme-greyscale',
    };

    const html = document.querySelector('html');

    html.classList.remove('theme-greyscale', 'theme-yellow-on-black');
    if (themes[theme]) html.classList.add(themes[theme]);

    localStorage.setItem('theme', theme);
  };

  contrast.querySelector('.default').onclick = () => applyTheme('default');
  contrast.querySelector('.yellow-on-black').onclick = () => applyTheme('yellow-on-black');
  contrast.querySelector('.greyscale').onclick = () => applyTheme('greyscale');

  setTextSize(localStorage.getItem('text-size') || 'normal');
  applyTheme(localStorage.getItem('theme') || 'default');
});
