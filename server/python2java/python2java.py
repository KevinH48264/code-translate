import os

import server.python2java.Replacer.IntegerReplacer as IntegerReplacer
import server.python2java.Replacer.DoubleReplacer as DoubleReplacer
import server.python2java.Replacer.BlockReplacer as BlockReplacer
import server.python2java.Replacer.LoopReplacer as LoopReplacer
import server.python2java.Replacer.SyntaxReplacer as SyntaxReplacer
import server.python2java.Replacer.CommandReplacer as CommandReplacer


def openClass(outFile, name):
	outFile.write("""public class %s {
	public static void main(String[] args){
		""" % name)

def closeClass(outFile):
	outFile.write("\t}\n}")

'''
Input: .python file
Process: This functions replaces appropriate python keywords and patterns with java keywords and patterns.
Output: .java file in an /output directory
'''
def python2java(file):
	replacers = []
	replacers.append(IntegerReplacer.IntegerReplacer())
	replacers.append(DoubleReplacer.DoubleReplacer())
	replacers.append(LoopReplacer.LoopReplacer())
	replacers.append(SyntaxReplacer.SyntaxReplacer())
	replacers.append(CommandReplacer.CommandReplacer())

	javaCode = ""

	if os.path.isfile(file):
		pythonFile = open(file)
		pythonCode = pythonFile.read()
		pythonFile.close()

		save_path = "server/outputProcessing/outputFiles"
		javaMainClass = "outputFile"
		completeName = os.path.join(save_path, javaMainClass) + ".java"

		javaFile = open(completeName, "w")
		javaFile.truncate(0) # clear the previous file contents
		openClass(javaFile, javaMainClass)

		javaCode = BlockReplacer.BlockReplacer().replace(pythonCode)
		for line in javaCode.split("\n"):
			for replacer in replacers:
				line = replacer.replace(line)
			javaFile.write(line + '\n')

		closeClass(javaFile)
		javaFile.close()
		return completeName
	else:
		print("Input file not found.")
		return False