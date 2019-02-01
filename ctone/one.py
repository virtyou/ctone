from json import dumps
from optparse import OptionParser
from cantools.util import log, read, write, error

MST = """
%s.base = %s;

%s.stack = %s;
"""

def conv(fname, morphs, modname):
	log("converting %s to stripset and morphStack"%(fname,), important=True)
	data = read(fname, isjson=True)
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
	log("goodbye", important=True)

def do():
	parser = OptionParser("ctone input_file.json [--name=NAME] [--morphs=MORPHS]")
	parser.add_option("-n", "--name", dest="name", default="model",
		help="name of model file (default: model)")
	parser.add_option("-m", "--morphs", dest="morphs", default="morphs.one.head",
		help="full path of morph [base and stack] (default: morphs.one.head)")
	options, args = parser.parse_args()
	if not len(args):
		error("please provide an input file (json)")
	conv(args[0], options.morphs, options.name)

if __name__ == "__main__":
	do()