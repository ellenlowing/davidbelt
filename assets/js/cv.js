const introNum = 3;
const moduleNum = 3;
let introCurrent = 0;
let introNext = 1;

window.onload = () => {

  // Set up nav
  $('.hamburger-logo').click((e) => {
    e.stopPropagation();
    e.preventDefault();
    if($('.hamburger').hasClass('hamburger-active')) {
      $('.hamburger').removeClass('hamburger-active');
    } else {
      $('.hamburger').addClass('hamburger-active');
    }
  })
  $(document).click( (e) => {
    if($('.hamburger').hasClass('hamburger-active') && (e.pageX < ($(window).width() - $('.hamburger-menu').width()) || e.clientY > $('.hamburger-menu').height())) {
      $('.hamburger').removeClass('hamburger-active');
    }
  });
}
