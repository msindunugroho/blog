const navigation = () => {
  const menu = document.querySelector('.nav_action');
  const menuBtn = document.querySelector('.menu_btn');
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('show_menu');
    });
}

export default navigation;