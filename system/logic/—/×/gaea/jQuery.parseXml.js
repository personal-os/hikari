// Throw in a function to parse xml in IE8, hope it works...
// http://bugs.jquery.com/ticket/3143

jQuery.parseXml = function(xml) {

	if (jQuery.browser.msie) {
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async="false";

		xmlDoc.loadXML(xml);
		xml = xmlDoc;
	}

	return xml;

};
