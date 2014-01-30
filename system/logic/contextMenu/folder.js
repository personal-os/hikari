$(function () {

	$.contextMenu("html5", true);

	$.contextMenu({
		selector: ".folder .wm-content",

		items: {
			"view-group": {
				"name": "View",

				"items": {
					"view-group-key1": { "name": "Details" },
					"view-group-key2": { "name": "Icons" },
					"view-group-key3": { "name": "List" },
					"view-group-key4": { "name": "Tiles" },
				}
			},

			"sort-group": {
				"name": "Sort by",

				"items": {
					"sort-group-key1": { "name": "Name" },
					"sort-group-key2": { "name": "Size" },
					"sort-group-key3": { "name": "Type" },
					"sep1": "---------",
					"sort-group-key4": { "name": "Ascending" },
					"sort-group-key5": { "name": "Descending" }
				}
			},

			"group-group": {
				"name": "Group by",

				"items": {
					"group-group-key1": { "name": "Name" },
					"group-group-key2": { "name": "Size" },
					"group-group-key3": { "name": "Type" }
				}
			}
		}
	});

});
