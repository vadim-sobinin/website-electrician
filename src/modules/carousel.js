export const carousel = () => {
  const carouselBlock = document.querySelector('.services-carousel');
  const elems = carouselBlock.querySelectorAll('.element');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  elems.forEach((elem) => (elem.style.display = 'none'));

  const createNDimArray = (dimensions) => {
    if (dimensions.length > 0) {
      const dim = dimensions[0];
      const rest = dimensions.slice(1);
      const newArray = new Array();
      for (let i = 0; i < dim; i++) {
        newArray[i] = createNDimArray(rest);
      }
      return newArray;
    } else {
      return undefined;
    }
  };

  const elemsTriplex = createNDimArray([Math.ceil(elems.length / 3), 0]);

  for (let i = 0; i < elems.length; i++) {
    elemsTriplex[Math.floor(i / 3)].push(elems[i]);
  }

  let currentSet = 0;
  const setsQuantity = elemsTriplex.length;

  const showSet = (currentSet) => {
    elemsTriplex[currentSet].forEach((elem) => {
      if (elem) {
        elem.style.display = 'inline-block';
      }
    });
  };
  const hideSet = (prevSet) => {
    elemsTriplex[prevSet].forEach((elem) => {
      if (elem) {
        elem.style.display = 'none';
      }
    });
  };

  const setCounter = (operation) => {
    hideSet(currentSet);
    if (operation === '+') {
      currentSet = currentSet + 1 < setsQuantity ? currentSet + 1 : 0;
    } else if (operation === '-') {
      currentSet = currentSet == 0 ? setsQuantity - 1 : currentSet - 1;
    }
    showSet(currentSet);
  };

  showSet(currentSet);

  arrowLeft.addEventListener('click', () => setCounter('-'));
  arrowRight.addEventListener('click', () => setCounter('+'));
};
