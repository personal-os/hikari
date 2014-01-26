
var $vW = $(window).width(), $vH = $(window).height();

$(document).ready(function () {

	var $verticalMenu = $(".left.hikari-menu ul").height();
	// $(".hikari-pusher").height();
	// $(".left.hikari-menu ul").css("margin-top", $vH - $verticalMenu * 2 + "px");
	$(".left.hikari-menu").css("padding-top", $vH / 6);
	// $(".left.hikari-menu").css("height", $(".hikari-pusher").height());
	
	$(".hikari-content-inner").backstretch("system/shell/wallpaper/spring-sriram.jpg");

});

// Chips
$("#select-chip-folder").click(function (e) {

	$(".wm-space").append('<div id="chip-folder"></div>');

	var chipWin = wm.createWindow.fromQuery("#chip-folder", {

		title: "Chip Folder",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// SubChips
$("#select-subchip-folder").click(function (e) {

	$(".wm-space").append('<div id="subchip-folder"></div>');

	var chipWin = wm.createWindow.fromQuery("#subchip-folder", {

		title: "SubChip Folder",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// Data Library
$("#select-data-library").click(function (e) {

	$(".wm-space").append('<div id="data-library"></div>');

	var chipWin = wm.createWindow.fromQuery("#data-library", {

		title: "Data Library",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// NetNavi
$("#select-netnavi").click(function (e) {

	$(".wm-space").append('<div id="netnavi"></div>');

	var chipWin = wm.createWindow.fromQuery("#netnavi", {

		title: "NetNavi",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// EMail
$("#select-email").click(function (e) {

	$(".wm-space").append('<div id="email"></div>');

	var chipWin = wm.createWindow.fromQuery("#email", {

		title: "Email",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// Key Items
$("#select-key-item").click(function (e) {

	$(".wm-space").append('<div id="key-item"></div>');

	var chipWin = wm.createWindow.fromQuery("#key-item", {

		title: "Key Items",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// The Network × https://twitter.com/on_thenetwork
$("#select-network").click(function (e) {

	$(".wm-space").append('<div id="network"></div>');

	var chipWin = wm.createWindow.fromQuery("#network", {

		title: "Network",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// Internet Maps
$("#select-map").click(function (e) {

	$(".wm-space").append('<div id="map"></div>');

	var chipWin = wm.createWindow.fromQuery("#map", {

		title: "Map",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// Save
$("#select-save").click(function (e) {

	$(".wm-space").append('<div id="save"></div>');

	var chipWin = wm.createWindow.fromQuery("#save", {

		title: "Save",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});


// System Fonts
$("#select-system-fonts").click(function (e) {

	$(".wm-space").append('<div id="system-fonts"></div>');

	var chipWin = wm.createWindow.fromQuery("#system-fonts", {

		title: "Fonts",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// System Language
$("#select-system-language").click(function (e) {

	$(".wm-space").append('<div id="system-language"></div>');

	var chipWin = wm.createWindow.fromQuery("#system-language", {

		title: "Language",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// System Mail Accounts
$("#select-system-mail").click(function (e) {

	$(".wm-space").append('<div id="system-mail"></div>');

	var chipWin = wm.createWindow.fromQuery("#system-mail", {

		title: "Mail",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// Personalization
$("#select-system-personalization").click(function (e) {

	$(".wm-space").append('<div id="system-personalization"></div>');

	var chipWin = wm.createWindow.fromQuery("#system-personalization", {

		title: "Personalization",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// Programs & Features
$("#select-system-progsFeats").click(function (e) {

	$(".wm-space").append('<div id="system-progsFeats"></div>');

	var chipWin = wm.createWindow.fromQuery("#system-progsFeats", {

		title: "Programs & Features",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// Sync
$("#select-system-sync").click(function (e) {

	$(".wm-space").append('<div id="system-sync"></div>');

	var chipWin = wm.createWindow.fromQuery("#system-sync", {

		title: "Sync",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// System
$("#select-system-OS").click(function (e) {

	$(".wm-space").append('<div id="system-OS"></div>');

	var chipWin = wm.createWindow.fromQuery("#system-OS", {

		title: "System",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// User Accounts
$("#select-system-userAccounts").click(function (e) {

	$(".wm-space").append('<div id="system-userAccounts"></div>');

	var chipWin = wm.createWindow.fromQuery("#system-userAccounts", {

		title: "User Accounts",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});

// System Update
$("#select-system-update").click(function (e) {

	$(".wm-space").append('<div id="system-update"></div>');

	var chipWin = wm.createWindow.fromQuery("#system-update", {

		title: "System Update",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();

});
