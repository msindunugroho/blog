const navigation = () => {
  const menuBtn = document.querySelector('.menu_btn');
  const menu = document.querySelector('.nav_action');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show_menu');
  });
}

export default navigation;