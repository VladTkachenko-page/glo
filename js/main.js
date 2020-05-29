$(document).ready(function () {
  var modal = $('.modal'),
      modalDialog = $('.modal__dialog'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      modalThanks = $('.modal__thanks')
      closeBtnThaks = $('.modal__thanks-close')
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
    $('html').animate({scrollTop: $('.projects').position().top - 80}, 1000);
  });

  var mySwiper = new Swiper ('.projects__swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
  });
  var next = $('.projects__swiper-button-next');
  var prev = $('.projects__swiper-button-prev');
  var pbullets = $('.projects__swiper-pagination');

  next.css('left', prev.width() + 15 + pbullets.width() + 15);
  pbullets.css('left', prev.width() + 15);
  
  var sSwiper = new Swiper ('.steps__swiper-container', { 
    loop: true,
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
    },
  });
  var ssSwiper = new Swiper ('.steps_swiper-container', {  
    loop: true,
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
  });
  var sbullets = $('.steps__swiper-pagination');
  var snext = $('.steps__swiper-button-next');
  var sprev = $('.steps__swiper-button-prev');

  snext.css('left', sprev.width() + 15 + sbullets.width() + 15);
  sbullets.css('left', sprev.width() + 15);

  $('.steps__menu-item').on('click', function () {
    $('.steps__menu-item').removeClass('active');
    $('.steps__menu-item').addClass('active');
    const e = $(this).data('index');
    sSwiper.slideTo(e);
    ssSwiper.slideTo(e);
  });
  sSwiper.on('slideChange', (function () {
    const e = sSwiper.realIndex;
    $('.steps__menu-item').removeClass('active');
    $('.steps__menu-item').eq(e).addClass('active');
  }));

  sSwiper.on('slideChange', function () {
    $('.steps__swiper-slide-count').text(sSwiper.realIndex + 1 + '/' + (sSwiper.slides.length - 2));
  });
  new WOW().init();
  closeBtnThaks.on('click', function () {
    modalThanks.toggleClass('modal__thanks--visible');
  });

  modalThanks.on('click', function (e) {
    if (e.target!=modalDialog[0]&&!modalDialog.has(e.target).length){
        modalThanks.toggleClass('modal__thanks--visible');  
    }
  });

  const validate = (element) => {
    $(element).validate({
    errorClass: "invalid",
    errorElement: "div",
    errorPlacement: function(error, element) {
      if (element.attr("name") == "policyCheckbox") {
          error.insertAfter(element.next());
      } else {
          error.insertAfter(element);
      }
  },
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyCheckbox: {
        required: true,
      },
      userQuestion: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"
      },
      userPhone: "Телефон обязателен",
      policyCheckbox: "Вам нужно согласиться с обработкой данных",
      userQuestion: "Задайте вопрос",
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('modal__thanks--visible'); 
          $(form)[0].reset();
        }
      });
    }
  });
}
  validate('.control__form');
  validate('.measure__form');
  validate('.modal__form');
  validate('.footer__form');
  $('[type=tel]').mask('+7(000) 000-00-00');

var player;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '360',
    width: '100%',
    videoId: 'RHzzLqJWqHs',
    events: {
      'onReady': videoPlay,
    }
  });
})

function videoPlay(event) {
  event.target.playVideo();
}
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top - 20;
      $('body,html').animate({scrollTop: top}, 2000);
  });
});
  var fSwiper = new Swiper ('.styles__swiper-container', {  
    loop: true,
  });
  $('.styles-menu__item').on('click', function () {
      const e = $(this).data('index');
      $(this).addClass('active').siblings().removeClass('active');
      $('.styles__slide').css("display", "none").eq(e).css("display", "flex")
  });

  $('.styles-menu__item').eq(0).addClass('active'),
  $('.styles__slide').eq(1).css("display", "flex");
new Swiper(".styles-slider",{
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
  }
});
});