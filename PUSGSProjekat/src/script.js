let sidebarTriger = document.getElementById('sidebar-triger');
let sidebarContainer = document.querySelectorAll('.sidebar-menu__top__links .data');
let mainContainer = document.querySelector('. main');

sidebarTriger.addEventListener('click', function() {
    sidebarContainer.forEach(item => {
        item.classList.toggle('show');
    })
});

mainContainer.addEventListener('click', function() {
    sidebarContainer.forEach(item => {
        item.classList.remove('show');
    })
});