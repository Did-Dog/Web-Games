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
