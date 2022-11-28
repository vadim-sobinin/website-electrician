import { animate } from './helpers';
export const modal = () => {
  const showModalBtns = document.querySelectorAll('.show-modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalWindow = document.querySelector('#callback');
  const modalClose = modalWindow.querySelector('.modal-close');

  document.querySelector('.header-wrapper').style.width = window.innerWidth + 'px';

  showModalBtns.forEach((showModalBtn) => {
    showModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      animation(true);
    });
  });

  modalOverlay.addEventListener('click', (e) => {
    animation(false);
  });

  modalClose.addEventListener('click', (e) => {
    animation(false);
  });

  const animation = (isOpen) => {
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
          : ((modalWindow.style.opacity = 1 - progress),
            (modalOverlay.style.opacity = 1 - progress));
        modalWindow.style.opacity === '0'
          ? ((modalWindow.style.display = 'none'), (modalOverlay.style.display = 'none'))
          : null;
      },
    });
  };

  const scrollBarControl = (isOpen) => {
    let scrollBarWidth = window.innerWidth - document.body.offsetWidth + 'px';
    const fixedElems = document.querySelectorAll('.fixed-block');

    if (isOpen) {
      document.body.style.paddingRight = scrollBarWidth;
      // document.body.classList.toggle('disable-scroll');
      document.querySelector('.up').style.marginRight = scrollBarWidth;

      document.querySelector('#callback').style.left = window.innerWidth / 2 + 'px';
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
};
