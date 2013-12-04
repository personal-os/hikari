// ALARM FUNCTION
function alarm1_callback(timeStr, message) {
	// document.getElementById("alarm").innerHTML = timeStr + ": " + message;
	// alert("The time is: "+timeStr+", the message is: "+message);
}

function alarm2_callback(timeStr, message) {
	// var now = new Date();
	// var elapsed = Math.floor((now.getTime() - message) / 1000);
	// document.getElementById("alarm2").innerHTML = timeStr + ": elapsed " + elapsed + " seconds";
}

$(document).ready(function() {

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
	clock2 = new Clock({ id:"japan-time", format:"HH:MM Z", tz:"+0900" });
	full_date = new Clock({ id:"full-date", format:"dddd, mmmm dd yyyy" });		// Thursday, June 27 2014
	time = new Clock({ id:"time", format:"hh:MMtt" });												// 03:00pm

});
