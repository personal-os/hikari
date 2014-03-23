
$(function () {

	$.contextMenu("html5", true);

	$.contextMenu({
		selector: ".desktop",

		items: {
			"system-group": {
				"name": "System",

				"items": {
					"system-group-key1": { "name": "Log Off" },
					"system-group-key2": { "name": "Shutdown" },
					"system-sep": "---------",
					"system-group-key3": { "name": "About", "id": "contextSystem-about"  },
				}
			},

			"desktop-group": {
				"name": "Desktop",

				"items": {
					"desktop-group-key1": { "name": "Change Background", "id": "contextDesktop-changeBG" },
					"desktop-group-key2": { "name": "Hide Icons" },
					"desktop-group-key3": { "name": "Personalize" },
					"desktop-group-key4": { "name": "Showcase", "id": "contextDesktop-showcase" }
				}
			},

			"config-group": {
				"name": "Config",

				"items": {
					"config-group-key1": { "name": "Notifications" },
					"config-group-key2": { "name": "Security" },
					"config-group-key3": { "name": "Startup" }
				}
			},

			"sep1": "---------",

			"programs-group": {
				"name": "Programs",

				"items": {
					"programs-group-key1": { "name": "Aries" },
					"programs-group-key2": { "name": "Hermes" },
					"programs-group-key3": { "name": "Writer" }
				}
			},

			"terminal-group": { "name": "Run", "id": "context-run" },
			"sep2": "---------",

			"new-group": {
				"name": "New",

				"items": {
					"new-group-key1": { "name": "Folder" },
					"new-group-key2": { "name": "Image" },
					"new-group-key3": { "name": "Text Document" }
				}
			},

			"gaea": { "name": "Gaea", "id": "contextGaea", "data-effect": "bottom" }
		}
	});

	$("#contextDesktop-showcase").click(_.throttle(function () {

		if (wm.mode === "showcase") {
			wm.mode = "default";
		} else {
			wm.mode = "showcase";
		}

		$(".context-menu-root").trigger("contextmenu:hide");
		return false;

	}, 1000));

	$("#contextGaea").click(function () {
		$(".context-menu-root").trigger("contextmenu:hide");
	});

});
