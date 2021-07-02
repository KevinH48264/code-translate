import sys
import os
from env import ROOT_DIR

# This function reates a inputFile file to translate from using the input code 'inputCode'
# This file is located in the main server directory so that it save path can access outputFiles directory
def createInputFile(inputCode, tFrom):
    save_path = "/server/outputProcessing/outputFiles/"
    if tFrom == "java":
        ext = ".java"
    elif tFrom == "python":
        ext = ".py"

    fileName = "inputFile" + ext
    completeName = ROOT_DIR + save_path + fileName

    inputFile = open(completeName, "w")
    inputFile.truncate(0) # clear the previous file contents
    for line in inputCode.split("\n"):
        inputFile.write(line + '\n')
    inputFile.close()

    return completeName # this gives the file location and name