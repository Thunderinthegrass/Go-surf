$(function(){
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">',
    asNavFor:'.slider-dotshead'
  });
  $('.slider-dotshead').slick({
    asNavFor:'.header__slider',
    slidesToShow: 4,
    slidesToScroll: 1,
  })
  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">',
    asNavFor:'.slider-map'
  });
  $('.slider-map').slick({
    asNavFor:'.surf-slider',
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true
  })
  $('.travel__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">'
  });
});