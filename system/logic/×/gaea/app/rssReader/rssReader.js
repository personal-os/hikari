var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.app) HIKARI.gaea.app = {};

HIKARI.gaea.app.rssReader = function () {

	var updateTime = 60000; // 1 minute
	var updateSource = "http://dsgn.io/feed/atom.xml";
	// var updateSource = "http://lnu.se/1.454?l=sv_SE&format=rss";

	this.getUpdateTime = function () {
		return updateTime;
	};

	this.getUpdateSource = function () {
		return updateSource;
	};

	this.setUpdateTime = function (_updateTime) {
		updateTime = _updateTime;
	};

	this.setUpdateSource = function (_updateSource) {
		updateSource = _updateSource;
	};

	HIKARI.gaea.wm.window.call(this, "RSS Reader", "rss", 270, 390);

};

HIKARI.gaea.app.rssReader.prototype = new HIKARI.gaea.wm.window;

HIKARI.gaea.app.rssReader.prototype.init = function () {

	this.drawWindow();
	this.loadRss();
	this.menuOpt();

};

HIKARI.gaea.app.rssReader.prototype.loadRss = function () {

	var that = this;

	// console.log("laddar om rss");

	$.ajax({
		url: "Backend/rss.php?url=" + escape(this.getUpdateSource()),
		beforeSend: function (data) {
			$(that.getInfo()).html("<img src='appPics/ajax-loader.gif' class='windowBottomTextLoader' /> Laddar...");
			that.startTime = new Date().getTime();
		},
		success: function (data) {
			that.drawRss(data);
		},
		error: function () {
			$(that.getInfo()).html("Kunde inte ladda RSS");
		}
	});

};

HIKARI.gaea.app.rssReader.prototype.drawRss = function (data) {

	var that = this;

	$(this.getContent()).empty();
	$(data).appendTo($(this.getContent()));

	$(this.getInfo()).html("Senast uppdaterad " + $(new Date().getTime()).myDateHours() + ":" + $(new Date().getTime()).myDateMinutes());

	var update = setTimeout(function () {
		that.loadRss();
	}, this.getUpdateTime());

};

HIKARI.gaea.app.rssReader.prototype.menuOpt = function () {

	var
	that = this,
	menuArr = [];

	menuArr.push([this.closeWindow, "NULL", "close.png", "File", "Close"]);
	menuArr.push([this.changeInterval, this, "time.png", "Inställningar", "Uppdateringsintervall"]);
	menuArr.push([this.choseSource, this, "source.png", "Inställningar", "Välj källa"]);
	menuArr.push([this.loadRss, this, "refresh.png", "Inställningar", "Uppdatera nu"]);

	that.drawMenu(menuArr);

};

HIKARI.gaea.app.rssReader.prototype.changeInterval = function () {

	var
	that = this,
	form = $("<form>");

	var select = $("<select>").appendTo(form).attr({
		name: "sekunder"
	});

	for (var i = 1; i < 6; i++) {
		if (i == 1) {
			time = " minut";
		} else {
			time = " minuter";
		}

		if (this.getUpdateTime() / 600000 == i) {
			$("<option>").appendTo(select).attr({
				"value": i * 10,
				"selected": "selected"
			}).text(i + time);
		} else {
			$("<option>").appendTo(select).attr({
				"value": i * 10
			}).text(i + time);
		}

		console.log(i);
	}

	$("<input type='button'>").appendTo(form).attr({
		value: "ändra"
	}).click(function () {

		that.setUpdateTime(parseInt($(select).val()) * 60000);
		that.loadRss();
		that.hidePopUp();

	});

	this.showPopUp("245px", "80px", form);

};

HIKARI.gaea.app.rssReader.prototype.choseSource = function () {

	var
	that = this,
	form = $("<form>"),
	checked = "no";

	var choices = [
		["LNU", "http://dsgn.io/feed/atom.xml"],
		["Aftonbladet", "http://dsgn.io/feed/atom.xml"],
		["IDG", "http://dsgn.io/feed/atom.xml"]
	];

	$(choices).each(function (i) {

		if (choices[i][1] == that.getUpdateSource()) {
			$("<input type='radio' />").appendTo(form).attr({
				"name": "source",
				"value": choices[i][1],
				"checked": "checked"
			});

			checked = "yes";
		} else {
			$("<input type='radio' />").appendTo(form).attr({
				"name": "source",
				"value": choices[i][1]
			});
		}

		$(form).append(choices[i][0]);
		$(form).append("<br>");

	});

	if (checked == "yes") {
		$("<input type='radio' />").appendTo(form).attr({
			"name": "source",
			"value": ""
		});

		var sourceText = $("<input type='text'>").appendTo(form).attr({
			"name": "sourceText"
		}).addClass("formSource");
	} else {
		$("<input type='radio' />").appendTo(form).attr({
			"name": "source",
			"value": "",
			"checked": "checked"
		});

		var sourceText = $("<input type='text'>").appendTo(form).attr({
			"name": "sourceText"
		}).addClass("formSource").val(that.getUpdateSource());
	}

	$(form).append("<br>");

	$("<input type='button'>").appendTo(form).attr({
		value: "ändra"
	}).click(function () {

		if ($("form input:radio:checked").val() === "") {
			that.setUpdateSource($(sourceText).val());
		} else {
			that.setUpdateSource($("form input:radio:checked").val());
		}

		that.loadRss();
		that.hidePopUp();

	});

	this.showPopUp("250px", "180px", form);

};
