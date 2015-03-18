var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.app) HIKARI.gaea.app = {};

HIKARI.gaea.app.settings = function () {
	// HIKARI.gaea.wm.window.call(this, "Settings", "settingsBig", 420, 180, "no");
	HIKARI.gaea.wm.window.call(this, "Settings", "settingsBig", 500, 250, "no");
};

HIKARI.gaea.app.settings.prototype = new HIKARI.gaea.wm.window;

HIKARI.gaea.app.settings.prototype.init = function () {

	var
	that = this,
	form = $("<form>");

	$("<span>").text("Höjd: ").appendTo(form).addClass("popUpLabel");

	var height = $("<input type='text'>").appendTo(form).attr({
		name: "height"
	}).val(parseInt($("#background").css("height")));

	$("<br>").appendTo(form);
	$("<span>").text("Bredd: ").appendTo(form).addClass("popUpLabel");

	var width = $("<input type='text'>").appendTo(form).attr({
		name: "width"
	}).val(parseInt($("#background").css("width")));

	$("<input type='button'>").appendTo(form).attr({
		value: "ändra"
	}).click(function () {
		that.changeSize($(height).val(), $(width).val());
		that.hidePopUp();
	});

	this.showPopUp("260px", "150px", form);

};

HIKARI.gaea.app.settings.prototype.changeSize = function (width, height) {

	// console.log("ändrar storlek");
	$("#background").css({
		"width": width,
		"height": height
	});

};
