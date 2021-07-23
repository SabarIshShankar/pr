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