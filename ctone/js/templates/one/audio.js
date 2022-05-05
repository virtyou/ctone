templates.one.audio = {};
var fb = {
	eel: "splash",
	fish: "splash",
	ant: "creep",
	spider: "creep",
	centipede: "creep",
	bee: 1,
	wasp: 1,
	cat: 5,
	chicken: 1,
	cow: 3,
	dog: 3,
	horse: 4,
	pig: 6,
	sheep: 4
};
var toaf = templates.one.audio.fauna = zero.core.Fauna.audio = {};
var setAud = function(f) {
	var aset = toaf[f] = [];
	var v = fb[f];
	if (isNaN(v))
		aset.push("/audio/one/fauna/" + v + ".mp3");
	else
		for (var i = 1; i <= v; i++)
			aset.push("/audio/one/fauna/" + f + "/" + i + ".mp3");
};
for (var f in fb)
	setAud(f);