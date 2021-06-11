import os

def readOutputFile(outputFile):
    outputCode = ""

    if os.path.isfile(outputFile):
        file = open(outputFile)
        outputCode = file.read()
        file.close()
        return outputCode
    else:
        print("Output file not found.")
        return False