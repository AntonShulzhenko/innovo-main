(function($) {
  var fullText = 'Читать всю публикацию',
    shortText  = 'Читать';

  function changeText() {
    if($(window).width() < 600) {
      $('.blog-post__more').html(shortText);
    } else {
      $('.blog-post__more').html(fullText);
    }
  }
  
  changeText();

  $(window).on('resize', function() {
    changeText();
  });
}(jQuery));
