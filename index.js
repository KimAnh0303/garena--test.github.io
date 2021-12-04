// slick slider
$(document).ready(function(){
  $('.list-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});	

// navbar
function scrollHeader(){
  const nav = document.getElementById('header-wrap');
  //When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 100) nav.classList.add('scroll-header'); 
  else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);



// =========================SHOW MENU========================
0

$(document).ready(function () {
    $("#btn-navbar").click(function () {
        $("#topnav").toggleClass("show-menu");
        return false;
    });
});