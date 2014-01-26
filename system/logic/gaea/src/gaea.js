// Gaea
define(function (require) {

	"use strict";

	return {
		version: "0.1",

		browser: {
			animationEventName: function () {

				var
				style = document.body.style,
				event = null;

				if (style.animation === "")
					event = "animationend";

				else if (style.MozAnimation === "")
					event = "mozAnimationEnd";

				else if (style.webkitAnimation === "")
					event = "webkitAnimationEnd";

				return event;

			}
		},

		WindowManager: require("gaea/wm/windowmanager"),
		Window: require("gaea/wm/window")
	};

});
