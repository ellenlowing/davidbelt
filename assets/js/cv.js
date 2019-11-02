const introNum = 3;
const moduleNum = 3;
let introCurrent = 0;
let introNext = 1;
const controller = new slidebars();

window.onload = () => {

  // Set up nav
  controller.init();
  $('.hamburger-logo').click((e) => {
    e.stopPropagation();
    e.preventDefault();
    if($('.hamburger').hasClass('hamburger-active')) {
      controller.close('id-hamburger');
      $('.hamburger').removeClass('hamburger-active');
    } else {
      controller.open('id-hamburger');
      $('.hamburger').addClass('hamburger-active');
    }
  })
  $(document).click( (e) => {
    if($('.hamburger').hasClass('hamburger-active') && (e.pageX < ($(window).width() - $('.hamburger-menu').width()) || e.clientY > $('.hamburger-menu').height())) {
      controller.close('id-hamburger');
      $('.hamburger').removeClass('hamburger-active');
    }
  });
}
