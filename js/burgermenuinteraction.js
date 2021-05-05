///////////////burger menu interaction

const btn_nav = document.querySelector('.burgermenu__btn');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
console.log(btn_nav);

btn_nav.addEventListener('click',()=>{
  console.log("está clickeando");

  

  if(!btn_nav.classList.contains('burgermenu__btn--clicked')){
    btn_nav.classList.add('burgermenu__btn--clicked');
    btn_nav.classList.add('burgermenu__btn--collapsed');

    navbar.classList.remove('hidden');
    header.classList.add('blue');


  } else{
    btn_nav.classList.remove('burgermenu__btn--clicked');
    btn_nav.classList.remove('burgermenu__btn--collapsed');

    navbar.classList.add('hidden');
    header.classList.remove('blue');
  }
  
  
});