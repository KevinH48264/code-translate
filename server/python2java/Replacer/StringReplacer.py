from server.python2java.Replacer.Replacer import Replacer

class StringReplacer(Replacer):
	def __init__(self):
		Replacer.__init__(self, 
			(r'([a-z]\w*)\s*=\s*"(.*)"\s*', r'String \1 = "\2";')
			)