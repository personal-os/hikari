// online.js
// @IdeasNeverCease
// ========================================================
$(function () {

  $(".user-avatar").before("<div class='online-indicator'></div>");

  // Detecting the internet connection
  function updateConnectionStatus(msg, connected) {

    var el = document.querySelector(".online-indicator");

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

      $(".online-indicator").css("background-color", "#00ff00");
      updateConnectionStatus("Online", true);
      console.log("hikari is online");

    } else {

      $(".online-indicator").css("background-color", "#ff3131");
      updateConnectionStatus("Offline", false);
      console.log("hikari is offline");

    }

  }, false);

  window.addEventListener("online", function (e) {

    $(".online-indicator").css("background-color", "#00ff00");
    updateConnectionStatus("Online", true);
    console.log("hikari is online");

  }, false);

  window.addEventListener("offline", function (e) {

    $(".online-indicator").css("background-color", "#ff3131");
    updateConnectionStatus("Offline", false);
    console.log("hikari is offline");

  }, false);

});