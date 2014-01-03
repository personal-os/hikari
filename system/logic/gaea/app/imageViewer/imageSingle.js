var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.app) HIKARI.gaea.app = {};

HIKARI.gaea.app.imageSingle = function (link) {

	if (parseInt($(link).attr("height")) + 74 > parseInt($("#background").css("height"))) {
		this.winHeight = parseInt($("#background").css("height"));
		this.imgHeight = parseInt($("#background").css("height")) - 74;

		var x = this.imgHeight / parseInt($(link).attr("height"));
		// console.log(x+" = "+parseInt($(link).attr("height"))+" / "+this.imgHeight);

		this.imgWidth = x * parseInt($(link).attr("width"));
		this.winWidth = this.imgWidth;
	} else {
		this.winHeight = parseInt($(link).attr("height")) + 74;
	}

	if (parseInt($(link).attr("width")) + 10 > parseInt($("#background").css("width"))) {
		this.winWidth = parseInt($("#background").css("width"));
	} else {
		if (!this.imgWidth) {
			this.winWidth = parseInt($(link).attr("width"));
		}
	}

	HIKARI.gaea.wm.window.call(this, $(link).attr("src"), "image16", this.winWidth, this.winHeight, "no");

};

HIKARI.gaea.app.imageSingle.prototype = new HIKARI.gaea.wm.window;

HIKARI.gaea.app.imageSingle.prototype.init = function () {

	this.drawWindow();
	this.menuOpt();
	this.drawImage();

};

HIKARI.gaea.app.imageSingle.prototype.drawImage = function () {

	$(this.getContent()).addClass("imageSingleWindowMain");

	$("<img>").appendTo(this.getContent()).attr("src", "pics/" + this.getName()).addClass("imageSingleImg").css({
		"height": this.imgHeight,
		"width": this.imgWidth
	});

	$(this.getInfo()).text(" ");

};

HIKARI.gaea.app.imageSingle.prototype.setAsBg = function () {
	$("#background").css({
		"background": "url(pics/" + this.getName() + ")"
	});
};

HIKARI.gaea.app.imageSingle.prototype.menuOpt = function () {

	var that = this;
	var menuArr = [];

	menuArr.push([this.closeWindow, "NULL", "close.png", "File", "Close"]);
	menuArr.push([this.setAsBg, this, "bg.png", "Edit", "Set as background"]);

	that.drawMenu(menuArr);

};
