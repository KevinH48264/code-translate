if os.path.isfile(file):
		pythonFile = open(file)
		pythonCode = pythonFile.read()
		pythonFile.close()
