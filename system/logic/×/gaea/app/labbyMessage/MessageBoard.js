var HIKARI;

if (!HIKARI) HIKARI = {};
if (!HIKARI.gaea) HIKARI.gaea = {};
if (!HIKARI.gaea.app) HIKARI.gaea.app = {};

HIKARI.gaea.app.messageBoard = function () {

	var user = this.getCookie('username');
	if (!user) user = "Anonym";

	var updateTime = this.getCookie('updateTime');
	if (!updateTime) updateTime = 60000;

	var nmbMessage = this.getCookie('nmbMessage');
	if (!nmbMessage) nmbMessage = 10;

	this.getUsername = function () {
		return user;
	};

	this.getUpdateTime = function () {
		return updateTime;
	};

	this.getNmbMessage = function () {
		return nmbMessage;
	};

	this.setUsername = function (_user) {
		user = _user;
		this.setCookie('username', _user, 365);
	};

	this.setUpdateTime = function (_updateTime) {
		updateTime = _updateTime;
		this.setCookie('updateTime', _updateTime, 365);
	};

	this.setNmbMessage = function (_nmbMessage) {
		nmbMessage = _nmbMessage;
		this.setCookie('nmbMessage', _nmbMessage, 365);
	};

	HIKARI.gaea.wm.window.call(this, "JAWM Chat", "empathy", 300, 400);

};

HIKARI.gaea.app.messageBoard.prototype = new HIKARI.gaea.wm.window;

HIKARI.gaea.app.messageBoard.prototype.init = function () {

	this.drawWindow();
	this.menuOpt();
	this.drawChat();

};

HIKARI.gaea.app.messageBoard.prototype.drawChat = function () {

	var that = this;
	$(this.getContent()).addClass("imageSingleWindowMain");

	this.msgContainer = $("<div>").appendTo($(this.getContent())).addClass("msgContainer");
	this.writeMsgContainer = $("<div>").appendTo($(this.getContent())).addClass("writeMsgContainer");

	var textarea = $("<textarea>").appendTo(this.writeMsgContainer).keypress(function (e) {

		if (e.keyCode == '13' && e.shiftKey) {
			console.log("radbrytning");
		} else if (e.keyCode == '13') {
			e.preventDefault();
			that.writeMsg();
			$(this).val("");
		}

	});

	this.getMsg();

};


HIKARI.gaea.app.messageBoard.prototype.getMsg = function () {

	var that = this;
	$(this.msgContainer).empty();

	$.ajax({
		url: "http://homepage.lnu.se/staff/tstjo/labbyserver/getMessage.php",
		data: ({
			history: that.getNmbMessage()
		}),
		cache: false,
		beforeSend: function (data) {
			$(that.getInfo()).html("<img src='appPics/ajax-loader.gif' class='windowBottomTextLoader'/> Loading...");
			that.startTime = new Date().getTime();
		},
		success: function (data) {
			that.drawMsgs(data);
		},
		error: function () {
			$(that.getInfo()).html("Kunde inte läsa in meddelanden");
		}
	});

};

HIKARI.gaea.app.messageBoard.prototype.drawMsgs = function (data) {

	var
	that = this,
	xml = $.parseXml(data);

	$(xml).find("message").each(function () {

		var
		dt = parseInt($(this).find("time").text()),
		alias = $(this).find("author").text(),
		date = $(dt).myDateDay() + " " + $(dt).myDateMonth() + " " + $(dt).myDateYear() + " " + $(dt).myDateHours() + ":" + $(dt).myDateMinutes(),
		div = $("<div>").addClass("chatMsg").appendTo($(that.msgContainer)),
		divInfo = $("<div>").addClass("chatMsgInfo").appendTo(div);

		$("<p>").addClass("chatMsgAlias").appendTo(divInfo).append(alias);
		$("<p>").addClass("chatMsgDate").appendTo(divInfo).append(date);
		$("<div>").appendTo(divInfo).addClass("clr");
		$("<p>").addClass("chatMsgText").appendTo(div).append($(this).find("text").text());

	});

	$(this.msgContainer).attr({
		scrollTop: $(this.msgContainer).attr("scrollHeight")
	}); // Scrollar ner chatten i botten där nya meddelanden dyker upp

	$(this.getInfo()).html("Senast uppdaterad " + $(new Date().getTime()).myDateHours() + ":" + $(new Date().getTime()).myDateMinutes());

	var update = setTimeout(function () {
		that.getMsg();
	}, this.getUpdateTime());

};

HIKARI.gaea.app.messageBoard.prototype.writeMsg = function (data) {

	var that = this;

	$.ajax({
		type: "POST",
		url: "http://homepage.lnu.se/staff/tstjo/labbyserver/setMessage.php",
		data: ({
			username: this.getUsername(),
			text: $(this.writeMsgContainer).children().filter("textarea").val()
		}),
		beforeSend: function (data) {
			$(that.getInfo()).html("<img src='appPics/ajax-loader.gif' class='windowBottomTextLoader' /> Skickar...");
			that.startTime = new Date().getTime();
		},
		success: function (data) {
			that.getMsg();
		},
		error: function () {
			$(that.getInfo()).html("Kunde inte läsa in meddelanden");
		}
	});

};

HIKARI.gaea.app.messageBoard.prototype.menuOpt = function () {

	var
	that = this,
	menuArr = [];

	menuArr.push([this.closeWindow, "NULL", "close.png", "File", "Close"]);
	menuArr.push([this.changeInterval, this, "time.png", "Inställningar", "Uppdateringsintervall"]);
	menuArr.push([this.changeNrMsg, this, "msg.png", "Inställningar", "Antal meddelandem"]);
	menuArr.push([this.changeUsername, this, "user.png", "Inställningar", "Alias"]);
	menuArr.push([this.getMsg, this, "refresh.png", "Inställningar", "Uppdatera nu"]);

	that.drawMenu(menuArr);

};

HIKARI.gaea.app.messageBoard.prototype.changeInterval = function () {

	var
	that = this,
	form = $("<form>");

	var select = $("<select>").appendTo(form).attr({
		name: "sekunder"
	});

	for (var i = 1; i < 6; i++) {
		if (this.getUpdateTime() / 10000 == i) {
			$("<option>").appendTo(select).attr({
				"value": i * 10,
				"selected": "selected"
			}).text(i * 10 + " Sekunder");
		} else {
			$("<option>").appendTo(select).attr({
				"value": i * 10
			}).text(i * 10 + " Sekunder");
		}
	}

	$("<input type='button'>").appendTo(form).attr({
		value: "ändra"
	}).click(function () {

		that.setUpdateTime(parseInt($(select).val()) * 1000);
		that.getMsg();
		that.hidePopUp();

	});

	this.showPopUp("245px", "80px", form);

};

HIKARI.gaea.app.messageBoard.prototype.changeNrMsg = function () {

	var
	that = this,
	form = $("<form>");

	var select = $("<select>").appendTo(form).attr({
		name: "msg"
	});

	for (var i = 1; i < 6; i++) {
		if (this.getNmbMessage() / 10 == i) {
			$("<option>").appendTo(select).attr({
				"value": i * 10,
				"selected": "selected"
			}).text(i * 10 + " meddelanden");
		} else {
			$("<option>").appendTo(select).attr({
				"value": i * 10
			}).text(i * 10 + " meddelanden");
		}
	}

	$("<input type='button'>").appendTo(form).attr({
		value: "ändra"
	}).click(function () {

		that.setNmbMessage(parseInt($(select).val()));
		that.getMsg();
		that.hidePopUp();

	});

	this.showPopUp("260px", "80px", form);

};

HIKARI.gaea.app.messageBoard.prototype.changeUsername = function () {

	var
	that = this,
	form = $("<form>");

	var username = $("<input type='text'>").appendTo(form).attr({
		name: "username"
	}).val(that.getUsername());

	$("<input type='button'>").appendTo(form).attr({
		value: "ändra"
	}).click(function () {

		that.setUsername($(username).val());
		that.getMsg();
		that.hidePopUp();

	});

	this.showPopUp("330px", "80px", form);

};

HIKARI.gaea.app.messageBoard.prototype.setCookie = function (c_name, value, expiredays) {

	var exdate = new Date();

	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) + ((expiredays === null) ? "" : ";expires=" + exdate.toUTCString());

};

HIKARI.gaea.app.messageBoard.prototype.getCookie = function (c_name) {

	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");

		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);

			if (c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}

	return "";

};
