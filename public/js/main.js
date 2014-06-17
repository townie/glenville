$(document).scroll(function() {
  var winHeight = $(window).height();

  $('.section_2').css('margin-top', $(window).height());
});

var $container = $('#container');
// init
$container.isotope({
  // options
  itemSelector: '.menu_item',
  layoutMode: 'fitRows'
});
