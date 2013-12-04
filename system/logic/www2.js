/** 
 * @fileoverview Gaea Window Manager
 * @author Paul Anthony Webb
 * @version 0.1
**/

/**
 * Maximise / restore window
 * @method
**/
/*
JSWindow.prototype.maximise = function () {
	if (this.maximised) {
		this.maximised = false;
		this.container.removeClassName('JSWM_window_maximised');
		this.setPosition(this.restorePosition.left, this.restorePosition.top);
		this.setSize(this.restoreSize.width, this.restoreSize.height, 0);
	} else {
		this.container.addClassName('JSWM_window_maximised');
		this.restoreSize = this.getSize();
		this.restorePosition = this.getPosition();
		this.setPosition(0, 0);
		var windowSize = this.manager.getWindowSize();
		this.setSize(windowSize.width - 2, windowSize.height - 4 - 20, 0);
		this.maximised = true;
	}
};
*/

/**************************************************
 * dom-drag.js
 * 09.25.2001
 * www.youngpup.net
 * Script featured on Dynamic Drive (http://www.dynamicdrive.com) 12.08.2005
 **************************************************
 * 10.28.2001 - fixed minor bug where events
 * sometimes fired off the handle, not the root.
 **************************************************/
/*
var Drag = {

	obj : null,

	init : function(o, oRoot, minX, maxX, minY, maxY, bSwapHorzRef, bSwapVertRef, fXMapper, fYMapper) {

		o.onmousedown	= Drag.start;

		o.hmode = bSwapHorzRef ? false : true ;
		o.vmode = bSwapVertRef ? false : true ;

		o.root = oRoot && oRoot !== null ? oRoot : o ;

		if (o.hmode && isNaN(parseInt(o.root.style.left))) o.root.style.left = "0";
		if (o.vmode && isNaN(parseInt(o.root.style.top))) o.root.style.top = "0";
		if (!o.hmode && isNaN(parseInt(o.root.style.right))) o.root.style.right = "0";
		if (!o.vmode && isNaN(parseInt(o.root.style.bottom))) o.root.style.bottom = "0";

		o.minX	= typeof minX != 'undefined' ? minX : null;
		o.minY	= typeof minY != 'undefined' ? minY : null;
		o.maxX	= typeof maxX != 'undefined' ? maxX : null;
		o.maxY	= typeof maxY != 'undefined' ? maxY : null;

		o.xMapper = fXMapper ? fXMapper : null;
		o.yMapper = fYMapper ? fYMapper : null;

		o.root.onDragStart	= new Function();
		o.root.onDragEnd	= new Function();
		o.root.onDrag		= new Function();

	},

	start : function(e) {

		var o = Drag.obj = this;
		e = Drag.fixE(e);

		var y = parseInt(o.vmode ? o.root.style.top : o.root.style.bottom);
		var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right);
		o.root.onDragStart(x, y);

		o.lastMouseX	= e.clientX;
		o.lastMouseY	= e.clientY;

		if (o.hmode) {
			if (o.minX !== null)	o.minMouseX	= e.clientX - x + o.minX;
			if (o.maxX !== null)	o.maxMouseX	= o.minMouseX + o.maxX - o.minX;
		} else {
			if (o.minX !== null) o.maxMouseX = -o.minX + e.clientX + x;
			if (o.maxX !== null) o.minMouseX = -o.maxX + e.clientX + x;
		}

		if (o.vmode) {
			if (o.minY !== null)	o.minMouseY	= e.clientY - y + o.minY;
			if (o.maxY !== null)	o.maxMouseY	= o.minMouseY + o.maxY - o.minY;
		} else {
			if (o.minY !== null) o.maxMouseY = -o.minY + e.clientY + y;
			if (o.maxY !== null) o.minMouseY = -o.maxY + e.clientY + y;
		}

		document.onmousemove = Drag.drag;
		document.onmouseup = Drag.end;

		return false;

	},

	drag : function(e) {

		e = Drag.fixE(e);
		var o = Drag.obj;

		var ey = e.clientY;
		var ex = e.clientX;
		var y = parseInt(o.vmode ? o.root.style.top  : o.root.style.bottom);
		var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right );
		var nx, ny;

		if (o.minX !== null) ex = o.hmode ? Math.max(ex, o.minMouseX) : Math.min(ex, o.maxMouseX);
		if (o.maxX !== null) ex = o.hmode ? Math.min(ex, o.maxMouseX) : Math.max(ex, o.minMouseX);
		if (o.minY !== null) ey = o.vmode ? Math.max(ey, o.minMouseY) : Math.min(ey, o.maxMouseY);
		if (o.maxY !== null) ey = o.vmode ? Math.min(ey, o.maxMouseY) : Math.max(ey, o.minMouseY);

		nx = x + ((ex - o.lastMouseX) * (o.hmode ? 1 : -1));
		ny = y + ((ey - o.lastMouseY) * (o.vmode ? 1 : -1));

		if (o.xMapper) nx = o.xMapper(y);
		else if (o.yMapper)	ny = o.yMapper(x);

		Drag.obj.root.style[o.hmode ? "left" : "right"] = nx + "px";
		Drag.obj.root.style[o.vmode ? "top" : "bottom"] = ny + "px";
		Drag.obj.lastMouseX	= ex;
		Drag.obj.lastMouseY	= ey;

		Drag.obj.root.onDrag(nx, ny);
		return false;

	},

	end : function() {

		document.onmousemove = null;
		document.onmouseup   = null;
		Drag.obj.root.onDragEnd(parseInt(Drag.obj.root.style[Drag.obj.hmode ? "left" : "right"]), parseInt(Drag.obj.root.style[Drag.obj.vmode ? "top" : "bottom"]));
		Drag.obj = null;

	},

	fixE : function(e) {

		if (typeof e == 'undefined') e = window.event;
		if (typeof e.layerX == 'undefined') e.layerX = e.offsetX;
		if (typeof e.layerY == 'undefined') e.layerY = e.offsetY;
		return e;

	}

};
*/

////////////////////////////////////

$(document).ready(function () {

	var
	$vW = $(window).width(),
	$vH = $(window).height(),
	$tH = $("#taskbar").height();

	$("#icon-wallpaper").click(function () {

		$("<div class='window'></div>").appendTo("body");
		$("<li class='minimized-app'></li>").appendTo("#running-apps");

		$(".window").html("<div class='window-titlebar'>&nbsp;<span class='window-title'>WINDOW TITLE</span><ul class='window-actions'><li role='button' href='#' class='window-action window-minimize'></li><li role='button' href='#' class='window-action window-maximize'></li><li role='button' href='#' class='window-action window-close'></li></ul></div><div class='window-content'><ul><li class='wallpaper-thumbnail' id='mint'><img src='system/wallpaper/mint.jpg'/><span>Mint</span></li><li class='wallpaper-thumbnail' id='mountains'><img src='system/wallpaper/mountains.jpg'/><span>Mountains</span></li><li class='wallpaper-thumbnail' id='quanta'><img src='system/wallpaper/quanta.jpg'/><span>Quanta</span></li><li class='wallpaper-thumbnail' id='summer-sky'><img src='system/wallpaper/summer-sky.jpg'/><span>Summer Sky</span></li><li class='wallpaper-thumbnail' id='tri-k'><img src='system/wallpaper/tri-k.jpg'/><span>Triangulace &#151; K</span></li><li class='wallpaper-thumbnail' id='singha'><img src='system/wallpaper/singha.jpg'/><span>Singha</span></li><li class='wallpaper-thumbnail' id='series-1995'><img src='system/wallpaper/series-1995.jpg'/><span>Series 1995</span></li><li class='wallpaper-thumbnail' id='can-run'><img src='system/wallpaper/can-run.jpg'/><span>Can Run</span></li>").css({ width: 500 + "px", height: 300 + "px" });

		// <li class='wallpaper-thumbnail' id='can-run'><img src='system/wallpaper/can-run.jpg'/></li><li class='wallpaper-thumbnail' id='mint'><img src='system/wallpaper/mint.jpg'/></li><li class='wallpaper-thumbnail' id='mountains'><img src='system/wallpaper/mountains.jpg'/></li><li class='wallpaper-thumbnail' id='os-x-lion'><img src='system/wallpaper/os-x-lion.jpg'/></li><li class='wallpaper-thumbnail' id='quanta'><img src='system/wallpaper/quanta.jpg'/></li><li class='wallpaper-thumbnail' id='series-1995'><img src='system/wallpaper/series-1995.jpg'/></li><li class='wallpaper-thumbnail' id='simple-sky-a'><img src='system/wallpaper/simple-sky-a.jpg'/></li><li class='wallpaper-thumbnail' id='simple-sky-b'><img src='system/wallpaper/simple-sky-b.jpg'/></li><li class='wallpaper-thumbnail' id='singha'><img src='system/wallpaper/singha.jpg'/></li><li class='wallpaper-thumbnail' id='snow-borealis-night'><img src='system/wallpaper/snow-borealis-night.jpg'/></li><li class='wallpaper-thumbnail' id='snow-borealis-toxic'><img src='system/wallpaper/snow-borealis-toxic.jpg'/></li><li class='wallpaper-thumbnail' id='something-in-sand'><img src='system/wallpaper/something-in-sand.jpg'/></li><li class='wallpaper-thumbnail' id='summer-sky'><img src='system/wallpaper/summer-sky.jpg'/></li><li class='wallpaper-thumbnail' id='titanus'><img src='system/wallpaper/titanus.jpg'/></li><li class='wallpaper-thumbnail' id='tri-k'><img src='system/wallpaper/tri-k.jpg'/></li><li class='wallpaper-thumbnail' id='under-the-clouds'><img src='system/wallpaper/under-the-clouds.jpg'/></li></ul></div><div class='window-statusbar'></div>

		// $(".minimized-app").html();

		$(".window-minimize").click(function () {

			$(".window-minimize").closest(".window").remove();

		});

		$(".window-maximize").click(function () {

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

		});

		$(".window-titlebar").dblclick(function () {

			$(".window-titlebar").closest(".window").css({
				width: $vW + "px",
				height: $vH - $tH + 29 + "px",
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

		});

		$(".window-close").click(function () {

			$(".window-close").closest(".window").remove();
			$(".minimized-app").remove();

		});

	});

	$(".sp-viewport").css({
		// $(".window").width();
	});

});
