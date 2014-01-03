var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.app) HIKARI.gaea.app = {};

HIKARI.gaea.app.imageViewer = function (width, height) {
	HIKARI.gaea.wm.window.call(this, "Image Viewer", "image16", 350, 300);
};

HIKARI.gaea.app.imageViewer.prototype = new HIKARI.gaea.wm.window;

HIKARI.gaea.app.imageViewer.prototype.init = function (data) {

	this.drawWindow();
	this.menuOpt();

	var that = this;

	$.ajax({
		url: "Backend/getThumbs.php",
		beforeSend: function (data) {
			$(that.getInfo()).html("<img src='appPics/ajax-loader.gif' class='windowBottomTextLoader' /> Loading...");
			that.startTime = new Date().getTime();
		},
		success: function (data) {
			that.drawThumbs(data);
			// console.log('Load was performed.');
		},
		error: function () {}
	});

	return (this.getId());

};

HIKARI.gaea.app.imageViewer.prototype.drawThumbs = function (data) {

	// console.log("Data laddad "+data) ;
	var dataArray = data.split(";");

	// Hitta största bredd och höjd
	var maxWidth = 0;
	var maxHeight = 0;

	for (var i = 0; i < dataArray.length - 1; i++) {
		tmpArray = dataArray[i].split(",");
		dataArray[i] = tmpArray;

		if (maxWidth < dataArray[i][1]) {
			maxWidth = dataArray[i][1];
		}

		if (maxHeight < dataArray[i][2]) {
			maxHeight = dataArray[i][2];
		}
	}

	// Rita upp tummnaglarna
	// console.log(this.content);
	for (var i = 0; i < dataArray.length - 1; i++) {
		var
		imgName = dataArray[i][0],
		imgWidth = dataArray[i][1],
		imgHeight = dataArray[i][2],
		imgPrntWidth = dataArray[i][3],
		imgPrntHeight = dataArray[i][4],
		that = this;

		var link = $("<a>").attr({
			"href": "#",
			"src": imgName,
			"height": imgPrntHeight,
			"width": imgPrntWidth
		}).appendTo(this.getContent()).addClass("imageViewerThumbLink").click(this.openImage);

		var imgContainer = $("<div>").appendTo(link).addClass("imageViewerThumbCont").css({
			"width": maxWidth,
			"height": maxHeight
		}).mouseenter(function (e) {
			var text = "Namn: " + imgName + "<br/>Höjd: " + imgPrntHeight + "px<br/>Bredd: " + imgPrntWidth + "px";
			HIKARI.gaea.wm.tooltip.showTooltip(e, text, imgContainer);
		}).mouseleave(function (e) {
			HIKARI.gaea.wm.tooltip.hideTooltip();
		}).scroll(function (e) {
			HIKARI.gaea.wm.tooltip.hideTooltip();
		});

		$("<img>").appendTo(imgContainer).attr("src", "pics/thumbs/" + imgName).addClass("imageViewerThumbImg").css({
			"width": imgWidth,
			"height": imgHeight
		}).center();
	}

	var elapsed = new Date().getTime() - this.startTime;
	$(that.getInfo()).html(i + 1 + " bilder laddade på " + elapsed + "ms.");

};

HIKARI.gaea.app.imageViewer.prototype.openImage = function () {

	// console.log(this);
	var window = new HIKARI.gaea.app.imageSingle(this);
	window.init();

};

HIKARI.gaea.app.imageViewer.prototype.menuOpt = function () {

	var that = this;
	var menuArr = [];

	menuArr.push([this.closeWindow, "NULL", "close.png", "File", "Close"]);

	that.drawMenu(menuArr);

};
