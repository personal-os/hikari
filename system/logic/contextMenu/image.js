$(function () {

	$.contextMenu("html5", true);

	$.contextMenu({
		selector: ".folder .wm-content .image",

		items: {
			"preview": { "name": "Preview", "id": "", "data-effect": "" }
		}
	});

});
