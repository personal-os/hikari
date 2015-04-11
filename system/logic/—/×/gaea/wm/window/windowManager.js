var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.wm) HIKARI.gaea.wm = {};

if (!HIKARI.gaea.wm.windowManager) HIKARI.gaea.wm.windowManager = {
	windows: [], // an array containing the object

	init: function () {

		// console.log("JAWN is up!");
		// Start the desktop
		HIKARI.gaea.wm.background(); // Default size 800x600px 
		HIKARI.gaea.wm.dock.init(); // Draw the dock

		// Desktop icons
		/*
		HIKARI.gaea.wm.icon("Image Viewer", "image.png", HIKARI.gaea.app.imageViewer); // Image viewer
		HIKARI.gaea.wm.icon("Memory", "memory.png", HIKARI.gaea.app.memory); // Memory
		HIKARI.gaea.wm.icon("Om", "om.png", HIKARI.gaea.app.about); // Om 
		HIKARI.gaea.wm.icon("Inställningar", "settingsBig.png", HIKARI.gaea.app.settings); // Om
		*/
		// HIKARI.gaea.wm.icon("RSS-reader", "rss.png", HIKARI.gaea.app.rssReader); // RSSreader
		// HIKARI.gaea.wm.icon("JAWM Chat", "empathy.png", HIKARI.gaea.app.messageBoard); // Labby

	}
};

$(HIKARI.gaea.wm.windowManager.init);

/*
$(window).load(function() {
	// jQuery
});

window.onload = function() {
	// vanilla JavaScript
};
*/
