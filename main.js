$(function(){

  function responsive() {
    WinHeight = $(window).height();
    WinWidth = $(window).width();
    SliderImgHeight = $('.top-it').height();
    SliderHeight = $('#myCarousel').height();
    $('.main').css({'margin-top' : SliderHeight});
    if(WinWidth < 768) {
      $('#menues').removeClass('in');
    } else {
      $('#menues').addClass('in');
    }
    if(WinWidth > 1450) {
      $('.top-it').css({'top' : -(SliderImgHeight - WinHeight*0.8 - 200)})
    } else {
      $('.top-it').css({'top' : 0})
    }
  }

  responsive();
  $(window).resize(function() {
    responsive();
  })

  $('a').on('click', function(e) {
    if($(this).attr('href') == '#') {
      e.preventDefault();
    }
  })

  $('.toggler-menu').on('click', function(e) {
    $('nav').addClass('fixed-nav');
    e.preventDefault();
  })

  $('#roll-more').on('click',function(e) {
    e.preventDefault();
    if($(this).html() == 'Show more models') {
      $(this).html('Show less models');
      $('.glyphicon-chevron-down').css({'transform' : 'rotate(180deg)  translate(0px, -5px)'});
    } else {
        $(this).html('Show more models');
        $('.glyphicon-chevron-down').css({'transform' : 'rotate(0deg) translate(0px, 0px)'});
    }
  });

  function scroll() {
    var CarHeight = $('.carousel').outerHeight();
    var rollIns = $('#roll-ins').offset().top;
    var FadeUp = $('#fade-up').offset().top;
    var sc = $(window).scrollTop();
    var Csc = sc/2;
    // var windowFadeTop = $('.window-scrl-fade').offset().top;
    $('#myCarousel').css({'top' : -Csc});
    if(sc >= CarHeight) {
      $('nav').addClass('fixed-nav');
      // var opacity = (sc + 500 - windowFadeTop) / (sc / 6);
      // $('.window-scrl-fade').css({'opacity' : opacity});
    } else {
      $('nav').removeClass('fixed-nav');
    }
    if (sc >= (FadeUp - ($(window).height() - 200))) {
      $('#fade-up').addClass('fade-up');
    } else {
      $('#fade-up').removeClass('fade-up');
    }
    if(sc > rollIns - ($(window).height() - 200)) {
      $('.roll-img1').each(function(i) {
        setTimeout(function() {
          $('.roll-img1').eq(i).addClass('rolled-in');
        }, 150 * (i+1));
      });
    } else {
      $('.roll-img1').each(function(i) {
        setTimeout(function() {
          $('.roll-img1').eq(i).removeClass('rolled-in');
        }, 150 * (i+1));
      });
    }
  }

  $(window).scroll(function() {
    scroll();
  })
  scroll();
})


function responsive1() {
  var CarHeight = $('.carousel').outerHeight();
  $("nav").attr('data-offset-top', CarHeight);
}
$(window).resize(function() {
  responsive1();
})
responsive1();
