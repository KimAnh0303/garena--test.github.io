// slick slider
$(document).ready(function(){
  $('.list-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay:true,
    autoplaySpeed: 1200,
    dots: true,
    arrows:true,
    prevArrow:
    `<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'</i></button>`,
    nextArrow:
    `<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'</i></button>`,
  });
});	
