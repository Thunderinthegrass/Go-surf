$(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">',
    asNavFor: '.slider-dotshead'
  });
  $('.slider-dotshead').slick({
    asNavFor: '.header__slider',
    slidesToShow: 4,
    slidesToScroll: 1,
  })
  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">',
    asNavFor: '.slider-map'
  });
  $('.slider-map').slick({
    asNavFor: '.surf-slider',
    slidesToShow: 8,
    slidesToScroll: 1,
    focusOnSelect: true
  })
  $('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">'
  });


  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  let nights = document.querySelector('.nights');
  let guests = document.querySelector('.guests');
  let summ = document.querySelector('.summ');
  let quantityButton = document.querySelectorAll('.quantity-button');

  
  summ.innerHTML = (nights.value * 55) + ((guests.value - 1) * 25);

  for(let i = 0; i < quantityButton.length; i++){
    quantityButton[i].onclick = function(){
      summ.innerHTML = (nights.value * 55) + ((guests.value - 1) * 25);
    };
  } 
  

  $('.surfboard-box__circle').on('click', function(){
    $(this).toggleClass('active')
  });
});