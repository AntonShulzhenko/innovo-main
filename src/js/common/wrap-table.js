(function($) {
  function wrapTable() {
    var table = $('.blog-content').find('table'),
      tableWidth = table.width(),
      wrap    = '<div class="table"><div class="table__inner"></div></div>',
      scroll  = '<div class="table-scroll">' +
                '<button class="table-scroll__btn prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>' +
                '<button class="table-scroll__btn next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>' +
                '</div>';

    table.wrap(wrap);

    // var tableContainer = $('.blog-content').find('.table'),
    //   tableContainerWidth = tableContainer.width();
    //
    //
    // console.log(tableWidth, tableContainerWidth);
    //
    // if ($(window).width() < 600) {
    //   table.parent().parent().append(scroll);
    //
    //   var tableInner = tableContainer.find('.table__inner'),
    //     tablePrev = tableContainer.find('.prev'),
    //     tableNext = tableContainer.find('.next'),
    //     i = 0;
    //
    //   tableNext.on('click', function() {
    //     i += 10;
    //     table.css('-webkit-transform', 'translateX(-' + i + 'px)');
    //   });
    //
    //   tablePrev.on('click', function() {
    //     i -= 10;
    //     table.css('-webkit-transform', 'translateX(-' + i + 'px)');
    //   });
    // }
  }

  wrapTable();
}(jQuery));
