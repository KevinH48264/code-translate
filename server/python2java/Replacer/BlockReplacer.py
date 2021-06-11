from server.python2java.Replacer.Replacer import Replacer

class BlockReplacer(Replacer):
	def __init__(self):
		Replacer.__init__(self, 
			(r'((?:\n\s+.*)+)', r'{\n\1\n}')
			)
