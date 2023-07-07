document$.subscribe(function () {
  renderSlides();
});

const renderSlides = () => {
  document.querySelectorAll('.slide-deck').forEach(deck => {
    const controlLeft = document.createElement('div');
    controlLeft.classList.add('control');
    controlLeft.classList.add('left');

    const controlRight = document.createElement('div');
    controlRight.classList.add('control');
    controlRight.classList.add('right');

    deck.appendChild(controlLeft);
    deck.appendChild(controlRight);

    const slides = deck.querySelectorAll('.slide svg');

    slides.forEach(el => {
      el.viewBox.baseVal.width = 1280;
      el.viewBox.baseVal.height = 720;
    });

    let slideIndex = 0;

    slides.item(slideIndex).parentNode.classList.add('active');
    controlLeft.classList.add('disabled');

    controlLeft.onclick = () => {
      if (slideIndex - 1 < 0) return;
      slides.item(slideIndex).parentNode.classList.remove('active');
      slideIndex = slideIndex - 1;
      slides.item(slideIndex).parentNode.classList.add('active');
      controlRight.classList.remove('disabled');

      if (slideIndex === 0) {
        controlLeft.classList.add('disabled');
      } else {
        controlLeft.classList.remove('disabled');
      }
    };

    controlRight.onclick = () => {
      if (slideIndex + 1 > slides.length - 1) return;
      slides.item(slideIndex).parentNode.classList.remove('active');
      slideIndex = slideIndex + 1;
      slides.item(slideIndex).parentNode.classList.add('active');
      controlLeft.classList.remove('disabled');

      if (slideIndex === slides.length - 1) {
        controlRight.classList.add('disabled');
      } else {
        controlRight.classList.remove('disabled');
      }
    };
  });
};