from server.python2java.Replacer.Replacer import Replacer

class SyntaxReplacer(Replacer):
	def __init__(self):
		Replacer.__init__(self,
			(r"(.*\w)[^;{]$", r"\1 ;")
			)