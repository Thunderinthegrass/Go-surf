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
    responsive: [{
      breakpoint: 961,
      settings: {
        settings: "unslick"
      }
    }]
  });
  $('.swamp-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left"src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right"src="img/arrows-right.svg" alt="">',
    asNavFor: '.slider-map',
    responsive: [{
      breakpoint: 1165,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },{
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },{
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    },{
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }]
  });
  $('.slider-map').slick({
    asNavFor: '.swamp-slider',
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1104,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },{
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      }
    },{
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    },{
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }]
  });
  $('.holder__slider, .shop__slider').slick({
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

  
  // summ.innerHTML = (nights.value * 55) + ((guests.value - 1) * 25);

  for(let i = 0; i < quantityButton.length; i++){
    quantityButton[i].onclick = function(){
      summ.innerHTML = (nights.value * 55) + ((guests.value - 1) * 25);
    };
  } 
  
// 
  $('.swampboard-box__circle').on('click', function(){
    $(this).toggleClass('active')
  });


  let menuBtn = document.querySelector('.menu-btn');
  let activeMenu = document.querySelector('.menu');
  

  menuBtn.onclick = function(){
    activeMenu.classList.toggle('active');
  }
});

//clock--------------------------------------------------------------------
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(()=>{
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

let digitHour = document.querySelector('.digit-hour');
let digitMinutes = document.querySelector('.digit-minutes');
let digitSeconds = document.querySelector('.digit-seconds');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

digitHour.innerHTML = h+':';
digitMinutes.innerHTML = m+':';
digitSeconds.innerHTML = s;

if(h < 10){
  digitHour.innerHTML = "0"+h+':';
}
if(m < 10){
  digitMinutes.innerHTML = "0"+m+':';
}
if(s < 10){
  digitSeconds.innerHTML = "0"+s;
}
})
//end-clock----------------------------------------------------------------