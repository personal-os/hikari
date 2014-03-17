
$(function() {

	// var now = new Date();
	// var one_min = new Date(now.getTime() + 60000);
	// var alarm1 = new Alarm({ date:one_min, alarmCallback:alarm1_callback, message:"1 minute passed!" });

	// document.getElementById("landing").innerHTML = alarm1.toTimeStr("yyyy. mmmm dd. dddd HH:MM:ss");

	// var clock1 = new Clock({ id:"clock1" });
	// var clock3 = new Clock({ id:"clock3", interval:5000 });
	// var clock4 = new Clock({ id:"clock4", format:"hh:MM TT" });								// 03:00 PM
	// var clock5 = new Clock({ id:"clock5", format:"hh:MM" });										// 03:00
	// var clock6 = new Clock({ id:"clock6", format:"m/d" });											// 3/27
	// var now_7s = new Date(now.getTime() + 7000);
	// var alarm2 = new Alarm({date:now_7s, recurrent:7000, alarmCallback:alarm2_callback, message:now.getTime()});

	var
	clock2 = new Clock({ id: "japan-time", format: "HH:MM Z", tz: "+0900" }),
	full_date = new Clock({ id: "full-date", format: "dddd, mmmm dd yyyy" }),		// Thursday, June 27 2014
	time = new Clock({ id: "time", format: "hh:MMtt" }),												// 03:00pm
	currentDay = new Clock({ id: "current-day", format: "dddd" }),
	currentTime = new Clock({ id: "current-time", format: "hh:MMtt" });

	var now = new Date();
	var hrs = now.getHours();
	var msg = $("#time-of-day");

	if (hrs > 0) {
		$("#time-of-day").text("You're up early");
	}

	if (hrs > 6) {
		$("#time-of-day").text("Good morning");
	}

	if (hrs > 12) {
		$("#time-of-day").text("Good afternoon");
	}

	if (hrs > 17) {
		$("#time-of-day").text("Good evening");
	}

	if (hrs > 22) {
		$("#time-of-day").text("You're up late");
	}

});
