function setupAudio() {

	var type, a = document.createElement('audio');
	if (!a || !a.canPlayType) return;

	if (a.canPlayType('audio/mpeg') !== '') {
		type = 'mp3';
	} else if (a.canPlayType('audio/ogg') !== '') {
		type = 'ogg';
	} else if (a.canPlayType('audio/wav') !== '' || a.canPlayType('audio/x-wav') !== '') {
		type = 'wav';
	} else {
		return;
	}

	var v = 0.2;
	audios = new Array();
	a.setAttribute('preload', 'auto');
	a.setAttribute('autobuffer', 'autobuffer');
	a.setAttribute('src', 'sounds/modem1.' + type);
	audios.push(a);
	a.load();
	a.volume = v;
	a = document.createElement('audio');
	a.setAttribute('preload', 'auto');
	a.setAttribute('autobuffer', 'autobuffer');
	a.setAttribute('src', 'sounds/modem2.' + type);
	audios.push(a);
	a.load();
	a.volume = v;

}

setupAudio();