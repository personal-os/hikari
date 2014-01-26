var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.wm) HIKARI.gaea.wm = {};

HIKARI.gaea.wm.icon = function (name, img, func) {

	var
	that = this,
	icon = $("<div>").addClass("icon");

	var iconA = $("<a>").appendTo(icon).attr("href", "#").click(function (e) {

		var window = new func;
		e.preventDefault();

		console.log(window.init());

	});

	var iconImg = $("<img>").appendTo(iconA).attr("src", "appPics/icons/" + img).addClass("iconImg").mouseenter(function (e) {

		HIKARI.gaea.wm.tooltip.showTooltip(e, name, icon);

		$(iconImg).animate({
			top: '-15',
			height: '+=15'
		}, 100, function () {
		});

		e.preventDefault();

	}).mouseleave(function (e) {

		HIKARI.gaea.wm.tooltip.hideTooltip(e);

		$(iconImg).animate({
			top: '0',
			height: '-=15'
		}, 100, function () {
		});

		e.preventDefault();

	});

	HIKARI.gaea.wm.dock.addIcon(icon);

};
