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