export const accordeon = () => {
  const accordeonBlock = document.querySelector('.accordeon');
  const elems = accordeonBlock.querySelectorAll('.element');

  accordeonBlock.addEventListener('click', (e) => {
    if (e.target.closest('.element')) {
      const selectedElem = e.target.closest('.element');

      elems.forEach((elem) => {
        if (elem.classList.contains('active')) {
          elem.classList.remove('active');
          elem.querySelector('.element-content').style.display = 'none';
        }
      });

      selectedElem.classList.add('active');
      selectedElem.querySelector('.element-content').style.display = 'block';
    }
  });
};
