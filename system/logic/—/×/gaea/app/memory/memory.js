var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.app) HIKARI.gaea.app = {};

HIKARI.gaea.app.memory = function (rows, cols, name) {

	var gameMode = 1;

	// Några getters och setters

	this.getGameMode = function () {
		return gameMode;
	};

	this.getRows = function () {
		return rows - 1;
	};

	this.getCols = function () {
		return cols - 1;
	};

	this.randomize = function () {
		return RandomGenerator.getPictureArray(rows, cols);
	};

	this.setGameMode = function (_gameMode) {
		gameMode = _gameMode;
	};

	this.setRows = function (_rows) {
		rows = _rows;
	};

	this.setCols = function (_cols) {
		cols = _cols;
	};

	HIKARI.gaea.wm.window.call(this, "Memory", "memory", 274, 0, "no");

};

HIKARI.gaea.app.memory.prototype = new HIKARI.gaea.wm.window;

HIKARI.gaea.app.memory.prototype.init = function () {

	this.drawWindow();
	this.menuOpt();
	this.start();

};

HIKARI.gaea.app.memory.prototype.start = function () {

	// console.log("Start-funktionen i Memory anropas");

	var
	that = this,
	height;

	if (this.getGameMode() === 0) {
		this.setRows(2);
		this.setCols(4);
		height = 360;
	} else if (this.getGameMode() == 1) {
		this.setRows(3);
		this.setCols(4);
		height = 410;
	} else if (this.getGameMode() == 2) {
		this.setRows(4);
		this.setCols(4);
		height = 470;
	}

	$(this.win).css({ "height": height });

	this.memoryArray = this.randomize();

	this.openBricks = []; // Öppna brickor i en array 
	this.tries = 0; // Sparar försöken i en array
	this.found = 0; // Sparar antalet hittade brickor i en array

	this.startTime = new Date().getTime();


	this.generateField(); // Skapar spelplanen
	this.getHighscore();

};

HIKARI.gaea.app.memory.prototype.changeGame = function () {

	var
	that = this,
	form = $("<form>");

	var select = $("<select>").appendTo(form).attr({
		name: "sekunder"
	});

	var gameModes = ["2x4", "3x4", "4x4"];

	for (var i = 0; i < gameModes.length; i++) {
		if (this.getGameMode() == i) {
			$("<option>").appendTo(select).attr({
				"value": i,
				"selected": "selected"
			}).text(gameModes[i]);
		} else {
			$("<option>").appendTo(select).attr({
				"value": i
			}).text(gameModes[i]);
		}
	}

	$("<input type='button'>").appendTo(form).attr({
		value: "ändra"
	}).click(function () {

		that.setGameMode(parseInt($(select).val()));
		that.restart();
		that.hidePopUp();

	});

	this.showPopUp("180px", "80px", form);

};

HIKARI.gaea.app.memory.prototype.restart = function () {

	$(this.getContent()).empty();
	$(this.divInfo).remove();
	$(this.time).remove();

	clearInterval(this.clock);
	this.start();

};

HIKARI.gaea.app.memory.prototype.showBrick = function (brick, obj) {

	if (this.openBricks.length >= 2) {
		clearTimeout(timeOut);
		this.closeBricks();
	}

	var
	that = this,
	divBrick = obj.parentNode,
	brickImg = obj.childNodes[0];

	divBrick.removeChild(obj);
	divBrick.appendChild(brickImg);

	brickImg.src = "appPics/memory/" + brick + ".png";

	brickArr = [brick, brickImg];
	this.openBricks.push(brickArr);

	if (this.openBricks.length === 2) {
		timeOut = setTimeout(function () {
			that.closeBricks();
		}, 1000);
	}

};

HIKARI.gaea.app.memory.prototype.closeBricks = function () {

	var table = this.openBricks[0][1].parentNode.parentNode.parentNode;
	// console.log(this.openBricks[0]+" "+this.openBricks[1]);

	if (this.openBricks[0][0] === this.openBricks[1][0]) {
		++this.found;
	} else {
		for (var i = 0; i < this.openBricks.length; ++i) {
			var img = this.openBricks[i][1];
			var td = img.parentNode;

			td.removeChild(img);
			this.generateBrick(this.openBricks[i][0], td);
		}
	}

	this.updateInfo();
	var that = this;

	if (this.found === this.memoryArray.length / 2) {
		var finish = setTimeout(function () {
			that.finish();
		}, 500);
	}

	this.openBricks = [];

};

HIKARI.gaea.app.memory.prototype.generateBrick = function (brick, divBrick) {

	var that = this;

	var a = $("<a>").attr("href", "#").click(function () {
		that.showBrick(brick, this);
	}).appendTo(divBrick);

	var img = $("<img>").attr("src", "appPics/memory/bg.png").appendTo(a);

};

HIKARI.gaea.app.memory.prototype.updateInfo = function () {

	++this.tries;
	$(this.divInfo).children().remove(".memoryInfoText");
	this.createInfo();

};

HIKARI.gaea.app.memory.prototype.createInfo = function () {
	$("<p>").html("<b>Försök:</b> " + this.tries + "<br/><b>Hittade:</b> " + this.found).appendTo(this.divInfo).addClass("memoryInfoText");
};

HIKARI.gaea.app.memory.prototype.updateTime = function () {

	curTime = new Date().getTime();
	this.myTime = $(curTime - this.startTime).myTimeHours() + ":" + $(curTime - this.startTime).myDateMinutes() + ":" + $(curTime - this.startTime).myDateSec();
	$(this.time).html("<b>Tid:</b> " + this.myTime);

};

HIKARI.gaea.app.memory.prototype.generateField = function () {

	var
	divCont = $("<div>").addClass("divCont").appendTo($(this.getContent())),
	brick = 0;

	for (var i = 0; i <= this.getRows(); ++i) {
		var divRow = $("<div>").addClass("divRow").appendTo(divCont);

		for (var x = 0; x <= this.getCols(); ++x) {
			var divBrick = $("<div>").addClass("divBrick").appendTo(divRow);
			this.generateBrick(this.memoryArray[brick], divBrick);
			++brick;
		}

		var clr = $("<div>").addClass("clear").appendTo(divRow);
	}

	var clr = $("<div>").addClass("clear").appendTo($(this.getContent()));

	this.divInfo = $("<div>").addClass("divInfo").appendTo($(this.getContent()));
	this.time = $("<p>").html("<b>Tid:</b> 00:00:00").addClass("memoryInfoTime").appendTo(this.divInfo);

	var that = this;

	this.clock = setInterval(function () {
		that.updateTime();
	}, 1000);

	this.createInfo();

};

HIKARI.gaea.app.memory.prototype.finish = function () {

	clearInterval(this.clock);
	this.writeHighscore();

};

HIKARI.gaea.app.memory.prototype.getHighscore = function () {

	var that = this;

	$.ajax({
		url: "JS/gaea/app/memory/highscore.xml",
		cache: false,
		beforeSend: function (data) {
			$(that.getInfo()).html("<img src='appPics/ajax-loader.gif' class='windowBottomTextLoader' /> Laddar...");
		},
		success: function (data) {
			that.drawHighscore(data);
		},
		error: function () {
			$(that.getInfo()).html("Kunde inte läsa in meddelanden");
		}
	});

};

HIKARI.gaea.app.memory.prototype.drawHighscore = function (data) {

	$(this.getInfo()).html("");

	var
	that = this,
	xml = $.parseXml(data);

	$(xml).find("game" + this.getGameMode()).each(function () {

		this.highTime = $(this).find("time").text();
		this.highTries = $(this).find("tries").text();

		var divHighscore = $("<div>").addClass("divHighscore").appendTo($(that.getContent()));

		$("<p>").html("<b>Highscore</b>").addClass("memoryInfoTime").appendTo(divHighscore);
		$("<p>").html("<b>Tid:</b> " + this.highTime + "<br /><b>Försök:</b> " + this.highTries).addClass("memoryInfoTime").appendTo(divHighscore);

	});

};

HIKARI.gaea.app.memory.prototype.writeHighscore = function () {

	var that = this;

	if (this.tries < this.highTries) {
		var tries = this.tries;
	} else {
		var tries = this.highTries;
	}

	if (this.myTime < this.highTime) {
		var time = this.myTime;
	} else {
		var time = this.highTime;
	}

	$.ajax({
		type: "POST",
		url: "JS/gaea/app/memory/writeHighscore.php",
		data: ({
			tries: tries,
			time: time,
			game: this.getGameMode()
		}),
		beforeSend: function (data) {
			$(that.getInfo()).html("<img src='appPics/ajax-loader.gif' class='windowBottomTextLoader' /> Skickar...");
		},
		success: function (data) {
			console.log(data);
			$(that.getInfo()).html("");
		},
		error: function () {
			$(that.getInfo()).html("Kunde inte skicka highscore.");
		}
	});

};

HIKARI.gaea.app.memory.prototype.menuOpt = function () {

	var
	that = this,
	menuArr = [];

	menuArr.push([this.closeWindow, "NULL", "close.png", "File", "Close"]);
	menuArr.push([this.restart, this, "restart.png", "Redigera", "Starta om"]);
	menuArr.push([this.changeGame, this, "settings.png", "Redigera", "Inställningar"]);

	that.drawMenu(menuArr);

};
