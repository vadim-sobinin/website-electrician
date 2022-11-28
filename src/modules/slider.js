export const slider = () => {
  const sliderBlock = document.querySelector('.top-slider');

  const slides = document.querySelectorAll('.item');

  const dotBlock = document.querySelector('.slick-dots');

  let currentSlide = 0;
  let timerInterval = 3000;
  let interval;

  slides.forEach((slider, index) => {
    index === 0
      ? dotBlock.insertAdjacentHTML('beforeend', "<li class='dot slick-active'></li>")
      : dotBlock.insertAdjacentHTML('beforeend', "<li class='dot'></li>");
  });

  const dots = dotBlock.childNodes;

  const prevSlide = (elems, index, strClass = '') => {
    strClass === ''
      ? ((elems[index].style.display = 'none'), elems[index].children[0].classList.remove('active'))
      : elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass = '') => {
    strClass === ''
      ? ((elems[index].style.display = 'block'), elems[index].children[0].classList.add('active'))
      : elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide);
    prevSlide(dots, currentSlide, 'slick-active');

    currentSlide == slides.length - 1 ? (currentSlide = 0) : currentSlide++;

    nextSlide(slides, currentSlide);
    nextSlide(dots, currentSlide, 'slick-active');
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    if (!e.target.matches('.dot')) {
      return;
    }

    prevSlide(slides, currentSlide);
    prevSlide(dots, currentSlide, 'slick-active');

    if (e.target.classList.contains('dot')) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    currentSlide == slides.length ? (currentSlide = 0) : null;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide);
    nextSlide(dots, currentSlide, 'slick-active');
  });

  sliderBlock.addEventListener(
    'mouseenter',
    (e) => {
      if (e.target.matches('.dot')) {
        stopSlide();
      }
    },
    true,
  );

  sliderBlock.addEventListener(
    'mouseleave',
    (e) => {
      if (e.target.matches('.dot')) {
        startSlide(timerInterval);
      }
    },
    true,
  );

  startSlide(timerInterval);
};
