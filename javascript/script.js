
$(document).ready(function () {
    var scrollTrigger = 400, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('.back-top,.back-bottom').show();
        } else {
          $('.back-top,.back-bottom').hide();
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('.back-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
    $('.back-bottom').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: document.body.scrollHeight
      }, 700);
    });
});


//mobile nav///
$('.mobile-nav-icon').click(
  function () {
    $('.nav-container').slideToggle(200);
    if ($('.mobile-nav-icon').hasClass('fa-bars')) {
      $('.mobile-nav-icon').addClass('fa-times');
      $('.mobile-nav-icon').removeClass('fa-bars');
    } else {
      $('.mobile-nav-icon').addClass('fa-bars');
      $('.mobile-nav-icon').removeClass('fa-times');
    }
  }
)

//resize image//
// var carousel = $('.panel-left');
// var carouseltxt = $('.panel-left-top');
// carouselInit();

// $(window).on('load resize', function () {
//   carouselInit();
// });
// function carouselInit() {
//   var mWidth = carousel.width();
//   var mHeight = mWidth / 2.665;
//   carouseltxt.height(mHeight);
// }


$(document).ready(function () {
  $('.left-search button').click(function () {
    $('.input-text').css({ "border": "0.5px dotted", "background": "#eee" });
  });
  $('.main-container , .footer-container').click(function () {
    $('.input-text').css({ "border": "none" });
  });
});


//Carousel-pc//
$(document).ready(function () {
  var owl = $('.panel-left-top');
  owl.owlCarousel({
    items: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    lazyLoad:true,
    loop: true,
    dots: true,
    nav: true,
    navText: ["<img src='./img/icon_pre.png'>", "<img src='./img/icon_next.png'>"],
    dotsContainer: '.panel-left-list',
  });
  $('.list-item-txt').on('click', function (e) {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
  });
});

//
$('.panel-left-top').hover(function () {
  $('.owl-prev , .owl-next').css({ "opacity": "1" });
}, function () {
  $('.owl-prev , .owl-next').css({ "opacity": "0" });
}
);

//Carousel-sp//
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    // delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});