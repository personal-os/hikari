jQuery.fn.center = function () {

	if ($(this.parent()).is("body")) {
		this.css("position", "absolute");
		this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
		this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
	} else {
		this.css("position", "absolute");
		this.css("margin-top", ($(this.parent()).height() - this.height()) / 2 + "px");
		this.css("margin-left", ($(this.parent()).width() - this.width()) / 2 + "px");
	}

	return this;

};

jQuery.fn.centerImage = function () {

	this.css("position", "static");
	this.css("margin-top", ($(this.parent()).height() - this.height()) / 2 + "px");
	this.css("margin-left", ($(this.parent()).width() - this.width()) / 2 + "px");

	return this;

};

jQuery.fn.myDateYear = function () {

	date = new Date($(this)[0]);
	return date.getFullYear();

};

jQuery.fn.myDateMonth = function () {

	var month = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];

	date = new Date($(this)[0]);
	return month[date.getMonth()];

};

jQuery.fn.myDateDay = function () {

	date = new Date($(this)[0]);

	if (date.getDate() < 10) {
		return "0" + date.getDate();
	} else {
		return date.getDate();
	}

};

jQuery.fn.myDateHours = function () {

	date = new Date($(this)[0]);

	if (date.getHours() < 10) {
		return "0" + date.getHours();
	} else {
		return date.getHours();
	}

};

jQuery.fn.myDateMinutes = function () {

	date = new Date($(this)[0]);

	if (date.getMinutes() < 10) {
		return "0" + date.getMinutes();
	} else {
		return date.getMinutes();
	}

};

jQuery.fn.myDateSec = function () {

	date = new Date($(this)[0]);

	if (date.getSeconds() < 10) {
		return "0" + date.getSeconds();
	} else {
		return date.getSeconds();
	}

};

jQuery.fn.myTimeHours = function () {

	date = new Date($(this)[0]);

	if (date.getHours() < 10) {
		return "0" + (date.getHours() - 1);
	} else {
		return date.getHours();
	}

};
