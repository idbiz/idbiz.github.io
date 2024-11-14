const menuCollapse = document.getElementById('menu-collapse');
const menuList = document.getElementById('menu-list');

menuCollapse.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
});

