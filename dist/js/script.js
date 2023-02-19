//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if(window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
};

//garistiga & nav menu
const garistiga = document.querySelector('#garistiga');
const navmenu = document.querySelector('#nav-menu');

garistiga.addEventListener('click', function(){
    garistiga.classList.toggle('garistiga-active');
    navmenu.classList.toggle('hidden');
});