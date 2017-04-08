(function($) {
  function wrapImg() {
    var figure   = '<figure></figure>',
      figcaption = '<figcaption></figcaption>',
      images     = $('.blog-content').find('img'),
      // Заменить классы обтекания на классы wp
      floatLeft  = 'pull-left',
      floatRight = 'pull-right';

    function setFigureWidth(el, width) {
      el.css('max-width', width);
    }

    function setFigureMargin(el, direction, value) {
      el.css('margin-' + direction, value);
    }

    function changeWidth(selfFigure, imgWidth) {
      if ($(window).width() < 1201 && $(window).width() > 599) {
        setFigureWidth(selfFigure, '40%');
      } else if ($(window).width() < 600) {
        setFigureWidth(selfFigure, '100%');
      } else {
        setFigureWidth(selfFigure, imgWidth + 'px');
      }
    }

    images.each(function() {
      var self = $(this),
        title  = self.attr('title');

      self.wrap(figure);

      var selfFigure = self.parent('figure');

      selfFigure.append(figcaption);

      if (title) {
        self.siblings('figcaption').html(title);
      }

      if(self.hasClass(floatRight) || self.hasClass(floatLeft)) {
        setTimeout(function() {
          var imgWidth = self.width();

          changeWidth(selfFigure, imgWidth);

          $(window).on('resize', function() {
            changeWidth(selfFigure, imgWidth);
          });
        }, 100);

        self.attr('class').split(' ').forEach(function(el) {
          if (el === floatRight || el === floatLeft) {
            self.removeClass(el).parent('figure').addClass(el);

            switch(el) {
              case floatRight:
                ($(window).width() < 600) ? setFigureMargin(selfFigure, 'left', '0') : setFigureMargin(selfFigure, 'left', '10%');
                break;

              case floatLeft:
                ($(window).width() < 600) ? setFigureMargin(selfFigure, 'right', '0') : setFigureMargin(selfFigure, 'right', '10%');
                break;

              default:
                selfFigure.css('margin', '');
                break;
            }
          }
        });
      }
    });
  }

  wrapImg();
}(jQuery));
