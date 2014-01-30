$(function () {

	$.contextMenu("html5", true);

	/*
	$.contextMenu({
		selector: "#taskbar", // null

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
					"desktop-group-key1": { "name": "Change Background" },
					"desktop-group-key2": { "name": "Hide Icons" },
					"desktop-group-key3": { "name": "Personalize" },
					"desktop-group-key4": { "name": "Showcase", "icon": "expose" }
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
	*/

	$.contextMenu({
		selector: "#taskbar", // null

		items: {
			"windows-opt-01": { "name": "Cascade windows", "id": "", "data-effect": "" },
			"windows-opt-02": { "name": "Show windows stacked", "id": "", "data-effect": "" },
			"windows-opt-03": { "name": "Show windows side by side", "id": "", "data-effect": "" },
			"windows-opt-04": { "name": "Show the desktop", "id": "", "data-effect": "" },
			"sep1": "---------",
			"properties": { "name": "Properties", "id": "", "data-effect": "" }
		}
	});

});
