$(document).ready(function(){


  var nav_container = $('.nav-height');
  var navigation = $('.navbar')

  nav_container.waypoint({
    handler: function(direction) { 
      if (direction === 'down') { 
        navigation.stop().addClass('stuck');
    } else { 
        navigation.stop().removeClass('stuck'); 
      } 
    } 
  });

  var stickyWrap = $('.nav-height').one();
  var menuAppearBuffer = $('.nav-height').position().top + 600;
  var lastScrollTop = 0;
    
  $(window).scroll(function(){
    if ( $(navigation).hasClass('stuck') ) {
      var st = $(this).scrollTop();
      if (st > menuAppearBuffer && st > lastScrollTop){
        stickyWrap.addClass('navbar-hidden');

      } else {
        stickyWrap.removeClass('navbar-hidden');
      }
      lastScrollTop = st;
    }
  });


});

// $(window).on('beforeunload', function(){
//   $(window).scrollTop(0);
//   $('html').text(''); 
// });