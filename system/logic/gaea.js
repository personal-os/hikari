
var $vW = $(window).width(), $vH = $(window).height();

$(document).ready(function () {

	var $verticalMenu = $(".left.hikari-menu ul").height();
	// $(".hikari-pusher").height();
	// $(".left.hikari-menu ul").css("margin-top", $vH - $verticalMenu * 2 + "px");
	$(".left.hikari-menu").css("padding-top", $vH / 6);
	// $(".left.hikari-menu").css("height", $(".hikari-pusher").height());
	
	$(".hikari-content-inner").backstretch("system/shell/wallpaper/spring-sriram.jpg");

});

$("#select-chip-folder").click(function (e) {

	// var wm = new Gaea.WindowManager();
	// window.wm = wm; // For debugging reasons

	$(".wm-space").append('<div id="chip-folder"></div>');

	var chipWin = wm.createWindow.fromQuery("#chip-folder", {

		title: "Chip Folder",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});