
// Gaea Window Manager
// Paul Anthony Webb
// Version 0.1

/*
var GWMLib = {
	Version: "0.1",
	load: function () {

		// if ((typeof Scriptaculous == 'undefined') || parseFloat(Scriptaculous.Version.split(".")[0] + "." + Scriptaculous.Version.split(".")[1]) < 1.7)
		// throw ("JSWM requires the Scriptaculous JavaScript library >= 1.7.0");

	}
};

GWMLib.load();

// Construct a window manager
// @param {int[]} margins Window manager margins [top, right, bottom, left], default [0, 0, 0, 0]
// @param {boolean[]} constraints  Window manager edge constraints [top, right, bottom, left], default [true, false, false, false] //TODO

// var GWM = Class.create(); — should replace "create" with "extend"
var GWM = Class.extend();

GWM.prototype.initialize = function (margins, constraints) {

	this.contents = document.body.appendChild(document.createElement("div"));
	this.contents.className = "GWM_manager";
	this.windows = new Array();
	this.topZIndex = 100;
	this.lastActiveWindow = null;
	if (!margins) margins = [0, 0, 0, 0];

	this.margins = margins;
	if (!constraints) constraints = [true, false, false, false];

	this.constraints = constraints;

};

// Create a new empty window
// @param {int} w  Window width
// @param {int} h  Window height
// @param {JSWindowOptions} options  Initial options

GWM.prototype.openNew = function (w, h, l, t, options) {

	var gWindow = new GWindow(this, w, h, l, t, options);
	this.addWindow(gWindow)

};

// Add a window to the manager
// @param {JSWindow} jsWindow  Window to add

GWM.prototype.addWindow = function (gWindow) {
	this.windows.push(gWindow);
	gWindow.redrawShadow();
	gWindow.setActive();
};
*/
/*
// 01
Object.prototype.SayIt = function (s) {
	return this + s;
};

var ramone = 'Hey Ho, ';
var s = 'Lets go';
console.log(ramone.SayIt(s));

// 02
Object.defineProperty(Object.prototype, "SayIt", {
	value: function (s) {
		your stuff here
	}
});
*/

	var
	$vW = $(window).width(),
	$vH = $(window).height(),
	$tH = $("#taskbar").height();

	(function($) {

		$.fn.my_data = {
			version:	"0.1",
			author:		"Paul Anthony Webb",
			url:			"http://hikari.pw-software.com"
		}

	})(jQuery);

	$(document).ready(function() {

		$("#icon-wallpaper").click(openFolder);

	});

	function openFolder() {

		// alert('Opened folder');

		$("<div class='window'></div>").appendTo("body");
		$("<li class='minimized-app'></li>").appendTo("#running-apps");

		$(".window").html("<div class='window-titlebar'>&nbsp;<span class='window-title'>WINDOW TITLE</span><ul class='window-actions'><li role='button' href='#' class='window-action window-minimize'></li><li role='button' href='#' class='window-action window-maximize'></li><li role='button' href='#' class='window-action window-close'></li></ul></div><div class='window-content'></div><div class='window-statusbar'></div>").css({ width: 500 + "px", height: 300 + "px" });

		var handleDraggie = new Draggabilly(document.querySelector(".window"), {
			handle: ".window-titlebar",
			containment: "#desktop-content"
			// containment: 'body'
		});

		$(".window-minimize").click(minimizeFolder);
		$(".window-maximize").click(maximizeFolder);
		$(".window-titlebar").dblclick(maximizeFolder);
		$(".window-close").click(closeFolder);

	}

	function minimizeFolder() {

		$(".window-minimize").closest(".window").remove();

	}

	function maximizeFolder() {

		$(".window-maximize").closest(".window").css({
			width: $vW + "px",
			height: $vH - $tH + "px",
			top: $tH + 29 + "px",
			left: 0,
			border: 0
		});

		$(".window-statusbar").css({
			bottom: 0,
			left: 0,
			position: "fixed"
		});

		$(".window-content").css({
			height: $vH - 136 + "px"
		});
	
	}

	function closeFolder() {

		$(".window-close").closest(".window").remove();
		$(".minimized-app").remove();
	
	}

	function loadImages(url, container) {

		// get the JSON object
		$.getJSON(url, function (data) {
			if (typeof data === 'object') {
				$.each(data['images'], function (key, image) {
					var mylist = '<li class="wallpaper-thumbnail"><img src="' + image['url'] + '" alt="' + image['title'] + '"><span></span></li>';
					crossDomain: true;
					// $(body).append(mylist);
					// $(body).append(".window-content");

					// headers: {"X-Alt-Referer": "system/wallpaper/walls.json"};
				});
			}
		});

	};

	$(function() {
		loadImages("system/wallpaper/walls.json", ".window-content");
	});

	// <ul><li class='wallpaper-thumbnail' id='mint'><img src='system/wallpaper/mint.jpg'/><span>Mint</span></li><li class='wallpaper-thumbnail' id='mountains'><img src='system/wallpaper/mountains.jpg'/><span>Mountains</span></li><li class='wallpaper-thumbnail' id='quanta'><img src='system/wallpaper/quanta.jpg'/><span>Quanta</span></li><li class='wallpaper-thumbnail' id='summer-sky'><img src='system/wallpaper/summer-sky.jpg'/><span>Summer Sky</span></li><li class='wallpaper-thumbnail' id='tri-k'><img src='system/wallpaper/tri-k.jpg'/><span>Triangulace &#151; K</span></li><li class='wallpaper-thumbnail' id='singha'><img src='system/wallpaper/singha.jpg'/><span>Singha</span></li><li class='wallpaper-thumbnail' id='series-1995'><img src='system/wallpaper/series-1995.jpg'/><span>Series 1995</span></li><li class='wallpaper-thumbnail' id='can-run'><img src='system/wallpaper/can-run.jpg'/><span>Can Run</span></li></ul>

	// <li class='wallpaper-thumbnail' id='can-run'><img src='system/wallpaper/can-run.jpg'/></li><li class='wallpaper-thumbnail' id='mint'><img src='system/wallpaper/mint.jpg'/></li><li class='wallpaper-thumbnail' id='mountains'><img src='system/wallpaper/mountains.jpg'/></li><li class='wallpaper-thumbnail' id='os-x-lion'><img src='system/wallpaper/os-x-lion.jpg'/></li><li class='wallpaper-thumbnail' id='quanta'><img src='system/wallpaper/quanta.jpg'/></li><li class='wallpaper-thumbnail' id='series-1995'><img src='system/wallpaper/series-1995.jpg'/></li><li class='wallpaper-thumbnail' id='simple-sky-a'><img src='system/wallpaper/simple-sky-a.jpg'/></li><li class='wallpaper-thumbnail' id='simple-sky-b'><img src='system/wallpaper/simple-sky-b.jpg'/></li><li class='wallpaper-thumbnail' id='singha'><img src='system/wallpaper/singha.jpg'/></li><li class='wallpaper-thumbnail' id='snow-borealis-night'><img src='system/wallpaper/snow-borealis-night.jpg'/></li><li class='wallpaper-thumbnail' id='snow-borealis-toxic'><img src='system/wallpaper/snow-borealis-toxic.jpg'/></li><li class='wallpaper-thumbnail' id='something-in-sand'><img src='system/wallpaper/something-in-sand.jpg'/></li><li class='wallpaper-thumbnail' id='summer-sky'><img src='system/wallpaper/summer-sky.jpg'/></li><li class='wallpaper-thumbnail' id='titanus'><img src='system/wallpaper/titanus.jpg'/></li><li class='wallpaper-thumbnail' id='tri-k'><img src='system/wallpaper/tri-k.jpg'/></li><li class='wallpaper-thumbnail' id='under-the-clouds'><img src='system/wallpaper/under-the-clouds.jpg'/></li>
