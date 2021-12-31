function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function game_block_it() {
  location.href = "block_it";
}
function game_bubble_shooter() {
  location.href = "bubble_shooter";
}
function game_canvas() {
  location.href = "canvas";
}
function game_match_3() {
  location.href = "match_3";
}
function game_snake() {
  location.href = "snake_game";
}
