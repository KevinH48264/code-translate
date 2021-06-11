from server.python2java.Replacer.Replacer import Replacer

class IntegerReplacer(Replacer):
	def __init__(self):
		Replacer.__init__(self, [(r'([a-z]\w*)\s*=\s*(\d+)\s*$', r'int \1 = \2;')])
