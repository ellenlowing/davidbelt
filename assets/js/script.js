const introNum = 3;
const moduleNum = 3;
let introCurrent = 0;
let introNext = 1;
const controller = new slidebars();

window.onload = () => {

  // Set up auto slideshow on top
  setInterval( () => {
    $('#intro-img-' + introCurrent).animate( {"left": "-100%"}, 2000, 'easeInOutQuad', null);
    $('#intro-img-' + introNext).animate( {"left": "0"}, 2000, 'easeInOutQuad', function() {
      $('#intro-img-' + introCurrent).css({
        'position': 'absolute'
      }).hide();
      introCurrent = (introCurrent + 1) % introNum;
      introNext = (introNext + 1) % introNum;
      $('#intro-img-' + introCurrent).css({
        'left': '0',
        'position': 'relative'
      }).show();
      $('#intro-img-' + introNext).css({
        'left': '100%',
        'top' : '0',
        'position': 'absolute'
      }).show();
    });
  }, 7000);

  // Set up clickable slideshow
  $('.module-arrow-left').click( (e) => {
    const targetImg = $(e.currentTarget).parent().find('.module-img-current');
    const currentIdNum = Number(targetImg.attr('id').substr(-1));
    const prevIdNum = (currentIdNum - 1) >= 0 ? (currentIdNum - 1) : moduleNum-1;
    const prepIdNum = (prevIdNum - 1) >= 0 ? (prevIdNum - 1) : moduleNum-1;
    const currentImg = $(e.currentTarget).parent().find('#module-img-' + currentIdNum);
    const prevImg = $(e.currentTarget).parent().find('#module-img-' + prevIdNum);
    const prepImg = $(e.currentTarget).parent().find('#module-img-' + prepIdNum);
    currentImg.animate({"left": "-100%"}, 1000, 'easeInOutQuad', null);
    prevImg.animate({"left": "0"}, 1000, 'easeInOutQuad', function() {
      targetImg.removeClass('module-img-current');
      prevImg.addClass('module-img-current');
      currentImg.css({"position": "absolute"}).hide();
      prevImg.css({
        'left': '0',
        'position': 'relative'
      }).show();
      prepImg.css({
        'left': '100%',
        'top': '0',
        'position': 'absolute'
      }).show();
    });
  });
  $('.module-arrow-right').click( (e) => {
    const targetImg = $(e.currentTarget).parent().find('.module-img-current');
    const currentIdNum = Number(targetImg.attr('id').substr(-1));
    const nextIdNum = (currentIdNum + 1) < moduleNum ? (currentIdNum + 1) : 0;
    const prepIdNum = (nextIdNum + 1) < moduleNum ? (nextIdNum + 1) : 0;
    const currentImg = $(e.currentTarget).parent().find('#module-img-' + currentIdNum);
    const nextImg = $(e.currentTarget).parent().find('#module-img-' + nextIdNum);
    const prepImg = $(e.currentTarget).parent().find('#module-img-' + prepIdNum);
    console.log(currentIdNum, nextIdNum)
    currentImg.animate({"left": "100%"}, 1000, 'easeInOutQuad', null);
    nextImg.animate({"left": "0"}, 1000, 'easeInOutQuad', function () {
      targetImg.removeClass('module-img-current');
      nextImg.addClass('module-img-current');
      currentImg.css({"position": "absolute"}).hide();
      nextImg.css({
        'left': '0',
        'position': 'relative'
      }).show();
      prepImg.css({
        'left': '-100%',
        'top': '0',
        'position': 'absolute'
      }).show();
    })
  });

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

  // Set up hamburger menu title scroll listener
  let hamburgerMenuTitles = $('.hamburger-menu-title').not('#hamburger-menu-cv');
  hamburgerMenuTitles.each( function() {
    $(this).click( (e) => {
      e.preventDefault();
      e.stopPropagation();
      let contentDiv = '#content-div-' + $(this).attr('id').replace('hamburger-menu-', '');
      $('html, body').animate( {scrollTop: $(contentDiv).offset().top - 20}, 1000, 'easeInOutCubic', null);
    });
  });

  $('#contact-svg').click( () => {
    $('#content-div-contact').addClass('contact-active');
  });
}
