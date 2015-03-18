var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.wm) HIKARI.gaea.wm = {};

if (!HIKARI.gaea.wm.tooltip) {
	HIKARI.gaea.wm.tooltip = {
		init: function () {},
		showTooltip: function (e, msg, cont) {

			var tooltip = $("<div>").appendTo("body").addClass("tooltip").html(msg);

			$(document).bind("mousemove", function (e) {

				$(tooltip).css({
					"top": e.pageY + 5,
					"left": e.pageX + 5,
					"z-index": 70000
				});

			});

		},

		hideTooltip: function () { $(".tooltip").remove(); }
	};
}
