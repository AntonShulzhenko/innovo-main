(function($) {
  function wrapImg() {
    var figure   = '<figure></figure>',
      figcaption = '<figcaption></figcaption>',
      images     = $('.blog-content').find('img'),
      // Заменить классы обтекания на классы wp
      floatLeft  = 'pull-left',
      floatRight = 'pull-right';

    images.each(function() {
      var self = $(this),
        title  = self.attr('title');

      self.wrap(figure);
      self.parent('figure').append(figcaption);

      if (title) {
        self.siblings('figcaption').html(title);
      }

      if(self.hasClass(floatRight) || self.hasClass(floatLeft)) {
        self.attr('class').split(' ').forEach(function(el) {
          if (el === floatRight || el === floatLeft) {
            self.removeClass(el).parent('figure').addClass(el);

            switch(el) {
              case floatRight:
                self.parent('figure').css('margin-left', '10%');
                break;

              case floatLeft:
                self.parent('figure').css('margin-right', '10%');
                break;

              default:
                self.parent('figure').css('margin', '');
                break;
            }
          }

        });
      }

      setTimeout(function() {
        var imgWidth = self.width();
        self.parent('figure').css('max-width', imgWidth + 'px');
      }, 100);
    });
  }

  wrapImg();
}(jQuery));
