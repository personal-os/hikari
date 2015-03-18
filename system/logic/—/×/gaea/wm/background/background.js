var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.wm) HIKARI.gaea.wm = {};

HIKARI.gaea.wm.background = function (bgImg, width, height) {

	$("<div>").attr("class", "hikari-content-inner").appendTo(".hikari-content");
	// $("<img>").attr("src", "appPics/logo.png").addClass("logo").appendTo("#background");

	// this.getWidth = function () { return width; };
	// this.getHeight = function () { return height; };

	this.setBackground = function (_img) {
		// $("#background").css({ "background": "url(" + _img + ")" });
		$(".hikari-content-inner").css({ "background": "url(" + _img + ")" });
		// $(".hikari-content-inner").backstretch("system/shell/wallpaper/summer-sky.jpg");
	};

};
