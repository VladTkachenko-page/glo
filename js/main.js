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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.steps__swiper-pagination',
      type: 'bullets',
    },
    
  });
  var ssSwiper = new Swiper ('.steps_swiper-container', {  
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
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

  const video = new WOW(
    {
    boxClass:     'video',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  );
  video.init();

  const validate = (element) => {
    $(element).validate({
    errorClass: "invalid",
    errorElement: "div",
    errorPlacement: function(error, element) {
      if (element.attr("name") == "policyCheckbox") {
          error.insertAfter(element.parent());
      } else {
          error.insertAfter(element);
      }
  },
    rules: {
      // simple rule, converted to {required:true}
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
      // compound rule
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
    }
  });
}
  validate('.control__form');
  validate('.modal__form');
  validate('.footer__form');
  $('[type=tel]').mask('+7(000) 000-00-00');

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.208901, 39.631539],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Добро пожаловать'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
});
});