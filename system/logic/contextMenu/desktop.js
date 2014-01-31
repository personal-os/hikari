$(function () {

	$.contextMenu("html5", true);

	$.contextMenu({
		selector: ".desktop",

		items: {
			"system-group": {
				"name": "System",

				"items": {
					"system-group-key1": { "name": "Log Off" },
					"system-group-key2": { "name": "Shutdown" }
				}
			},

			"desktop-group": {
				"name": "Desktop",

				"items": {
					"desktop-group-key1": { "name": "Change Background", "id": "context-changeBG" },
					"desktop-group-key2": { "name": "Hide Icons" },
					"desktop-group-key3": { "name": "Personalize" },
					"desktop-group-key4": { "name": "Showcase", "id": "context-showcase" }
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

			"terminal-group": { "name": "Run" },
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

	$("#context-showcase").click(_.throttle(function () {

		if (wm.mode === "showcase") {
			wm.mode = "default";
		} else {
			wm.mode = "showcase";
		}

		$(".context-menu-root").trigger("contextmenu:hide");
		return false;

	}, 1000));

});
