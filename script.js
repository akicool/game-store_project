var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

// main page
let navUser = document.querySelector('.nav__user');
let dialog = document.querySelector('.dialog');
let dialogWindow = document.querySelector('.dialog__window');
let subContainer = document.querySelector('.sub-container');
let container = document.querySelector('.container');

// selection page 
let dialogButtonBack = document.querySelector('.dialog__button-back');
let dialogButtonSignin = document.querySelector('.dialog__button-signin');
let dialogButtonLogin = document.querySelector('.dialog__button-login ');
let formSignin = document.querySelector('.form__signin');
let formLogin = document.querySelector('.form__login')

// signin block 
let formSigninButtonBack = document.querySelector('.form__signin-button-back');

// login block 
let formLoginButtonBack = document.querySelector('.form__login-button-back');

navUser.onclick = function() {
  container.classList.add('active')
  subContainer.classList.add('active')
  dialog.classList.add('active');
};  

dialogButtonBack.onclick = function() {
  container.classList.remove('active');
  subContainer.classList.remove('active');
  dialog.classList.remove('active');
};

dialogButtonSignin.onclick = function() {
  dialogWindow.classList.add('remove-block');
  formSignin.classList.add('active');
};

formSigninButtonBack.onclick = function() {
  formSignin.classList.remove('active');
  dialogWindow.classList.remove('remove-block');
};

dialogButtonLogin.onclick = function() {
  dialogWindow.classList.add('remove-block');
  formLogin.classList.add('active');
};

formLoginButtonBack.onclick = function() {
  formLogin.classList.remove('active');
  dialogWindow.classList.remove('remove-block');
};

// button click application 
let appCurrentButtonLink = document.querySelector('.app__current-button-link');
let appGenreButtonLink = document.querySelector('.app__genre-button-link');

// button-current click 
let applicationCurrentBlock = document.querySelector('.application__current-block');


appCurrentButtonLink.onclick = function() {
  subContainer.classList.add('display-off');
  applicationCurrentBlock.classList.add('display-on');
};


