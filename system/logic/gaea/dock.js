
	// gaea/dock.js
	// @IdeasNeverCease
	// ========================================================

	$(function () {

		$(".hikari-content-inner").append("<section id='taskbar' class='docked-top'></section>");

		var taskbarStuff = "";
		var subtaskbarStuff = "";

		taskbarStuff += "<div id=\"start\">";
		taskbarStuff += "<button data-effect=\"left\">Start</button>";
		taskbarStuff += "</div>";
		taskbarStuff += "<ul id=\"running-apps\">";
		taskbarStuff += "</ul>";
		taskbarStuff += "<div class=\"user-avatar\">";
		taskbarStuff += "<img src=\"\" alt=\"\"/>";
		taskbarStuff += "</div>";
		taskbarStuff += "<div id=\"subtaskbar\">";
		taskbarStuff += "</div>";

		subtaskbarStuff += "<div id=\"weather\"></div>";
		subtaskbarStuff += "<div id=\"full-time\">";
		subtaskbarStuff += "<span id=\"full-date\"></span>";
		subtaskbarStuff += "<span id=\"time\"></span>";
		subtaskbarStuff += "</div>";

		$("#taskbar").append(taskbarStuff);
		$("#subtaskbar").append(subtaskbarStuff);

	});
