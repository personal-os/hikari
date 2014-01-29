var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.wm) HIKARI.gaea.wm = {};

HIKARI.gaea.wm.window = function (name, icon, width, height, resize) {

	var x, y, zIndex, id, content, info, menu;

	this.getName = function () { return name; };
	this.getId = function () { return id; };
	this.getWidth = function () { return parseInt(width); };
	this.getHeight = function () { return parseInt(height); };
	this.getIcon = function () { return "appPics/icons/" + icon + ".png"; };
	this.getX = function () { return parseInt(x); };
	this.getY = function () { return parseInt(y); };
	this.getZIndex = function () { return zIndex; };
	this.getContent = function () { return content; };
	this.getInfo = function () { return info; };
	this.getMenu = function () { return menu; };
	this.getResize = function () { return resize; };
	this.setName = function (_name) { name = _name; };
	this.setId = function (_id) { id = _id; };
	this.setWidth = function (_width) { width = _width; };
	this.setHeight = function (_height) { height = _height; };
	this.setX = function (_x) { x = _x; };
	this.setY = function (_y) { y = _y; };

	this.setZIndex = function (_zIndex) {

		zIndex = _zIndex;
		$(this.win).css({ "z-index": _zIndex });

	};

	this.setInfo = function (_info) { info = _info; };
	this.setContent = function (_content) { content = _content; };
	this.setMenu = function (_menu) { menu = _menu; };

	this.moveX = function (_x) {
		$(this.win).css({ "left": _x });
	};

	this.moveY = function (_y) {
		$(this.win).css({ "top": _y });
	};

};

HIKARI.gaea.wm.window.prototype.drawWindow = function () {

	var x, y, zIndex, id;

	if ($(".windowBase").is("div")) {
		x = HIKARI.gaea.wm.windowManager.windows[HIKARI.gaea.wm.windowManager.windows.length - 1].getX() + 20;
		y = HIKARI.gaea.wm.windowManager.windows[HIKARI.gaea.wm.windowManager.windows.length - 1].getY() + 20;

		if (y + this.getWidth() > parseInt($("#background").css("width"))) { y = 20; }
		if (x + this.getHeight() > parseInt($("#background").css("height"))) { x = 20; }
	} else {
		x = 20;
		y = 20;
	}

	var zIndexMax = 0;

	$(HIKARI.gaea.wm.windowManager.windows).each(function (i) {
		if (zIndexMax < HIKARI.gaea.wm.windowManager.windows[i].getZIndex()) {
			zIndexMax = HIKARI.gaea.wm.windowManager.windows[i].getZIndex();
		}
	});

	this.setX(x);
	this.setY(y);
	this.setZIndex(zIndexMax + 1);
	this.setId(HIKARI.gaea.wm.windowManager.windows.length);

	HIKARI.gaea.wm.windowManager.windows.push(this);

	var
	that = this,
	window = $("<div>").appendTo("#background").addClass("windowBase").css({
		"width": this.getWidth(),
		"height": this.getHeight(),
		"top": x,
		"left": y,
		"z-index": this.getZIndex()
	});

	this.win = window;

	var top = $("<div>").appendTo(window).addClass("windowTop").bind({
		mousedown: function (e) {

			$(this).css("cursor", "move");
			that.moveWindow(e, top);

		},

		mouseover: function (e) { $(this).css("cursor", "pointer"); },

		mouseup: function (e) {

			$(this).css("cursor", "pointer");
			$(this).parent().fadeTo(100, 1);

		}
	});

	var
	// topRight = $("<div>").appendTo(window).addClass("windowTopRight"),
	topIcon = $("<img>").appendTo(top).addClass("windowTopIcon").attr("src", this.getIcon()),

	topMaximize = $("<a>").appendTo(top).attr("href", "#").click(this.maximizeWindow),
	topMaximizeImg = $("<img>").appendTo(topMaximize).addClass("windowTopMaximize").attr("src", "appPics/button_min_normal.png").mouseover(function () {
		$(topMaximizeImg).attr("src", "appPics/button_min_prelight.png");
	}).mouseout(function () {
		$(topMaximizeImg).attr("src", "appPics/button_min_normal.png");
	}),

	topUnMaximize = $("<a>").appendTo(top).attr("href", "#").click(this.unmaximizeWindow),
	topUnMaximizeImg = $("<img>").appendTo(topUnMaximize).addClass("windowTopUnMaximize").attr("src", "appPics/button_min_normal.png").mouseover(function () {
		$(topUnMaximizeImg).attr("src", "appPics/button_min_prelight.png");
	}).mouseout(function () {
		$(topUnMaximizeImg).attr("src", "appPics/button_min_normal.png");
	}),

	topClose = $("<a>").appendTo(top).attr("href", "#").click(this.closeWindow),
	topCloseImg = $("<img>").appendTo(topClose).addClass("windowTopClose").attr("src", "appPics/button_close_normal.png").mouseover(function () {
		$(topCloseImg).attr("src", "appPics/button_close_prelight.png");
	}).mouseout(function () {
		$(topCloseImg).attr("src", "appPics/button_close_normal.png");
	});

	topMaximize.click(function (e) {
		e.preventDefault();
	});

	topUnMaximize.click(function (e) {
		e.preventDefault();
	});

	topClose.click(function (e) {
		e.preventDefault();
	});

	$("<span>").appendTo(top).addClass("windowTopText").text(this.getName());

	var menuMain = $("<div>").appendTo(window).addClass("windowMenuMain");
	// menuRight = $("<div>").appendTo(window).addClass("windowMenuRight");

	this.setMenu(menuMain);

	// var mainLeft = $("<div>").appendTo(window).addClass("windowMainLeft");
	var main = $("<div>").appendTo(window).addClass("windowMain");

	this.setContent(main);

	// var mainRight = $("<div>").appendTo(window).addClass("windowMainRight");

	var
	bottom = $("<div>").appendTo(window).addClass("windowBottom"),
	bottomText = $("<p>").appendTo(bottom).addClass("windowBottomText");

	this.setInfo(bottomText);

	if (this.getResize() != "no") {
		var bottomRight = $("<div>").appendTo(window).addClass("windowBottomRight").bind({
			mousedown: function (e) { that.resizeWindow(e, top); },
			mouseover: function (e) { $(this).css("cursor", "nw-resize"); },
			mouseup: function (e) {}
		});
	} else {
		$(this.getContent()).addClass("windowMainNoResize");
		var bottomRight = $("<div>").appendTo(window).addClass("windowBottomRightNo");
	}

};

HIKARI.gaea.wm.window.prototype.maximizeWindow = function (trigger) {

	if (trigger != "menu") {
		// $(this).parent().parent().remove();
		$(this).closest(".windowBase").css({
			"width": "100%",
			"height": "100%",
			"top": "0",
			"left": "0"
		}).addClass("maximized-window");
	} else {
		// $(this).parent().parent().parent().parent().remove();
		$(this).closest(".windowBase").css({
			"width": "100%",
			"height": "100%",
			"top": "0",
			"left": "0"
		}).addClass("maximized-window");
	}

};

HIKARI.gaea.wm.window.prototype.unmaximizeWindow = function (trigger) {

	if (trigger != "menu") {
		// $(this).parent().parent().remove();
		$(this).closest(".windowBase").css({
			"width": "500px",
			"height": "250px",
			"top": "50px",
			"left": "50px"
		}).removeClass("maximized-window");
	} else {
		// $(this).parent().parent().parent().parent().remove();
		$(this).closest(".windowBase").css({
			"width": "500px",
			"height": "250px",
			"top": "50px",
			"left": "50px"
		}).removeClass("maximized-window");
	}

};

HIKARI.gaea.wm.window.prototype.closeWindow = function (trigger) {

	if (trigger != "menu") {
		$(this).parent().parent().remove();
	} else {
		$(this).parent().parent().parent().parent().remove();
	} // Removes the window from the screen

	HIKARI.gaea.wm.windowManager.windows.splice(this.id, 1); // Removes the window object from the array

};

HIKARI.gaea.wm.window.prototype.moveWindow = function (e, obj) {

	var
	that = this,
	x, y;

	this.dragObj = new Object();

	// Select element...
	this.dragObj.elNode = $(obj).parent();

	var zIndexMax = 0;

	$(HIKARI.gaea.wm.windowManager.windows).each(function (i) {
		if (zIndexMax < HIKARI.gaea.wm.windowManager.windows[i].getZIndex()) {
			zIndexMax = HIKARI.gaea.wm.windowManager.windows[i].getZIndex();
		}
	});

	if (this.getZIndex() < zIndexMax) { this.setZIndex(zIndexMax + 1); }

	// get current mouse position
	x = e.pageX; // +window.scrollX;
	y = e.pageY; // +window.scrollY;

	// save the starting position and the element
	this.dragObj.cursorStartX = x;
	this.dragObj.cursorStartY = y;
	this.dragObj.elStartLeft = parseInt($(this.dragObj.elNode).offset().left);
	this.dragObj.elStartTop = parseInt($(this.dragObj.elNode).offset().top);

	// update z-index 
	$(this.dragObj.elNode).css("z-index", this.dragObj.zIndex + 10);

	$(document).bind("mousemove", function (e) {

		var x, y;

		x = e.pageX - that.dragObj.cursorStartX - $("#background").offset().left; // +window.scrollX;
		y = e.pageY - that.dragObj.cursorStartY - $("#background").offset().top; // +window.scrollY;

		var
		newX = that.dragObj.elStartLeft + x,
		newY = that.dragObj.elStartTop + y;

		if (newX < 0) { newX = 0; }

		if ((newX + parseInt($(that.dragObj.elNode).css("width"))) > parseInt($("#background").css("width"))) {
			newX = parseInt($("#background").css("width")) - parseInt($(that.dragObj.elNode).css("width"));
		}

		if (newY < 0) { newY = 0; }

		if ((newY + parseInt($(that.dragObj.elNode).css("height"))) > parseInt($("#background").css("height"))) {
			newY = parseInt($("#background").css("height")) - parseInt($(that.dragObj.elNode).css("height"));
		}

		$(that.dragObj.elNode).css({
			"top": newY,
			"left": newX
		});

	});

	$(document).bind("mouseup", function (e) {
		$(document).unbind("mousemove");
	});

	e.preventDefault();

};

HIKARI.gaea.wm.window.prototype.resizeWindow = function (e, obj) {

	var
	x, y,
	that = this;

	x = e.pageX;
	y = e.pageY;

	this.resizeObj = new Object();
	this.resizeObj.elNode = $(this.win);
	this.resizeObj.cursorStartX = x;
	this.resizeObj.cursorStartY = y;
	this.resizeObj.elStartLeft = parseInt($(this.resizeObj.elNode).offset().left);
	this.resizeObj.elStartTop = parseInt($(this.resizeObj.elNode).offset().top);
	this.resizeObj.elStartWidth = parseInt($(this.resizeObj.elNode).css("width"));
	this.resizeObj.elStartHeight = parseInt($(this.resizeObj.elNode).css("height"));

	$(document).bind("mousemove", function (e) {

		var x, y;

		x = e.pageX - that.resizeObj.elStartWidth - that.resizeObj.elStartLeft;
		y = e.pageY - that.resizeObj.elStartHeight - that.resizeObj.elStartTop;

		var
		newWidth = that.resizeObj.elStartWidth + x + 10,
		newHeight = that.resizeObj.elStartHeight + y + 10;

		if (newWidth < 50) { newWidth = 50; }

		if (e.pageX - parseInt($("#background").offset().left) > parseInt($("#background").css("width"))) {
			newWidth = parseInt($("#background").css("width")) - that.resizeObj.elStartLeft + parseInt($("#background").offset().left);
		}

		if (newHeight < 50) { newHeight = 50; }

		if (e.pageY - parseInt($("#background").offset().top) > parseInt($("#background").css("height"))) {
			newHeight = parseInt($("#background").css("height")) - that.resizeObj.elStartLeft + parseInt($("#background").offset().top);
		}

		that.setWidth(newWidth);
		that.setHeight(newHeight);

		$(that.resizeObj.elNode).css({
			"width": newWidth,
			"height": newHeight
		});

	});

	$(document).bind("mouseup", function (e) {
		$(document).unbind("mousemove");
	});

	e.preventDefault();

};

// Menu
HIKARI.gaea.wm.window.prototype.drawMenu = function (menuArr, i) {

	var
	that = this,
	menuTopOpt = [],
	ulTop = $("<ul>").addClass("menuTop").appendTo(this.getMenu());

	$(menuArr).each(function (i) {

		if ($.inArray(menuArr[i][3], menuTopOpt) == -1) { // checks menu
			$("<a>").appendTo($("<li>").appendTo(ulTop)).attr("href", "#").text(menuArr[i][3]).bind({
				click: function () {
					$(".menuOut").remove();
					that.showMenu(this, menuArr, menuArr[i][3]);
				}
			});

			menuTopOpt.push(menuArr[i][3]);
		}

	});

};

HIKARI.gaea.wm.window.prototype.showMenu = function (parentObj, array, headline) {

	var
	that = this,
	ulMeny = $("<ul>").addClass("menuOut").appendTo(this.getMenu()).css({
		"top": 15,
		"left": $(parentObj).position().left
	}).bind({
		mouseleave: function () { that.hideMenu(ulMeny); }
	});

	$(array).each(function (i) {

		if (array[i][3] == headline) {
			$("<a>").appendTo($("<li>").appendTo(ulMeny)).attr("href", "#").html("<img src=\"appPics/icons/" + array[i][2] + "\" />" + array[i][4]).click(function () {

				if (array[i][1] != "NULL") {
					array[i][0].apply(array[i][1]);
				} else {
					var menu = ["menu"];
					array[i][0].apply(parentObj, menu);
				}

			});
		}

	});

};

HIKARI.gaea.wm.window.prototype.hideMenu = function (parentObj) {
	$(parentObj).hide();
	$(parentObj).remove();
};

// Pop-up info here
HIKARI.gaea.wm.window.prototype.showPopUp = function (width, height, content) {

	var
	that = this,
	divBg = $("<div>").appendTo($("#background")).addClass("popupBg").fadeIn("slow").click(function () {
		that.hidePopUp();
	}),
	div = $("<div>").appendTo($("#background")).addClass("popup").css({
		"width": width,
		"height": height
	}).center().append(content);

};

HIKARI.gaea.wm.window.prototype.hidePopUp = function (parentObj) {
	$(".popup").remove();
	$(".popupBg").remove();
};
