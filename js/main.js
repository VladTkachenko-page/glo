document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalDialog = document.querySelector('.modal__dialog')
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  
  closeBtn.addEventListener('click', switchModal);
  
  modal.addEventListener('click', event => {
    const isClickInside = modalDialog.contains(event.target);

    if (!isClickInside) {
      modal.classList.toggle('modal--visible');
    }
  })

});
document.body.addEventListener('keyup', (e) => {
  const key = e.keyCode;

  if (key == 27) {
      document.querySelector('.modal--visible').classList.remove('modal--visible');
  };
});
