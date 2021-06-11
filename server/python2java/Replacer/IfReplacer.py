from server.python2java.Replacer.Replacer import Replacer

class IfReplacer(Replacer):
	def __init__(self):
		Replacer.__init__(self, 
			(r'if\s+(.*):', r'if (\1)')
			)		