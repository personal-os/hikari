
	// contextMenu/taskbar.js
	// @IdeasNeverCease
	// ========================================================

	$(function () {

		$.contextMenu("html5", true);

		$.contextMenu({
			selector: "#taskbar",

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
