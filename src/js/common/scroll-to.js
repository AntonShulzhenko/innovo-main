(function($) {
  var scrollTo = (function() {
    $('.scroll-to').on('click', function(e) {
      var clickElement = $(this).attr('href');
      var clickDestination = $(clickElement).offset().top;

      $('html:not(:animated),body:not(:animated)').animate({scrollTop: clickDestination},1000);
      e.preventDefault();
    });
  })();

  var goTop = $('.go-top');

  $(window).on('scroll', function() {
    if($(window).scrollTop() > 500) {
      goTop.addClass('is-visible');
    } else {
      goTop.removeClass('is-visible');
    }
  });
})(jQuery);
