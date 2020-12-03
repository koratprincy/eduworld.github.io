burger=document.querySelector('.burger')
navbar=document.querySelector('.nav-bar')
rightnav=document.querySelector('.rightnav')
navlist=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    nav-list.classList.toggle('v-class-resp');
    nav-bar.classList.toggle('h-nav-resp');
})