
	// Gaea.js
	// @IdeasNeverCease
	// ========================================================
	// Base | Folder icon views
	// Chip Folder | SubChip Folder | Data Library | NetNavi | EMail | Key Items | Network | Internet Maps | Save
	// System Fonts

	var $vW = $(window).width(), $vH = $(window).height();

	$(function () {

		// $(".wm-overlay").append('<div class="desktop"></div>'); // for desktop context menu
		// $(".desktop").css("height", $vH - 50 + "px"); // taskbar is 50px tall

		// Wallpaper
		$(".hikari-content-inner").backstretch("shell/wallpaper/tokyoSkytree-observationDeck/14.darwinfish105.jpg");

	});

	// Icon view
	$(document).on("click", "#contentView-icons", function () {

		var xhr;
		if (window.XMLHttpRequest) xhr = new XMLHttpRequest(); // All browsers, except IE. Fuck IE.
		else xhr = new ActiveXObject("Microsoft.XMLHTTP"); // For IE. Again, fuck IE.

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
					output += "<img src=" + items[key].image + " alt=\"\">";
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
					output += "<img src=" + items[key].image + " alt=\"\">";
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

		// $(".wm-space").append('<section id="network">Hehe, this is gonna be awesome. And, take a bajillion years to create. You know how the Internet in MMBN and the anime was 3D? Yeah. Exactly. A bajillion years.</section>');

		$(".wm-space").append('<section id="network"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></section>');

		var chipWin = wm.createWindow.fromQuery("#network", {

			title: "Network",
			classname: "folder",
			width: 600,
			height: 300,
			x: 85,
			y: 120

		});

		$("#network").parent().css({
			"overflow-x": "hidden",
			"overflow-y": "hidden"
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
			x: $vW / 2 - 150,
			y: $vH / 2 - 175,
			resizable: false,
			widget: true

		});

		stuff = "";
		stuff += "<h1 id=\"about-logo\">hikari</h1>";
		stuff += "<p>hikari is an experimental, responsive operating system — for justice!</p>";
		stuff += "<p>GitHub repo: <a href=\"https://github.com/IdeasNeverCease/hikari\" target=\"_blank\">here</a>. Origin story: <a href=\"http://dsgn.io/thoughts/the-future-of-the-operating-system\" target=\"_blank\">here</a>. Official site: <a href=\"http://hikar.io\" target=\"_blank\">hikar.io</a>.</p>";
		stuff += "<p id=\"about-copy\">&copy; 2014 Paul Anthony Webb</p>";

		$("#hikari-about").parent().css({
			"overflow-x": "hidden",
			"overflow-y": "hidden"
		});

		$("#hikari-about").append(stuff);

	});

	// Run/Dekao terminal
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
	var item = document.getElementById("range");

	item.onchange = function () {
		value = (item.value - item.min) / (item.max - item.min);

		item.style.backgroundImage = [
			'-webkit-gradient(',
			'linear, ',
			'left top, ',
			'right top, ',
			'color-stop(' + value + ', #007aff), ',
			'color-stop(' + value + ', #b8b7b8)',
			')'
		].join('');
	};
	*/

	$(function () {

		day = new Date();		// get the date
		x = day.getHours();	// get the hour

		/*
		if (x >= 0 && x < 1) {
			// $("html").removeClass().addClass("sand-babe");
			$("html").css("background", "linear-gradient(135deg, #b3cae5 12%, #dbdde4 46%, #e4e3e4 70%, #f7ddbb 94%, #efcab2 100%)");
		}

		if (x >= 1 && x < 2) {
			// $("html").removeClass().addClass("beach-towel");
			$("html").css("background", "linear-gradient(135deg, #5e7fb1 0%, #dce8f7 61%, #eff1f4 72%, #fce1a8 88%, #f7ec86 100%)");
		}

		if (x >= 2 && x < 3) {
			// $("html").removeClass().addClass("sky-blush");
			$("html").css("background", "linear-gradient(135deg, #8fb8ee 0%, #cbe2f4 40%, #dbe5eb 63%, #f9d3b8 83%, #e0b2a3 100%)");
		}

		if (x >= 3 && x < 4) {
			// $("html").removeClass().addClass("kentucky-dawn");
			$("html").css("background", "linear-gradient(135deg, #b4ced8 17%, #d7e5d4 51%, #e2e8c9 72%, #f1e5b9 87%, #edd7ac 100%)");
		}

		if (x >= 4 && x < 5) {
			// $("html").removeClass().addClass("slate-sunrise");
			$("html").css("background", "linear-gradient(135deg, #506e90 0%, #7695aa 37%, #a7bdb8 56%, #e2e2b8 79%, #fdf998 100%)");
		}

		if (x >= 5 && x < 6) {
			// $("html").removeClass().addClass("blue-peach");
			$("html").css("background", "linear-gradient(135deg, #6bafd2 0%, #a4c8dc 38%, #d6cbca 58%, #eabc96 79%, #db8876 100%)");
		}

		if (x >= 6 && x < 7) {
			// $("html").removeClass().addClass("pixy-dust");
			$("html").css("background", "linear-gradient(135deg, #95b3bf 0%, #c6cdd3 35%, #e5d8d9 64%, #f1e1d9 85%, #f3e1cd 100%)");
		}

		if (x >= 7 && x < 8) {
			// $("html").removeClass().addClass("rainbow-pudding");
			$("html").css("background", "linear-gradient(135deg, #a7d3cb 0%, #bcc1c4 32%, #e5cab3 59%, #fee6c5 89%, #fdecd0 100%)");
		}

		if (x >= 8 && x < 9) {
			// $("html").removeClass().addClass("pale-elm");
			$("html").css("background", "linear-gradient(135deg, #bccacc 0%, #c7d8d6 26%, #d9ebe0 54%, #ebf9e3 78%, #f4f8d0 100%)");
		}

		if (x >= 9 && x < 10) {
			// $("html").removeClass().addClass("pastel-daylight");
			$("html").css("background", "linear-gradient(135deg, #a2e0f9 6%, #cef5fc 39%, #eafaeb 70%, #fefcd3 88%, #fdf4ba 100%)");
		}

		if (x >= 10 && x < 11) {
			// $("html").removeClass().addClass("dolphin");
			$("html").css("background", "linear-gradient(135deg, #34a4ca 0%, #59d7dd 28%, #a8f2f0 59%, #d0f8ef 84%, #d6f6e1 100%)");
		}

		if (x >= 11 && x < 12) {
			// $("html").removeClass().addClass("field-day");
			$("html").css("background", "linear-gradient(135deg, #7696cd 0%, #8fb2e4 15%, #b0cff0 33%, #d7e5ec 69%, #dee0e7 92%)");
		}

		if (x >= 12 && x < 13) {
			// $("html").removeClass().addClass("seafoam-sun");
			$("html").css("background", "linear-gradient(135deg, #8dd6c3 6%, #c5e5e2 40%, #eafaeb 70%, #f9f7ca 88%, #fceea1 100%)");
		}

		if (x >= 13 && x < 14) {
			// $("html").removeClass().addClass("brilliant-sky");
			$("html").css("background", "linear-gradient(135deg, #4e72c7 0%, #6d9ed7 34%, #a4c8d5 67%, #b4d9e1 84%, #c4d9d6 100%)");
		}

		if (x >= 14 && x < 15) {
			// $("html").removeClass().addClass("mountain-time");
			$("html").css("background", "linear-gradient(135deg, #889db6 0%, #a5b8ce 20%, #c1cfdd 42%, #dee1e4 81%, #d5d1cf 100%)");
		}

		if (x >= 15 && x < 16) {
			// $("html").removeClass().addClass("candy-day");
			$("html").css("background", "linear-gradient(135deg, #74bddb 0%, #a8d1eb 32%, #cddbf5 56%, #e4e6fb 73%, #f6f4f8 100%)");
		}

		if (x >= 16 && x < 17) {
			// $("html").removeClass().addClass("bruised-grape");
			$("html").css("background", "linear-gradient(135deg, #ffe3c8 0%, #efad9e 45%, #c79797 65%, #a78a92 85%, #857d8d 100%)");
		}

		if (x >= 17 && x < 18) {
			// $("html").removeClass().addClass("violet-blush");
			$("html").css("background", "linear-gradient(135deg, #6f749e 0%, #9a8daf 31%, #d0a8b9 58%, #f8bbb1 80%, #fde6b1 100%)");
		}

		if (x >= 18 && x < 19) {
			// $("html").removeClass().addClass("lavender-skies");
			$("html").css("background", "linear-gradient(135deg, #727288 6%, #8e889b 29%, #d3c2bd 70%, #f9d89a 89%, #f8c785 100%)");
		}

		if (x >= 19 && x < 20) {
			// $("html").removeClass().addClass("purple-sunset");
			$("html").css("background", "linear-gradient(135deg, #7e74b2 9%, #b3a2c2 36%, #e2cdbe 66%, #f6cf97 85%, #f4a77a 100%)");
		}

		if (x >= 20 && x < 21) {
			// $("html").removeClass().addClass("brownie");
			$("html").css("background", "linear-gradient(135deg, #555351 0%, #555351 5%, #8d7b6c 40%, #cc9d7a 70%, #fff9aa 100%)");
		}

		if (x >= 21 && x < 22) {
			// $("html").removeClass().addClass("tequila-sunset");
			$("html").css("background", "linear-gradient(135deg, #47565f 0%, #5b625a 15%, #947461 38%, #f98056 70%, #f7ec86 100%)");
		}

		if (x >= 22 && x < 23) {
			// $("html").removeClass().addClass("sutro");
			$("html").css("background", "linear-gradient(135deg, #325571 0%, #8e9fa4 38%, #decab2 66%, #f2d580 78%, #ffa642 100%)");
		}

		if (x >= 23 && x < 24) {
			// $("html").removeClass().addClass("berry-juice");
			$("html").css("background", "linear-gradient(135deg, #c5d4d7 6%, #d6b98d 34%, #c99262 57%, #8c5962 80%, #43577e 100%)");
		}

		if (x >= 24 && x < 0) {
			// $("html").removeClass().addClass("indigo-magic");
			$("html").css("background", "linear-gradient(135deg, #20202f 0%, #273550 16%, #416081 41%, #adacb2 78%, #eac3a2 100%)");
		}
		*/

	});

	// titleSignet × HubSpot × https://github.com/HubSpot/signet/tree/master/titleSignet
	(function(){var autoInit,deferConsole,draw,getContent,getOptions,orDefault,tag;getOptions=function(options){options.title=orDefault(options.title,getContent('meta[name="application-name"]'),getContent('meta[property="og:title"]'),document.title.split(/\u0020[\/\\\|\-\u8211\u8212]\u0020|\:\u0020/)[0],"");options.author=orDefault(options.author,getContent('meta[name=author]'),'');options.description=orDefault(options.description,getContent("meta[name=description]"),getContent('meta[property="og:description"]'),"");options.image=orDefault(options.image,getContent('meta[property="og:image"]'),getContent("meta[name=image]"));options.hue=options.hue||0;options.baseStyles=orDefault(options.baseStyles,'color: #444; font-family: "Open Sans", "Source Sans Pro", Arial, sans-serif;');options.titleStyles=orDefault(options.titleStyles,""+options.baseStyles+"; font-size: 20px; line-height: 30px;");options.authorStyles=orDefault(options.authorStyles,""+options.baseStyles+"; font-size: 12px; line-height: 30px; padding: 0 0 0 20px;");options.descriptionStyles=orDefault(options.descriptionStyles,""+options.baseStyles+"; font-size: 10px; line-height: 20px;");return options;};orDefault=function(){var argument,_i,_len;for(_i=0,_len=arguments.length;_i<_len;_i++){argument=arguments[_i];if(typeof argument!=="undefined"){return argument;}}return arguments[arguments.length-1];};getContent=function(selector){var _ref;return(_ref=document.head.querySelector(selector))!==null?_ref.content:void 0;};deferConsole=function(fn){var callable,i,messages,old,type,types,_fn,_i,_len;types=["log","debug","warn","error"];old={};callable={};messages=[];i=types.length;_fn=function(type){old[type]=console[type];callable[type]=function(){return old[type].apply(console,arguments);};return console[type]=function(){messages.push([type,arguments]);return void 0;};};for(i=_i=0,_len=types.length;_i<_len;i=++_i){type=types[i];_fn(type);}return setTimeout((function(){var _then;_then=function(){var block,message,_j,_len1,_results;while(messages.length){block=messages.shift();type=block[0];message=block[1];old[type].apply(console,message);}_results=[];for(_j=0,_len1=types.length;_j<_len1;_j++){type=types[_j];_results.push(console[type]=old[type]);}return _results;};return fn(callable,_then);}),0);};draw=function(options,_console,cb){var img,_draw;_draw=function(){var args,hue,i;if(options.title){if(!options.image){args=[""];i=0;while(i<options.title.length){args[0]+="%c"+options.title[i];if(options.title[i]===" "){args.push(options.titleStyles);}else{hue=((options.title[i].toLowerCase().charCodeAt(0)*2)+options.hue)%255;args.push(""+options.titleStyles+"; background-color: #50bebf; color: transparent; line-height: 0;");}i++;}_console.log.apply(console,args);}if(options.author){_console.log("%c"+options.title+"%c"+options.author,options.titleStyles,options.authorStyles);}else{_console.log("%c"+options.title,options.titleStyles);}}if(options.description){_console.log("%c"+options.description,options.descriptionStyles);}if(cb){return cb();}};_console=_console||window.console;options=options||window.signet.options||{enabled:true};if(options.enabled===false){return;}options=getOptions(options);if(!options.image){return _draw();}else{img=new Image();img.onload=function(){_console.log("%c ","font-size: 0; line-height: "+img.height+"px; padding: "+(Math.floor(img.height/2))+"px "+img.width+"px "+(Math.ceil(img.height/2))+"px 0; background-image: url(\""+img.src+"\");");return _draw();};return img.src=options.image;}};window.signet=window.signet||{};window.signet.options=window.signet.options||window.signetOptions||{};if(!window.console||!window.console.log||!document.head||!document.querySelector){window.signet.draw=function(){};return;}autoInit=true;tag=document.querySelector("[data-signet-draw]");if(tag){autoInit=tag.getAttribute("data-signet-draw").toLowerCase()!=="false";}if(signet.options.draw===false){autoInit=false;}if(autoInit){deferConsole(function(_console,_then){return draw(null,_console,_then);});}window.signet.draw=draw;}).call(this);
	//
