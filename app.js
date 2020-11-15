$(function () {
  $('.fade-img img:not(:first-child)').hide();
  setInterval(function () {
    $('.fade-img img:first-child')
      .fadeOut('slow')
      .next('img')
      .fadeIn('slow')
      .end()
      .appendTo('.fade-img');
  }, 3500);
});


//ヘッダー途中から固定
var navPos = jQuery( '#header' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#header' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
  if ( jQuery( this ).scrollTop() > navPos ) {
    jQuery( 'body' ).css( 'padding-top', navHeight );
    jQuery( '#header' ).addClass( 'm_fixed' );
  } else {
    jQuery( 'body' ).css( 'padding-top', 0 );
    jQuery( '#header' ).removeClass( 'm_fixed' );
  }
});

// スクロールでフェードイン
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.fadeIn').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight + 60) {
              $(this).addClass("fadeInDown");
          }
      });
  });
});
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.fadeInTitleR').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight + 60) {
              $(this).addClass("fadeInRight");
          }
      });
  });
});
$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.fadeInTitleL').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight + 60) {
              $(this).addClass("fadeInLeft");
          }
      });
  });
});

//制作物スライダー
var mySwiper = new Swiper ('.swiper-container', {
  effect: 'coverflow',
  slidesPerView: 1.5,
  centeredSlides: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  loop: true,
  autoplay: true,
  speed: 1000,
  coverflowEffect: {
      slideShadows: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    767: {
      slidesPerView: 1.4,
      pagenation: false,
    }
  },
})

//ローディング
$(function(){
  $(window).on('load',function(){
    $("#before-load").delay(2500).fadeOut(600);
    $("#wrapper").css({'position' : 'fixed'});
  });
  function loaderClose(){
    $("#before-load").fadeOut('slow');
  }
  setTimeout(loaderClose,100000);
});