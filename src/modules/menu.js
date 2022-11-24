export const menu = () => {
  const menuList = document.getElementById('menu-list');

  menuList.addEventListener('click', (e) => {
    if (e.target.closest('ul>li>a')) {
      e.preventDefault();

      const sectionId = e.target.closest('a').hash;
      const referencedSection = document.querySelector(sectionId);
      referencedSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
};
