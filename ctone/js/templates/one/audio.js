templates.one.audio = {};

var audioMap = templates.one.audio.amap = {
	appliance: {
		click: "click",
		button: "button",
		elevator: "elevator",
		lever: "lever",
		slide: "slide",
		squish: "squish",
		swing: "swing",
		switch: "switch",
		whoff: 2,
		whon: 2,
		zap: 5
	},
	pool: {
		within: "within",
		without: "without",
		splash: "splash",
		swim: 2
	},
	fire: {
		crackle: "crackle",
		lighter: "lighter"
	},
	particles: {
		rain: {
			collection: "air"
		}
	},
	ux: {
		tada: "tada",
		smash: "smash",
		blipon: "blipon",
		blipoff: "blipoff",
		airhorn: "airhorn",
		confetti: "confetti"
	},
	person: {
		walk: "step",
		bump: "bump",
		thud: "thud",
		glug: "glug",
		splat: "splat",
		whoosh: "whoosh",
		wood: 4,
		hard: 8,
		rug: 11,
		pud: 9,
		swim: {
			number: 2,
			collection: "pool"
		},
		splash: {
			collection: "pool"
		},
		wind: {
			collection: "air"
		},
		whoosh: {
			number: 2,
			collection: "air"
		}
	},
	fauna: {
		eel: {
			number: 2,
			name: "swim",
			collection: "pool"
		},
		fish: {
			number: 2,
			name: "swim",
			collection: "pool"
		},
		ant: "creep",
		spider: "creep",
		arachnid: "creep",
		centipede: "creep",
		bird: 3,
		bee: 1,
		wasp: 1,
		cat: 5,
		chicken: 1,
		cow: 3,
		dog: 3,
		horse: 4,
		pig: 6,
		sheep: 4,
		wolf: 2,
		dragon: 4
	}
};

var assets = templates.one.audio.assets = {};
assets.ux = zero.core.audio.ux.audio = {};
assets.pool = zero.core.Pool.audio = {};
assets.fire = zero.core.Fire.audio = {};
assets.fauna = zero.core.Fauna.audio = {};
assets.person = zero.core.Person.audio = {};
assets.particles = zero.core.Particles.audio = {};
assets.appliance = zero.core.Appliance.audio = {};

var audLink = function(collection, setname, audname) {
	return "/audio/one/" + collection + "/" + setname + "/" + audname + ".mp3";
};

var audSet = function(collection, name, number, aset) {
	for (var i = 1; i <= number; i++)
		aset.push(audLink(collection, name, i));
};

var setAud = function(collection, sound) {
	var aset = assets[collection][sound] = [],
		v = audioMap[collection][sound];
	if (typeof v == "string")
		aset.push("/audio/one/" + collection + "/" + v + ".mp3");
	else if (!isNaN(v))
		audSet(collection, sound, v, aset);
	else if (v.number)
		audSet(v.collection, v.name || sound, v.number, aset);
	else
		aset.push("/audio/one/" + v.collection + "/" + (v.name || sound) + ".mp3");
};

for (var collection in audioMap)
	for (var sound in audioMap[collection])
		setAud(collection, sound);

for (var pace of ["walk", "gallop"])
	assets.fauna.horse[pace] = audLink("fauna", "horse", pace);