const introNum = 3;
const moduleNum = 3;
let introCurrent = 0;
let introNext = 1;
const controller = new slidebars();

window.onload = () => {

  // Set up nav w/ slidebars
  // controller.init();
  $('.hamburger-logo').click((e) => {
    e.stopPropagation();
    e.preventDefault();
    if($('.hamburger').hasClass('hamburger-active')) {
      // controller.close('id-hamburger');
      $('.hamburger').removeClass('hamburger-active');
    } else {
      // controller.open('id-hamburger');
      $('.hamburger').addClass('hamburger-active');
    }
  })
  $(document).click( (e) => {
    if($('.hamburger').hasClass('hamburger-active') && (e.pageX < ($(window).width() - $('.hamburger-menu').width()) || e.clientY > $('.hamburger-menu').height())) {
      // controller.close('id-hamburger');
      $('.hamburger').removeClass('hamburger-active');
    }
  });

  // Set up hamburger menu title scroll listener
  // let hamburgerMenuTitles = $('.hamburger-menu-title').not('#hamburger-menu-cv');
  // hamburgerMenuTitles.each( function() {
  //   $(this).click( (e) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     let contentDiv = '#content-div-' + $(this).attr('id').replace('hamburger-menu-', '');
  //     $('html, body').animate( {scrollTop: $(contentDiv).offset().top - 20}, 1000, 'easeInOutCubic', null);
  //   });
  // });
}
