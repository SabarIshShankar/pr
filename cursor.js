var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e) {
    e.stopPropagation();
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});

var cursor = document.getElementById('cursor');
var clickableCursor = document.getElementsByClassName('clickableCursor');

for (var i = 0; i < clickableCursor.length; i++) {
    clickableCursor[i].addEventListener('mouseover', () => {
        cursor.style.height = "80px";
        cursor.style.width = "80px";
        cursor.style.animation = "cursorAnimation 5s linear infinite";
        cursor.style.background = "white";
    });
    clickableCursor[i].addEventListener('mouseout', () => {
        cursor.style.height = "40px";
        cursor.style.width = "40px";
        cursor.style.animation = "none";
        cursor.style.border = "2px solid white";
      cursor.style.background = "none";
    });
}



var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');