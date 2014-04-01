
	// contextMenu/taskbar.js
	// @IdeasNeverCease
	// ========================================================

	$(function () {

		$.contextMenu("html5", true);

		$.contextMenu({
			selector: "#taskbar",

			items: {
				"windows-opt-01": { "name": "Cascade windows", "id": "contextTaskbar-01", "data-effect": "" },
				"windows-opt-02": { "name": "Show windows stacked", "id": "contextTaskbar-02", "data-effect": "" },
				"windows-opt-03": { "name": "Show windows side by side", "id": "contextTaskbar-03", "data-effect": "" },
				"windows-opt-04": { "name": "Show the desktop", "id": "contextTaskbar-04", "data-effect": "" },
				"sep1": "---------",
				"properties": { "name": "Properties", "id": "contextTaskbar-05", "data-effect": "" }
			}
		});

	});
