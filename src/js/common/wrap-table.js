(function($) {
  function wrapTable() {
    var table = $('.blog-content').find('table'),
      wrap    = '<div class="table"></div>',
      scroll  = '<div class="table-scroll"></div>';

    table.wrap(wrap);
  }

  wrapTable();
}(jQuery));
