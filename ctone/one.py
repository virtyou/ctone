from json import dumps
from optparse import OptionParser
from cantools.util import log, read, write, error

MST = """
%s.base = %s;

%s.stack = %s;
"""

def morphTargets(data, morphs, modname):
	log("generating morphStack", important=True)
	base = data["vertices"]
	log("found %s vertices"%(len(base),))
	stack = {}
	morphTargets = data.pop("morphTargets")
	log("building %s morphs"%(len(morphTargets),))
	for morph in morphTargets:
		stack[morph["name"]] = morph["vertices"]
	log("writing stripset: %s"%(modname,))
	write(data, "%s.js"%(modname,), isjson=True)
	log("writing morphStack: %s"%(morphs,))
	write(MST%(morphs, dumps(base), morphs,
		dumps(stack)), "%s.js"%(morphs.split(".")[-1],))

def bonemap(data, modname):
	log("generating bonemap", important=True)
	bones = data["bones"]
	bmap = {}
	for i in range(len(bones)):
		bone = bones[i]
		log("assessing %s"%(bone['name'],), 1)
		bpath = bone["name"].split("_")
		sub = bmap
		isarray = len(bpath[-1]) == 1
		for part in bpath:
			if isarray and part == bpath[-2] and part not in sub:
				sub[part] = []
			if part == bpath[-1]:
				if isarray:
					part = int(part)
					if part < len(sub):
						sub[part] = i
					else:
						while part > len(sub):
							sub.append(0)
						sub.append(i)
				else:
					sub[part] = i
			elif part not in sub:
				sub[part] = {}
			sub = sub[part]
	data["bonemap"] = bmap
	log("writing stripset: %s"%(modname,))
	write(data, "%s.js"%(modname,), isjson=True)

def conv(fname, morphs, modname, bonemap_mode):
	log("converting %s to stripset and morphStack"%(fname,), important=True)
	data = read(fname, isjson=True)
	if bonemap_mode:
		bonemap(data, modname)
	else:
		morphTargets(data, morphs, modname)
	log("goodbye", important=True)

def do():
	parser = OptionParser("ctone input_file.json [--name=NAME] [--morphs=MORPHS]")
	parser.add_option("-n", "--name", dest="name", default="model",
		help="name of model file (default: model)")
	parser.add_option("-m", "--morphs", dest="morphs", default="morphs.one.head",
		help="full path of morph [base and stack] (default: morphs.one.head)")
	parser.add_option("-b", "--bonemap", action="store_true", dest="bonemap", default=False,
		help="generate a bonemap in the stripset; skip morphStack")
	options, args = parser.parse_args()
	if not len(args):
		error("please provide an input file (json)")
	conv(args[0], options.morphs, options.name, options.bonemap)

if __name__ == "__main__":
	do()