// gaea/desktop.js
// @IdeasNeverCease
// ========================================================

$(function() {

  var
    $vW = $(window).width(),
    $vH = $(window).height();

  $(".wm-overlay").append("<div class='desktop'></div>");
  // $(".desktop").css("height", $vH - 50 + "px"); // can do this with CSS now

  icons = "";

  // icons += "<figure class=\"desktop-icon\">";
  // icons += "<img src=\"shell/images/folders/folder-desktop-blue.png\" alt=\"\"/>";
  // icons += "</figure>";

  icons += '<svg class="desktop-icon" data-icon="folder" viewBox="0 0 32 32" style="fill: #50bebf"><path d="M0 4 L0 28 L32 28 L32 8 L16 8 L12 4 z"></path></svg>'

  $(".desktop").append(icons);

  // Remove id="undefined"
  $(".not-selectable, .context-menu-submenu").removeAttr("id");

});