var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.wm) HIKARI.gaea.wm = {};

if (!HIKARI.gaea.wm.dock) {
	HIKARI.gaea.wm.dock = {

		init: function () {

			this.dock = $("<section>").appendTo(".hikari-content-inner").attr("id", "taskbar").addClass("docked-top");
			// $("<div>").appendTo("#taskbar").attr("id", "start").html('<button data-effect="left">Start</button>');
			$('<div id="start"><button data-effect="left">Start</button></div>').appendTo("#taskbar");
			$('<div id="subtaskbar"></div>').appendTo("#taskbar");
			$('<div id="weather"></div>').appendTo("#subtaskbar");
			$('<div id="full-time"><span id="full-date"></span> &middot; <span id="time"></span></div>').appendTo("#subtaskbar");

		},

		addIcon: function (icon) {
			$(icon).appendTo(this.dock);
		}
	};
}
