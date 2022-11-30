import { animation } from './modules/modal';

export const carousel = () => {
  const carouselBlock = document.querySelector('.services-carousel');
  const elems = carouselBlock.querySelectorAll('.element');

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
    // console.log(Math.floor(i / 3));
    // console.log(elemsTriplex[Math.floor(i / 3)]);
    elemsTriplex[Math.floor(i / 3)].push(elems[i]);
  }
  // console.log(elemsTriplex);

  let currentSet = 0;
  const setsQuantity = elemsTriplex.length;

  // ....
};
