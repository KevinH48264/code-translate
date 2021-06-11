from server.python2java.Replacer.Replacer import Replacer

class DoubleReplacer(Replacer):
	def __init__(self):
		Replacer.__init__(self, 
			(r'([a-z]\w*)\s*=\s*(\d*)\.(\d+)\s*', r'double \1 = \2.\3;')
			)


#TODO: .6 unterstuetzen