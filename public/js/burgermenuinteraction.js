const btn_nav = document.querySelector('.burgermenu__btn');
const header = document.querySelector('.main-header');

btn_nav.addEventListener('click',()=>{
  if(!btn_nav.classList.contains('burgermenu__btn--clicked')){
    btn_nav.classList.add('burgermenu__btn--clicked');
    btn_nav.classList.add('burgermenu__btn--collapsed');
    header.classList.add('main-header--active');

  } else{
    btn_nav.classList.remove('burgermenu__btn--clicked');
    btn_nav.classList.remove('burgermenu__btn--collapsed');
    header.classList.remove('main-header--active');
  }
  
  
});