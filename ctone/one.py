import math
from json import dumps
from optparse import OptionParser
from cantools.util import log, cmd, output, read, write, error

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

def conv(fname, morphs, modname, bm):
	log("converting %s to stripset and %s"%(fname, bm and "bonemap" or "morphStack"), important=True)
	data = read(fname, isjson=True)
	if bm:
		bonemap(data, modname)
	else:
		morphTargets(data, morphs, modname)
	log("goodbye", important=True)

WIDTH = 128
HEIGHT = 64
MAX = 128
def vidstrip(fname, maxframes, color, threshold, downscale, crop):
	log("converting %s to video strip"%(fname,), important=True)
	oname = fname.split(".")[0]
	if crop: # w:h:x:y
		croppedname = "%s-cropped.mp4"%(oname,)
		log("cropping %s to %s"%(fname, croppedname))
		cmd('ffmpeg -i %s -filter:v "crop=%s" %s'%(fname, crop, croppedname))
		fname = croppedname
	if maxframes:
		fcount = int(maxframes)
		log("limiting output to %s frames"%(fcount,))
	else:
		fcount = int(output("ffprobe -v error -select_streams v:0 -show_entries stream=nb_frames -of default=nokey=1:noprint_wrappers=1 %s"%(fname,)))
		log("found %s frames"%(fcount,))
	w = min(fcount, MAX)
	h = int(math.ceil(float(fcount) / MAX)) # ugh py2
	chrobit = ""
	if color != "none":
		chrobit = "chromakey=%s:%s:0,"%(color, threshold)
	cmd('ffmpeg -i %s -frames 1 -vf "%sscale=%s:%s,tile=%sx%s" %s.png'%(fname,
		chrobit, WIDTH, HEIGHT, w, h, oname))
	log("converted video (%s) to %s frame image strip (%s.png - %sx%s)"%(fname,
		fcount, oname, w * WIDTH, h * HEIGHT))
	if downscale != 1:
		width = int(w * WIDTH / downscale)
		log("downsizing spritesheet x%s to %s width"%(downscale, width))
		cmd("convert -resize %sx %s.png %sx%s.png"%(width, oname, oname, downscale))
	log("goodbye", important=True)

def do():
	parser = OptionParser("ctone INPUT_FILE [--name=NAME] [--morphs=MORPHS]")
	parser.add_option("-n", "--name", dest="name", default="model",
		help="name of model file (default: model)")
	parser.add_option("-m", "--morphs", dest="morphs", default="morphs.one.head",
		help="full path of morph [base and stack] (default: morphs.one.head)")
	parser.add_option("-b", "--bonemap", action="store_true", dest="bonemap", default=False,
		help="generate a bonemap in the stripset; skip morphStack")
	parser.add_option("-v", "--vidstrip", action="store_true", dest="vidstrip", default=False,
		help="convert a short video clip into an image strip with transparency")
	parser.add_option("-f", "--frames", dest="frames", default=None,
		help="max frame count for --vidstrip mode (default: no limit))")
	parser.add_option("-c", "--color", dest="color", default="0x70de77",
		help="background color for for --vidstrip mode (default: 0x70de77))")
	parser.add_option("-t", "--threshold", dest="threshold", default="0.2",
		help="color threshold for --vidstrip mode (default: 0.2))")
	parser.add_option("-d", "--downscale", dest="downscale", default=1,
		help="downscale for --vidstrip mode (default: 1))")
	parser.add_option("-p", "--crop", dest="crop", default=None,
		help="crop for --vidstrip mode (default: None))")
	options, args = parser.parse_args()
	if not len(args):
		error("please provide an input file (json or video for -v)")
	if options.vidstrip:
		vidstrip(args[0], options.frames, options.color,
			options.threshold, int(options.downscale), options.crop)
	else:
		conv(args[0], options.morphs, options.name, options.bonemap)

if __name__ == "__main__":
	do()