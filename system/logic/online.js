// online.js
// @IdeasNeverCease
// ========================================================
$(function () {

  $("#userDisplay").after("<div class='system__taskbar__item' id='onlineIndicator'></div>");

  // Detecting the internet connection
  function updateConnectionStatus(msg, connected) {

    var el = document.querySelector("#onlineIndicator");

    if (connected) {
      if (el.classList) {
        el.classList.add("connected");
        el.classList.remove("disconnected");
      } else {
        el.addClass("connected");
        el.removeClass("disconnected");
      }
    } else {
      if (el.classList) {
        el.classList.remove("connected");
        el.classList.add("disconnected");
      } else {
        el.removeClass("connected");
        el.addClass("disconnected");
      }
    }

    // el.innerHTML = msg + "<div></div>";

  }

  window.addEventListener("load", function (e) {
    if (navigator.onLine) {
      $("#onlineIndicator").css("background-color", "#00ff00");
      updateConnectionStatus("Online", true);
      console.log("hikari is online");
    } else {
      $("#onlineIndicator").css("background-color", "#ff3131");
      updateConnectionStatus("Offline", false);
      console.log("hikari is offline");
    }
  }, false);

  window.addEventListener("online", function (e) {
    $("#onlineIndicator").css("background-color", "#00ff00");
    updateConnectionStatus("Online", true);
    console.log("hikari is online");
  }, false);

  window.addEventListener("offline", function (e) {
    $("#onlineIndicator").css("background-color", "#ff3131");
    updateConnectionStatus("Offline", false);
    console.log("hikari is offline");
  }, false);

});