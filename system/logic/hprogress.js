// based on hProgress by Rico Sta. Cruz

;(function (factory) {

	if (typeof module === "function") {
		module.exports = factory(this.jQuery || require("jquery"));
	} else {
		this.hProgress = factory(this.jQuery);
	}

})(function ($) {

	var hProgress = {};

	// hProgress.version = "0.1.2";

	var Settings = hProgress.settings = {
		minimum: 0.08,
		easing: "ease",
		positionUsing: "",
		speed: 200,
		trickle: true,
		trickleRate: 0.02,
		trickleSpeed: 800,
		showSpinner: true,
		template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
	};

	// Update configuration.
	// hProgress.configure({ minimum: 0.1 });

	hProgress.configure = function (options) {
		$.extend(Settings, options);
		return this;
	};

	// Last number

	hProgress.status = null;

	// Sets the progress bar status, where "n" is a number from "0.0" to "1.0".
	// hProgress.set(0.4);
	// hProgress.set(1.0);

	hProgress.set = function (n) {

		var started = hProgress.isStarted();

		n = clamp(n, Settings.minimum, 1);
		hProgress.status = (n === 1 ? null : n);

		var
		$progress = hProgress.render(!started),
		$bar = $progress.find('[role="bar"]'),
		speed = Settings.speed,
		ease = Settings.easing;

		$progress[0].offsetWidth; // Repaint

		$progress.queue(function (next) {

			// Set positionUsing if it hasn't already been set
			if (Settings.positionUsing === '') Settings.positionUsing = hProgress.getPositioningCSS();
			
			// Add transition
			$bar.css(barPositionCSS(n, speed, ease));

			if (n === 1) {
				// Fade out
				$progress.css({ transition: "none", opacity: 1 });
				$progress[0].offsetWidth; /* Repaint */

				setTimeout(function () {

					$progress.css({ transition: "all " + speed + "ms linear", opacity: 0 });

					setTimeout(function () {

						hProgress.remove();
						next();

					}, speed);

				}, speed);
			} else {
				setTimeout(next, speed);
			}

		});

		return this;

	};

	hProgress.isStarted = function () {
		return typeof hProgress.status === "number";
	};

	// Shows the progress bar.
	// This is the same as setting the status to 0%, except that it doesn't go backwards.
	// hProgress.start();

	hProgress.start = function () {

		if (!hProgress.status) hProgress.set(0);

		var work = function () {
			setTimeout(function () {

				if (!hProgress.status) return;
				hProgress.trickle();
				work();

			}, Settings.trickleSpeed);
		};

		if (Settings.trickle) work();

		return this;

	};

	// Hides the progress bar.
	// This is the *sort of* the same as setting the status to 100%, with the
	// difference being "done()" makes some placebo effect of some realistic motion.

	// hProgress.done();
	// If "true" is passed, it will show the progress bar even if its hidden.

	// hProgress.done(true);

	hProgress.done = function (force) {

		if (!force && !hProgress.status) return this;
		return hProgress.inc(0.3 + 0.5 * Math.random()).set(1);

	};

	// Increments by a random amount.

	hProgress.inc = function (amount) {

		var n = hProgress.status;

		if (!n) {
			return hProgress.start();
		} else {
			if (typeof amount !== "number") {
				amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
			}

			n = clamp(n + amount, 0, 0.994);
			return hProgress.set(n);
		}

	};

	hProgress.trickle = function () {
		return hProgress.inc(Math.random() * Settings.trickleRate);
	};

	// (Internal) renders the progress bar markup based on the "template" setting.

	hProgress.render = function (fromStart) {

		if (hProgress.isRendered()) return $("#hprogress");
		$("html").addClass("hprogress-busy");

		var $el = $('<div id="hprogress">')
			.html(Settings.template);

		var perc = fromStart ? "-100" : toBarPerc(hProgress.status || 0);

		$el.find('[role="bar"]').css({
			transition: "all 0 linear",
			transform: "translate3d(" + perc + "%,0,0)"
		});

		if (!Settings.showSpinner)
			$el.find('[role="spinner"]').remove();

		$el.appendTo(document.body);

		return $el;

	};

	// Removes the element. Opposite of render().

	hProgress.remove = function () {

		$("html").removeClass("hprogress-busy");
		$("#hprogress").remove();

	};

	// Checks if the progress bar is rendered.

	hProgress.isRendered = function () {
		return ($("#hprogress").length > 0);
	};

	// Determine which positioning CSS rule to use.

	hProgress.getPositioningCSS = function () {

		// Sniff on document.body.style
		var bodyStyle = document.body.style;

		// Sniff prefixes
		var vendorPrefix = ("WebkitTransform" in bodyStyle) ? "Webkit" :
											 ("MozTransform" in bodyStyle) ? "Moz" :
											 ("OTransform" in bodyStyle) ? "O" : "";

		if (vendorPrefix + "Perspective" in bodyStyle) {
			// Modern browsers with 3D support, e.g. Webkit, IE10
			return "translate3d";
		} else if (vendorPrefix + "Transform" in bodyStyle) {
			// Browsers without 3D support, e.g. IE9
			return "translate";
		} else {
			// Browsers without translate() support, e.g. IE7-8
			return "margin";
		}

	};

	// Helpers

	function clamp(n, min, max) {

		if (n < min) return min;
		if (n > max) return max;
		return n;

	}

	// (Internal) converts a percentage ("0..1") to a bar translateX percentage ("-100%..0%").

	function toBarPerc(n) {
		return (-1 + n) * 100;
	}

	// (Internal) returns the correct CSS for changing the bar's position given an n percentage, and speed and ease from Settings

	function barPositionCSS(n, speed, ease) {

		var barCSS;

		if (Settings.positionUsing === "translate3d") {
			barCSS = { transform: "translate3d(" + toBarPerc(n) + "%, 0, 0)" };
		} else if (Settings.positionUsing === "translate") {
			barCSS = { transform: "translate(" + toBarPerc(n) + "%, 0)" };
		} else {
			barCSS = { "margin-left": toBarPerc(n) + "%" };
		}

		barCSS.transition = "all " + speed + "ms "+ease;

		return barCSS;

	}

	return hProgress;

});
