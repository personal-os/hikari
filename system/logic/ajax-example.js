$(function () {

	$.ajax({
		type: "GET",
		url: "data/yourxml.xml",
		dataType: "xml",
		success: function (xml) {

			$(xml).find("testimonials").each(function () {

				xml_name = $(this).find("name").text();
				$("#slide").append("<li>" + xml_name + "</li>");

			});

			$(function () {

				mySlider = $("#slide").bxSlider({
					auto: true,
					controls: false
				});

				mySlider.reloadShow();

			});

		}
	});

});
