templates.one.audio = {};

var audioMap = templates.one.audio.amap = {
	pool: {
		within: "within",
		without: "without",
		splash: "splash",
		swim: 2
	},
	fire: {
		crackle: "crackle"
	},
	particles: {
		rain: {
			collection: "air"
		}
	},
	person: {
		bump: "bump",
		thud: "thud",
		walk: "step",
		bwip: "bwip",
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
		sheep: 4
	}
};

var assets = templates.one.audio.assets = {};
assets.pool = zero.core.Pool.audio = {};
assets.fire = zero.core.Fire.audio = {};
assets.fauna = zero.core.Fauna.audio = {};
assets.person = zero.core.Person.audio = {};
assets.particles = zero.core.Particles.audio = {};

var audSet = function(collection, name, number, aset) {
	for (var i = 1; i <= number; i++)
		aset.push("/audio/one/" + collection + "/" + name + "/" + i + ".mp3");
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