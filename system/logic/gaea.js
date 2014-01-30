
var $vW = $(window).width(), $vH = $(window).height();

$(document).on("ready", function () {

	var $verticalMenu = $(".left.hikari-menu ul").height();

	// will remove this soon
	$(".left.hikari-menu").css("padding-top", $vH / 6);

	// Wallpaper
	// $(".hikari-content-inner").backstretch("shell/wallpaper/spring-sriram.jpg");
	$(".hikari-content-inner").backstretch("shell/wallpaper/tokyoSkytree-observationDeck/14.darwinfish105.jpg");

});

// Chips
$("#select-chip-folder").click(function (e) {

	// $(".wm-space").append('<section id="chip-folder">This is the Chip Folder.</section>');

	$(".wm-space").append('<section id="chip-folder"></section>');

	stuff = "";

	stuff += "<ul class=\"inline-list\">";
	stuff += "<li><img src=\"chips/BN-I/001.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename that is long for no reason</span></li>";
	stuff += "<li><img src=\"chips/BN-I/002.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/003.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/004.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/005.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/006.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/007.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/008.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/009.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/010.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/011.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/012.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/013.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/014.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/015.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/016.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/017.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/018.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/019.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/020.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/021.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/022.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/023.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/024.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/025.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/026.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/027.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/028.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/029.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/030.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/031.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/032.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/033.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/034.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/035.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/036.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/037.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/038.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/039.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/040.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/041.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/042.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/043.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/044.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/045.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/046.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/047.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/048.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/049.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/050.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/051.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/052.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/053.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/054.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/055.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/056.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/057.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/058.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/059.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/060.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/061.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/062.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/063.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/064.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/065.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/066.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/067.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/068.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/069.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/070.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/071.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/072.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/073.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/074.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/075.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/076.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/077.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/078.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/079.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/080.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/081.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/082.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/083.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/084.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/085.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/086.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/087.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/088.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/089.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/090.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/091.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/092.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/093.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/094.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/095.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/096.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/097.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/098.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/099.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/100.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/101.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/102.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/103.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/104.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/105.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/106.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/107.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/108.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/109.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/110.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/111.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/112.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/113.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/114.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/115.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/116.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/117.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/118.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/119.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/120.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/121.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/122.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/123.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/124.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/125.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/126.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/127.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/128.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/129.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/130.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/131.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/132.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/133.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/134.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/135.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/136.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/137.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/138.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/139.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/140.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/141.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/142.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/143.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/144.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/145.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/146.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/147.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/148.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/149.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/150.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/151.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/152.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/153.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/154.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/155.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/156.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/157.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/158.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/159.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/160.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/161.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/162.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/163.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/164.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/165.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/166.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/167.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/168.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/169.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/170.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/171.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/172.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/173.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/174.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/175.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/176.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/null.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "<li><img src=\"chips/BN-I/zenny.gif\"/><span class=\"filename-title\" contenteditable=\"false\">Filename</span></li>";
	stuff += "</ul>";

	$("#chip-folder").append(stuff);

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

// titleSignet × HubSpot × https://github.com/HubSpot/signet/tree/master/titleSignet

(function () {

	var autoInit, deferConsole, draw, getContent, getOptions, orDefault, tag;

	getOptions = function (options) {

		options.title = orDefault(options.title, getContent('meta[name="application-name"]'), getContent('meta[property="og:title"]'), document.title.split(/\u0020[\/\\\|\-\u8211\u8212]\u0020|\:\u0020/)[0], '');
		options.author = orDefault(options.author, getContent('meta[name=author]'), '');
		options.description = orDefault(options.description, getContent('meta[name=description]'), getContent('meta[property="og:description"]'), '');
		options.image = orDefault(options.image, getContent('meta[property="og:image"]'), getContent('meta[name=image]'));
		options.hue = options.hue || 0;
		options.baseStyles = orDefault(options.baseStyles, 'color: #444; font-family: "Open Sans", "Source Sans Pro", Arial, sans-serif;');
		options.titleStyles = orDefault(options.titleStyles, "" + options.baseStyles + "; font-size: 20px; line-height: 30px;");
		options.authorStyles = orDefault(options.authorStyles, "" + options.baseStyles + "; font-size: 12px; line-height: 30px; padding: 0 0 0 20px;");
		options.descriptionStyles = orDefault(options.descriptionStyles, "" + options.baseStyles + "; font-size: 10px; line-height: 20px;");

		return options;

	};

	orDefault = function () {

		var argument, _i, _len;

		for (_i = 0, _len = arguments.length; _i < _len; _i++) {
			argument = arguments[_i];

			if (typeof argument !== "undefined") {
				return argument;
			}
		}

		return arguments[arguments.length - 1];

	};

	getContent = function (selector) {

		var _ref;
		return (_ref = document.head.querySelector(selector)) !== null ? _ref.content : void 0;

	};

	deferConsole = function (fn) {

		var callable, i, messages, old, type, types, _fn, _i, _len;

		types = ["log", "debug", "warn", "error"];
		old = {};
		callable = {};
		messages = [];
		i = types.length;

		_fn = function (type) {

			old[type] = console[type];

			callable[type] = function () {
				return old[type].apply(console, arguments);
			};

			return console[type] = function () {

				messages.push([type, arguments]);
				return void 0;

			};

		};

		for (i = _i = 0, _len = types.length; _i < _len; i = ++_i) {
			type = types[i];
			_fn(type);
		}

		return setTimeout((function () {

			var _then;

			_then = function () {

				var block, message, _j, _len1, _results;

				while (messages.length) {
					block = messages.shift();
					type = block[0];
					message = block[1];
					old[type].apply(console, message);
				}

				_results = [];

				for (_j = 0, _len1 = types.length; _j < _len1; _j++) {
					type = types[_j];
					_results.push(console[type] = old[type]);
				}

				return _results;

			};

			return fn(callable, _then);

		}), 0);

	};

	draw = function (options, _console, cb) {

		var img, _draw;

		_draw = function () {

			var args, hue, i;

			if (options.title) {
				if (!options.image) {
					args = [""];
					i = 0;

					while (i < options.title.length) {
						args[0] += "%c" + options.title[i];

						if (options.title[i] === " ") {
							args.push(options.titleStyles);
						} else {
							hue = ((options.title[i].toLowerCase().charCodeAt(0) * 2) + options.hue) % 255;
							// args.push("" + options.titleStyles + "; background-color: hsl(" + hue + ", 80%, 80%); color: transparent; line-height: 0;");
							args.push("" + options.titleStyles + "; background-color: #50bebf; color: transparent; line-height: 0;");
						}

						i++;
					}

					_console.log.apply(console, args);
				}

				if (options.author) {
					_console.log("%c" + options.title + "%c" + options.author, options.titleStyles, options.authorStyles);
				} else {
					_console.log("%c" + options.title, options.titleStyles);
				}
			}

			if (options.description) {
				_console.log("%c" + options.description, options.descriptionStyles);
			}

			if (cb) { return cb(); }

		};

		_console = _console || window.console;

		options = options || window.signet.options || {
			enabled: true
		};

		if (options.enabled === false) { return; }
		options = getOptions(options);

		if (!options.image) {
			return _draw();
		} else {
			img = new Image();

			img.onload = function () {

				_console.log("%c ", "font-size: 0; line-height: " + img.height + "px; padding: " + (Math.floor(img.height / 2)) + "px " + img.width + "px " + (Math.ceil(img.height / 2)) + "px 0; background-image: url(\"" + img.src + "\");");
				return _draw();

			};

			return img.src = options.image;
		}

	};

	window.signet = window.signet || {};
	window.signet.options = window.signet.options || window.signetOptions || {};

	if (!window.console || !window.console.log || !document.head || !document.querySelector) {
		window.signet.draw = function () {};
		return;
	}

	autoInit = true;
	tag = document.querySelector("[data-signet-draw]");

	if (tag) {
		autoInit = tag.getAttribute("data-signet-draw").toLowerCase() !== "false";
	}

	if (signet.options.draw === false) {
		autoInit = false;
	}

	if (autoInit) {
		deferConsole(function (_console, _then) {
			return draw(null, _console, _then);
		});
	}

	window.signet.draw = draw;

}).call(this);

//



