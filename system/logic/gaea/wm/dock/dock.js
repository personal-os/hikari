var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.wm) HIKARI.gaea.wm = {};

if (!HIKARI.gaea.wm.dock) {
	HIKARI.gaea.wm.dock = {

		init: function () {

			this.dock = $("<section>").appendTo(".hikari-content-inner").attr("id", "taskbar").addClass("docked-top");
			$("<div>").appendTo("#taskbar").attr("id", "start").html("<button data-effect='left'>Start</button>");

		},

		addIcon: function (icon) {
			$(icon).appendTo(this.dock);
		}
	};
}
