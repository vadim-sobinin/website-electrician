import { animate } from './helpers';
export const modal = () => {
  const showModalBtns = document.querySelectorAll('.show-modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalWindow = document.querySelector('#callback');
  const modalClose = modalWindow.querySelector('.modal-close');
  const header = document.querySelector('.header-wrapper');
  const carouselBlock = document.querySelector('.services-carousel');

  header.style.width = window.innerWidth + 'px';

  showModalBtns.forEach((showModalBtn) => {
    showModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      animation(true);
    });
  });

  carouselBlock.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.closest('a')) {
      animation(true);
    }
  });

  modalOverlay.addEventListener('click', (e) => {
    animation(false);
  });

  modalClose.addEventListener('click', (e) => {
    animation(false);
  });

  window.addEventListener('resize', (e) => {
    header.style.width = window.innerWidth + 'px';
    modalWindow.style.left = window.innerWidth / 2 + 'px';
  });
};

export const animation = (isOpen) => {
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalWindow = document.querySelector('#callback');

  const scrollBarControl = (isOpen) => {
    let scrollBarWidth = window.innerWidth - document.body.offsetWidth + 'px';
    const fixedElems = document.querySelectorAll('.fixed-block');

    if (isOpen) {
      document.body.style.paddingRight = scrollBarWidth;
      // document.body.classList.toggle('disable-scroll');
      document.querySelector('.up').style.marginRight = scrollBarWidth;

      modalWindow.style.left = window.innerWidth / 2 + 'px';
      fixedElems.forEach((elem) => {
        elem.style.paddingRight = scrollBarWidth;
      });
    } else {
      document.body.style.paddingRight = '0px';
      // document.body.classList.toggle('disable-scroll');
      document.querySelector('.up').style.marginRight = '0px';
      fixedElems.forEach((elem) => {
        elem.style.paddingRight = '0px';
      });
    }
  };

  isOpen
    ? (scrollBarControl(isOpen),
      (modalOverlay.style.opacity = 0),
      (modalWindow.style.opacity = 0),
      (modalOverlay.style.display = 'block'),
      (modalWindow.style.display = 'block'),
      (document.body.style.overflow = 'hidden'))
    : ((document.body.style.overflow = ''), scrollBarControl(isOpen));

  animate({
    duration: 500,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress) {
      isOpen
        ? ((modalWindow.style.opacity = progress), (modalOverlay.style.opacity = progress))
        : ((modalWindow.style.opacity = 1 - progress), (modalOverlay.style.opacity = 1 - progress));
      modalWindow.style.opacity === '0'
        ? ((modalWindow.style.display = 'none'), (modalOverlay.style.display = 'none'))
        : null;
    },
  });
};
