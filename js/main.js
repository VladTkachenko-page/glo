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
  
  modal.on('click', function (e) {
    if (e.target!=modalDialog[0]&&!modalDialog.has(e.target).length){
        modal.toggleClass('modal--visible');  
    }
});
  
  $(document).keydown(function(eventObject){
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

  $('.hero__scroll-down').on("click", "", function() {
    $('html').animate({scrollTop: $('.control').position().top - 80}, 1000);
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 15 + bullets.width() + 15);
  bullets.css('left', prev.width() + 15)
});