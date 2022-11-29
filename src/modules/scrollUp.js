import { debounce } from './helpers';

export const scrollUp = () => {
  const arrorUp = document.querySelector('.up');
  arrorUp.style.display = 'none';

  const getScrollPos = () => {
    pageYOffset >= 600
      ? (arrorUp.style.display = 'inline-block')
      : (arrorUp.style.display = 'none');
  };

  arrorUp.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const debouncedFunc = debounce(getScrollPos, 50);
  window.addEventListener('scroll', debouncedFunc);
};
