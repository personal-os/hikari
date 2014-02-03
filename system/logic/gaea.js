
var $vW = $(window).width(), $vH = $(window).height();

$(document).on("ready", function () {

	$(".wm-overlay").append('<div class="desktop"></div>'); // for desktop context menu
	$(".desktop").css("height", $vH - 50 + "px"); // taskbar is 50px tall

	// Wallpaper
	$(".hikari-content-inner").backstretch("shell/wallpaper/tokyoSkytree-observationDeck/14.darwinfish105.jpg");

});

// focus mousedown
$(document).on("click", "#contentView-icons", function () {

	var xhr;
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); // All browsers, except IE. Fuck IE.
	else xhr = new ActiveXObject("Microsoft.XMLHTTP"); // For IE. Fuck IE.

	xhr.open("GET", "chips/BN-I/data.json", false);

	xhr.onreadystatechange = function () {

		if (xhr.readyState === 4 && xhr.status === 200) {
			var
			items = JSON.parse(xhr.responseText),
			output = '<ul class="inline-list">';

			for (var key in items) {
				output += "<li>";
				output += "<img src=" + items[key].image + ">";
				output += "<span class=\"filename-title\" contenteditable=\"false\">" + items[key].name + "</span>";
				output += "</li>";
			}

			output += "</ul>";

			document.getElementById("chip-folder").innerHTML = output;
		}

	};

	xhr.send();

});

$(document).on("click", "#contentView-list", function () {

	var xhr;
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); // All browsers, except IE. Fuck IE.
	else xhr = new ActiveXObject("Microsoft.XMLHTTP"); // For IE. Fuck IE.

	xhr.open("GET", "chips/BN-I/data.json", false);

	xhr.onreadystatechange = function () {

		if (xhr.readyState === 4 && xhr.status === 200) {
			var
			items = JSON.parse(xhr.responseText),
			output = '<ul class="list-list">';

			for (var key in items) {
				output += "<li>";
				output += "<img src=" + items[key].image + ">";
				output += "<span class=\"filename-title\" contenteditable=\"false\">" + items[key].name + "</span>";
				output += "</li>";
			}

			output += "</ul>";

			document.getElementById("chip-folder").innerHTML = output;
		}

	};

	xhr.send();

});

// Chips
$("#select-chip-folder").click(function (e) {

	$(".wm-space").append('<section id="chip-folder"></section>');

	// Oh shit, look at me using AJAX mom!
	var xhr;
	if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); // All browsers, except IE. Fuck IE.
	else xhr = new ActiveXObject("Microsoft.XMLHTTP"); // For IE. Fuck IE.

	xhr.open("GET", "chips/BN-I/data.json", false);

	xhr.onreadystatechange = function () {

		if (xhr.readyState === 4 && xhr.status === 200) {
			var
			items = JSON.parse(xhr.responseText),
			output = '<ul class="inline-list">';

			for (var key in items) {
				output += "<li>";
				output += "<img src=" + items[key].image + ">";
				output += "<span class=\"filename-title\" contenteditable=\"false\">" + items[key].name + "</span>";
				output += "</li>";
			}

			output += "</ul>";
			document.getElementById("chip-folder").innerHTML = output;
		}

	};

	xhr.send();
	//

	var chipWin = wm.createWindow.fromQuery("#chip-folder", {

		title: "Chip Folder",
		classname: "folder",
		width: 600,
		height: 300,
		x: 85,
		y: 120

	});

	e.preventDefault();
	// e.stopPropagation();

});

// SubChips
$("#select-subchip-folder").click(function (e) {

	$(".wm-space").append('<section id="subchip-folder">This is the SubChip Folder.</section>');

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

	$(".wm-space").append('<section id="data-library">Kind of like an encyclopedia of sorts, this will have information about every single BattleChip from MMBN1-MMBN6. Possibly even 4.5 and OSS.</section>');

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

	$(".wm-space").append('<section id="netnavi">Awesome NetNavi stuff to come soon. Like, the NaviCustomizer from MMBN3!</section>');

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

	$(".wm-space").append('<section id="email">I will probably use <a href="https://github.com/khamidou/kite">Kite</a> for this.</section>');

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

	$(".wm-space").append('<section id="key-item">This is the Key Items folder. Maybe NetBattler Licenses will reside here.</section>');

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

	$(".wm-space").append('<section id="network">Hehe, this is gonna be awesome. And, take a bajillion years to create. You know how the Internet in MMBN and the anime was 3D? Yeah. Exactly. A bajillion years.</section>');

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

	$(".wm-space").append('<section id="map">This is where maps of areas on The Network will reside.</section>');

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

	$(".wm-space").append('<section id="save">Hmm, idk. Sync on demand?</section>');

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

	$(".wm-space").append('<section id="system-fonts"></section>');

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

	$(".wm-space").append('<section id="system-language"></section>');

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

	$(".wm-space").append('<section id="system-mail"></section>');

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

	$(".wm-space").append('<section id="system-personalization"></section>');

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

	$(".wm-space").append('<section id="system-progsFeats"></section>');

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

	$(".wm-space").append('<section id="system-sync"></section>');

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

	$(".wm-space").append('<section id="system-OS"></section>');

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

	$(".wm-space").append('<section id="system-userAccounts"></section>');

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

	$(".wm-space").append('<section id="system-update"></section>');

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

// Change desktop background
$(document).on("click", "#context-changeBG", function () {

	$(".wm-space").append('<section id="hikari-changeBG"></section>');

	var chipWin = wm.createWindow.fromQuery("#hikari-changeBG", {

		title: "Change Background Image",
		classname: "folder",
		width: 800,
		height: 500,
		x: 283,
		y: 100

	});

	$(".context-menu-root").trigger("contextmenu:hide");

});

// About hikari
$(document).on("click", "#contextSystem-about", function () {

	$(".context-menu-root").trigger("contextmenu:hide");
	$(".wm-space").append('<section id="hikari-about"></section>');

	var chipWin = wm.createWindow.fromQuery("#hikari-about", {

		title: "About",
		classname: "folder",
		width: 300,
		height: 350,
		x: 283,
		y: 100

	});

	stuff = "";
	stuff += "<h1 id=\"about-logo\">hikari</h1>";
	stuff += "<p>hikari is an experimental operating system, built by Paul Anthony Webb.</p>";
	stuff += "<p>GitHub repo: <a href=\"https://github.com/IdeasNeverCease/hikari\">here</a>. Origin story: <a href=\"http://dsgn.io/thoughts/the-future-of-the-operating-system\">here</a>. Official site: <a href=\"http://hikar.io\">hikar.io</a>.</p>";
	stuff += "<p id=\"about-copy\">&copy; 2014 Paul Anthony Webb</p>";

	$("#hikari-about").parent().css({
		"overflow-x": "hidden",
		"overflow-y": "hidden"
	});

	$("#hikari-about").append(stuff);

});

$(document).on("click", "#context-run", function () {

	$(".context-menu-root").trigger("contextmenu:hide");
	$(".wm-space").append('<section id="hikari-run"></section>');

	var chipWin = wm.createWindow.fromQuery("#hikari-run", {

		title: "Run",
		classname: "folder",
		width: 600,
		height: 300,
		x: 283,
		y: 100

	});

	$("#hikari-run").parent().css("background-color", "#191919");

	$.getScript("applications/terminal/app.js", function () {

		var terminus = new Dekao("#hikari-run", {
			welcome: '<div class="identity"><h1>Dekao</h1>' + Dekao.version + '</div>Copyright 2014 Paul Anthony Webb.<br/>Press <span style="color: #07d0eb">&lt;tab&gt;</span> to see a list of available commands.'
		});

	});

});

/*
$("#start").on("click", function () {

	setTimeout(function () {
		$("#subtaskbar").css("top", "50px !important");
	}, 5000);

});
*/

// titleSignet × HubSpot × https://github.com/HubSpot/signet/tree/master/titleSignet
(function(){var autoInit,deferConsole,draw,getContent,getOptions,orDefault,tag;getOptions=function(options){options.title=orDefault(options.title,getContent('meta[name="application-name"]'),getContent('meta[property="og:title"]'),document.title.split(/\u0020[\/\\\|\-\u8211\u8212]\u0020|\:\u0020/)[0],"");options.author=orDefault(options.author,getContent('meta[name=author]'),'');options.description=orDefault(options.description,getContent("meta[name=description]"),getContent('meta[property="og:description"]'),"");options.image=orDefault(options.image,getContent('meta[property="og:image"]'),getContent("meta[name=image]"));options.hue=options.hue||0;options.baseStyles=orDefault(options.baseStyles,'color: #444; font-family: "Open Sans", "Source Sans Pro", Arial, sans-serif;');options.titleStyles=orDefault(options.titleStyles,""+options.baseStyles+"; font-size: 20px; line-height: 30px;");options.authorStyles=orDefault(options.authorStyles,""+options.baseStyles+"; font-size: 12px; line-height: 30px; padding: 0 0 0 20px;");options.descriptionStyles=orDefault(options.descriptionStyles,""+options.baseStyles+"; font-size: 10px; line-height: 20px;");return options;};orDefault=function(){var argument,_i,_len;for(_i=0,_len=arguments.length;_i<_len;_i++){argument=arguments[_i];if(typeof argument!=="undefined"){return argument;}}return arguments[arguments.length-1];};getContent=function(selector){var _ref;return(_ref=document.head.querySelector(selector))!==null?_ref.content:void 0;};deferConsole=function(fn){var callable,i,messages,old,type,types,_fn,_i,_len;types=["log","debug","warn","error"];old={};callable={};messages=[];i=types.length;_fn=function(type){old[type]=console[type];callable[type]=function(){return old[type].apply(console,arguments);};return console[type]=function(){messages.push([type,arguments]);return void 0;};};for(i=_i=0,_len=types.length;_i<_len;i=++_i){type=types[i];_fn(type);}return setTimeout((function(){var _then;_then=function(){var block,message,_j,_len1,_results;while(messages.length){block=messages.shift();type=block[0];message=block[1];old[type].apply(console,message);}_results=[];for(_j=0,_len1=types.length;_j<_len1;_j++){type=types[_j];_results.push(console[type]=old[type]);}return _results;};return fn(callable,_then);}),0);};draw=function(options,_console,cb){var img,_draw;_draw=function(){var args,hue,i;if(options.title){if(!options.image){args=[""];i=0;while(i<options.title.length){args[0]+="%c"+options.title[i];if(options.title[i]===" "){args.push(options.titleStyles);}else{hue=((options.title[i].toLowerCase().charCodeAt(0)*2)+options.hue)%255;args.push(""+options.titleStyles+"; background-color: #50bebf; color: transparent; line-height: 0;");}i++;}_console.log.apply(console,args);}if(options.author){_console.log("%c"+options.title+"%c"+options.author,options.titleStyles,options.authorStyles);}else{_console.log("%c"+options.title,options.titleStyles);}}if(options.description){_console.log("%c"+options.description,options.descriptionStyles);}if(cb){return cb();}};_console=_console||window.console;options=options||window.signet.options||{enabled:true};if(options.enabled===false){return;}options=getOptions(options);if(!options.image){return _draw();}else{img=new Image();img.onload=function(){_console.log("%c ","font-size: 0; line-height: "+img.height+"px; padding: "+(Math.floor(img.height/2))+"px "+img.width+"px "+(Math.ceil(img.height/2))+"px 0; background-image: url(\""+img.src+"\");");return _draw();};return img.src=options.image;}};window.signet=window.signet||{};window.signet.options=window.signet.options||window.signetOptions||{};if(!window.console||!window.console.log||!document.head||!document.querySelector){window.signet.draw=function(){};return;}autoInit=true;tag=document.querySelector("[data-signet-draw]");if(tag){autoInit=tag.getAttribute("data-signet-draw").toLowerCase()!=="false";}if(signet.options.draw===false){autoInit=false;}if(autoInit){deferConsole(function(_console,_then){return draw(null,_console,_then);});}window.signet.draw=draw;}).call(this);
//
