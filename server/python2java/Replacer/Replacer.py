import re

class Replacer:
	__rules = []
	__used = 0

	def __init__(self, rule):
		if type(rule) == tuple:
			self.__rules.append(rule)
		else:
			self.__rules = rule

	def simpleReplace(self, input):
		for rule in self.__rules:
			input = re.sub(rule[0], rule[1], input, re.I)
		return input

	def replace(self, input):
		return self.simpleReplace(input)

	def getRules(self):
		return self.__rules

