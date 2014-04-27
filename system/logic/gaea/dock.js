
	// gaea/dock.js
	// @IdeasNeverCease
	// ========================================================

	$(function () {

		$(".hikari-content-inner").append("<section id='taskbar' class='docked-top'></section>");

		var taskbarStuff = "";
		var subtaskbarStuff = "";

		taskbarStuff += "<div id=\"start\">";
		// taskbarStuff += "<button data-effect=\"left\">Start</button>";
		taskbarStuff += "<button data-effect=\"left\">";
		taskbarStuff += "<svg width=\"60\" height=\"61\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\">";
		taskbarStuff += "<g id=\"hikari-stars\">";
		taskbarStuff += "<path fill=\"#191919\" d=\"m29,14.56893c-8.65864,0.96175 -12.78187,6.04721 -14.01889,14.15628c-0.41218,-3.98584 -1.78658,-7.28424 -4.81066,-9.89566c-2.88621,-2.61142 -6.4594,-3.71105 -10.17045,-4.39801c1.5118,-0.13739 3.02361,-0.27527 4.39802,-0.82484c1.5118,-0.41218 2.74882,-1.09962 3.98583,-1.92399c1.23702,-0.96222 2.33664,-2.06185 3.16101,-3.29887c0.82483,-1.23702 1.5118,-2.61142 2.06185,-3.98584c0.54957,-1.37441 0.82436,-2.88621 1.09963,-4.39801c1.09914,8.65864 6.1846,13.05713 14.29367,14.56893z\" id=\"hikari-star-01\"/>";
		taskbarStuff += "<path fill=\"#191919\" d=\"m26.66337,6.47366c-1.72336,0.19111 -2.54393,1.20374 -2.79019,2.81775c-0.08225,-0.79345 -0.35561,-1.45 -0.95748,-1.96962c-0.57477,-0.5201 -1.28599,-0.73879 -2.02477,-0.87571c0.30094,-0.02709 0.60187,-0.05467 0.87571,-0.16401c0.30093,-0.08225 0.5472,-0.21917 0.79298,-0.38318c0.24626,-0.19159 0.46543,-0.41027 0.62944,-0.65654c0.16402,-0.24626 0.30094,-0.51962 0.41028,-0.79345c0.10934,-0.27337 0.16402,-0.5743 0.21916,-0.87523c0.21869,1.72336 1.23083,2.59906 2.84486,2.9z\" id=\"hikari-star-02\"/>";
		taskbarStuff += "<path fill=\"#191919\" d=\"m20.75355,1.86122c-0.69743,0.0775 -1.02974,0.4873 -1.12958,1.14051c-0.03328,-0.32138 -0.14404,-0.58714 -0.38746,-0.79727c-0.23248,-0.2106 -0.52057,-0.29903 -0.81961,-0.35466c0.12218,-0.01093 0.24389,-0.02186 0.35466,-0.06608c0.12171,-0.03328 0.22154,-0.0889 0.3209,-0.15498c0.09983,-0.07797 0.18826,-0.16639 0.25482,-0.26575c0.06656,-0.09984 0.1217,-0.21061 0.16592,-0.32139c0.04421,-0.11077 0.06656,-0.23247 0.0889,-0.35418c0.08843,0.69742 0.49823,1.0516 1.15145,1.17378z\" id=\"hikari-star-03\"/>";
		taskbarStuff += "</g>";
		taskbarStuff += "</svg>";
		taskbarStuff += "</button>";
		taskbarStuff += "</div>";

		taskbarStuff += "<ul id=\"running-apps\">";
		taskbarStuff += "</ul>";
		taskbarStuff += "<div class=\"user-avatar\">";
		taskbarStuff += "<img src=\"\" alt=\"\"/>";
		taskbarStuff += "</div>";
		taskbarStuff += "<div id=\"subtaskbar\">";
		taskbarStuff += "</div>";

		subtaskbarStuff += "<div id=\"weather\"></div>";
		subtaskbarStuff += "<div id=\"full-time\">";
		subtaskbarStuff += "<span id=\"full-date\"></span>";
		subtaskbarStuff += "<span id=\"time\"></span>";
		subtaskbarStuff += "</div>";

		$("#taskbar").append(taskbarStuff);
		$("#subtaskbar").append(subtaskbarStuff);

	});
