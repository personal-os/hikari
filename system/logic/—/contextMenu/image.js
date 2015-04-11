
	// contextMenu/image.js
	// @IdeasNeverCease
	// ========================================================

	$(function () {

		$.contextMenu("html5", true);

		$.contextMenu({
			// selector: ".folder .wm-content .image",
			selector: ".folder .wm-content img",

			items: {
				"preview": { "name": "Preview", "id": "contextImage-01", "data-effect": "" }
			}
		});

	});
