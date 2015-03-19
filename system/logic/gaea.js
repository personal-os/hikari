(function () {

  "use strict";

  /////////////////////////////////////////////////////////////////////////////
  // Boot hikari
  /////////////////////////////////////////////////////////////////////////////

  function boot() {
    createVersionStamp();
    createContextMenu();
  }



  /////////////////////////////////////////////////////////////////////////////
  // Create context menu
  /////////////////////////////////////////////////////////////////////////////

  function createContextMenu() {
    $(document).on("contextmenu", function (e) {
      e.stopPropagation();
      e.preventDefault();

      var
        x = e.pageX,
        y = e.pageY,
        contextMenu = "",
        winWidth = $(window).width(),
        winHeight = $(window).height();

      // Desktop menu
      contextMenu += "<menu type='context' class='system__context-menu'>";
      contextMenu += "<li id='' class='system__context-menu__item'><a href='#'>New Folder</a></li>";
      contextMenu += "<hr/>";
      contextMenu += "<li id='' class='system__context-menu__item'><a href='#'>Get Info</a></li>";
      contextMenu += "<hr/>";
      contextMenu += "<li id='' class='system__context-menu__item'><a href='#'>Cut</a></li>";
      contextMenu += "<li id='' class='system__context-menu__item'><a href='#'>Copy</a></li>";
      contextMenu += "<li id='' class='system__context-menu__item'><a href='#'>Paste</a></li>";
      contextMenu += "<hr/>";
      contextMenu += "<li id='' class='system__context-menu__item'><a href='#'>Change Background</a></li>";
      contextMenu += "<li id='' class='system__context-menu__item'><a href='#'>Show View Options</a></li>";
      contextMenu += "</menu>";



      // Destroy any existing context menu
      $(".system__context-menu").remove();

      $(document).bind("click", function(e) {
        if ($(e.target).closest(".system__context-menu").length == 0) {
          $(".system__context-menu").remove(); // clicked outside menu
        }
      });



      // Show context menu
      $(".system__wrapper").append(contextMenu);



      // Position context menu
      // Menu not off screen to right
      if ((x + $(".system__context-menu").outerWidth()) > winWidth) {
        $(".system__context-menu").css("left", winWidth - $(".system__context-menu").outerWidth());
      } else {
        $(".system__context-menu").css("left", x);
      }

      // Menu not off screen at bottom
      if ((y + $(".system__context-menu").outerHeight()) > winHeight) {
        $(".system__context-menu").css("top", winHeight - $(".system__context-menu").outerHeight());
      } else {
        $(".system__context-menu").css("top", y);
      }



      return false;
    });
  }

  /////////////////////////////////////////////////////////////////////////////
  // Create version stamp
  /////////////////////////////////////////////////////////////////////////////

  function createVersionStamp() {
    var versionStamp = "";

    versionStamp += "<div ";
    versionStamp += "style='bottom: 1rem; right: 1rem; color: #fefefe; position: absolute; text-align: right; text-shadow: 0 1px #191919;'";
    versionStamp += ">";
    versionStamp += "hikari OS v 0.1.2<br/>";
    versionStamp += "&copy 2014-2015 <a href='mailto:tadashi@hikar.io' style='text-shadow: 0 1px #191919;'>Tadashi Hikari</a>";
    versionStamp += "</div>";

    $(".system__wrapper").append(versionStamp);
  }



  boot();

})();