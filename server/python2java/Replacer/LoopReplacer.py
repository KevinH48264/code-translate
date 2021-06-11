from server.python2java.Replacer.Replacer import Replacer

class LoopReplacer(Replacer):
	def __init__(self):
		Replacer.__init__(self,
			[
				(r'for\s+(\w+)\s+in\srange\((\d+),(\d+)\)\s*:', r'for(int \1 = \2; \1 < \3; \1++)'),
				(r'for\s+(\w+)\s+in\srange\((\d+),(\d+),([-+]{0,1})(\d+)\)\s*:', r'for(int \1 = \2; \1 < \3; \1 \4= \5)'),
			]
			)