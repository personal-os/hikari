var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.app) HIKARI.gaea.app = {};

HIKARI.gaea.app.about = function () {
	// HIKARI.gaea.wm.window.call(this, "About", "memory", 420, 180, "no");
	HIKARI.gaea.wm.window.call(this, "About", "", 500, 250, "no");
};

HIKARI.gaea.app.about.prototype = new HIKARI.gaea.wm.window;

HIKARI.gaea.app.about.prototype.init = function () {

	this.drawWindow();
	this.menuOpt();

	$("<h1>").appendTo(this.getContent()).text("Gaea — hikari window manager");
	$("<p>").addClass("aboutVersionText").text("Version 0.1").appendTo(this.getContent());
	$("<p>").addClass("aboutText").appendTo(this.getContent()).html("Super awesome awesomeness for hikari.");
	// $("<p>").addClass("aboutText").appendTo(this.getContent()).html("Super awesome awesomeness for hikari.<br/>Based on code by <a href=\"http://dubbe.se\">Thomas Dahlberg</a>");

};

HIKARI.gaea.app.about.prototype.menuOpt = function () {

	var
	that = this,
	menuArr = [];

	menuArr.push([this.closeWindow, "NULL", "close.png", "File", "Close"]);
	that.drawMenu(menuArr);

};
