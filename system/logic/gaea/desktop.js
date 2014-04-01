
	// gaea/desktop.js
	// @IdeasNeverCease
	// ========================================================

	$(function () {
	
		var $vW = $(window).width(), $vH = $(window).height();

		$(".wm-overlay").append("<div class='desktop'></div>");
		$(".desktop").css("height", $vH - 50 + "px");

		icons = "";
		icons += "<figure class=\"desktop-icon\">";
		icons += "<img src=\"shell/images/folders/folder-desktop-blue.png\" alt=\"\"/>";
		icons += "</figure>";

		$(".desktop").append(icons);

		// Remove id="undefined"
		$(".not-selectable, .context-menu-submenu").removeAttr("id");

	});
