// document.addEventListener("DOMContentLoaded", function(event) { 
//   const modal = document.querySelector('.modal');
//   const modalDialog = document.querySelector('.modal__dialog')
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }

//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
  
//   closeBtn.addEventListener('click', switchModal);
  
//   modal.addEventListener('click', event => {
//     const isClickInside = modalDialog.contains(event.target);

//     if (!isClickInside) {
//       modal.classList.toggle('modal--visible');
//     }
//   })

// });
// document.body.addEventListener('keyup', (e) => {
//   const key = e.keyCode;

//   if (key == 27) {
//       document.querySelector('.modal--visible').classList.remove('modal--visible');
//   };
// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalDialog = $('.modal__dialog'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      scrollUp = $('.scroll-up');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  
  modal.mouseup(function (e) {
    if (modalDialog.has(e.target).length === 0){
        modal.toggleClass('modal--visible');  
    }
});
  
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
    $('.modal--visible').removeClass('modal--visible');
    });
  
    $(window).scroll(function(){
      if($(window).scrollTop() > 120) {
        $('.scroll-up').show();
      } else {
        $('.scroll-up').hide();
      }
    });
  
  $('.scroll-up').on("click", "", function() {
    $('body, html').animate({scrollTop: 0}, 1000);
  });

});