from server.python2java.Replacer.Replacer import Replacer

class CommandReplacer(Replacer):
	def __init__(self):
		Replacer.__init__(self,
			[
				(r"print\s*\((.*)\)", r"System.out.println(\1);"),
			]
			)