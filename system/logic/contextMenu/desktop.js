
	// contextMenu/desktop.js
	// @IdeasNeverCease
	// ========================================================

	$(function () {

		$.contextMenu("html5", true);

		$.contextMenu({
			selector: ".desktop",

			items: {
				"system-group": {
					"name": "System",

					"items": {
						"system-group-key1": { "name": "Log Off", "id": "contextDesktop-01" },
						"system-group-key2": { "name": "Shutdown", "id": "contextDesktop-02" },
						"system-sep": "---------",
						"system-group-key3": { "name": "About", "id": "contextSystem-about" },
					}
				},

				"desktop-group": {
					"name": "Desktop",

					"items": {
						"desktop-group-key1": { "name": "Change Background", "id": "contextDesktop-changeBG" },
						"desktop-group-key2": { "name": "Hide Icons", "id": "contextDesktop-03" },
						"desktop-group-key3": { "name": "Personalize", "id": "contextDesktop-04" },
						"desktop-group-key4": { "name": "Showcase", "id": "contextDesktop-showcase" }
					}
				},

				"config-group": {
					"name": "Config",

					"items": {
						"config-group-key1": { "name": "Notifications", "id": "contextDesktop-05" },
						"config-group-key2": { "name": "Security", "id": "contextDesktop-06" },
						"config-group-key3": { "name": "Startup", "id": "contextDesktop-07" }
					}
				},

				"sep1": "---------",

				"programs-group": {
					"name": "Programs",

					"items": {
						"programs-group-key1": { "name": "Aries", "id": "contextDesktop-08" },
						"programs-group-key2": { "name": "Hermes", "id": "contextDesktop-09" },
						"programs-group-key3": { "name": "Writer", "id": "contextDesktop-10" }
					}
				},

				"terminal-group": { "name": "Run", "id": "context-run" },
				"sep2": "---------",

				"new-group": {
					"name": "New",

					"items": {
						"new-group-key1": { "name": "Folder", "id": "contextDesktop-11" },
						"new-group-key2": { "name": "Image", "id": "contextDesktop-12" },
						"new-group-key3": { "name": "Text Document", "id": "contextDesktop-13" }
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
