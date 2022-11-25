import { animate } from './helpers';
export const modal = () => {
  const showModalBtns = document.querySelectorAll('.show-modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalWindow = document.querySelector('#callback');
  const modalClose = modalWindow.querySelector('.modal-close');

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
      ? ((modalOverlay.style.opacity = 0),
        (modalWindow.style.opacity = 0),
        (modalOverlay.style.display = 'block'),
        (modalWindow.style.display = 'block'))
      : null;

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
};
