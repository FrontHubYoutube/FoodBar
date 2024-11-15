const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
    
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active')
    } else {
        document.querySelector('#scroll-top').classList.remove('active')
        
    }
}