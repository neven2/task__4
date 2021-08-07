const menuIcon=document.querySelector('.menu-icon');
const navItems=document.querySelector('.nav-list');
const closeBtn=document.querySelector('.close-icon');

menuIcon.addEventListener('click',()=>{
    navItems.classList.toggle('show-list');
})

closeBtn.addEventListener('click',()=>{
    navItems.classList.remove('show-list');
})