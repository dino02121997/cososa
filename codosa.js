$(document).ready(function () {
  $("#myNavbar ul li a[href^='#']").on('click', function (e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function () {

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });

  });

  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= 90) {
      $('.menu-top').addClass('menu-top-scroll');

    }
    else {
      $('.menu-top').removeClass('menu-top-scroll');

    }
    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  });
  var mySwiper = new Swiper('#qualities .swiper-container , #staff .swiper-container ', {
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  var swipertest = new Swiper('#testimonials .swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });
  var swiperclient = new Swiper('#big-clients .swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    autoplay: {
      delay: 1000,
    },
    loop: true,
  });
  var swiperNew = new Swiper('#news .swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


});


