from flask import Blueprint, request, jsonify, render_template
from server.inputProcessing.inputProcessing import createInputFile
from server.python2java.python2java import python2java
from server.outputProcessing.outputProcessing import readOutputFile
from server.modelsDB.FeedbackDB import Feedback, addFeedback, getFeedback
# from server.TransCoder.translate import FB_translate
from env import ROOT_DIR
from translate import FB_translate

# class Code():
#     def __init__(self, text="", language="python"):
#         self.text = text
#         self.language = language

routes = Blueprint('routes', __name__, static_folder='build/', template_folder="build/", static_url_path='/')

@routes.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@routes.errorhandler(404)
def not_found(e): # to prevent the server from returning 404 no found error
    return render_template('index.html')

""" Translate route
Request data provides: {'tTo': 'python', 'tFrom': 'java', 'inputCode': 'print("Hello world!")'}
"""
@routes.route('/translate', methods=['POST'])
def translate():
    try:
        data = request.get_json()
        if data is None:
            return jsonify(**{'message': 'No data found'})
        print(data)

        # LOOK INTO USING YIELD TO YIELD A LOADING OPTION
        if data:
            # Read arguments to function
            tTo = data['tTo']
            tFrom = data['tFrom']
            inputCode = data['inputCode']

            # Input file creation
            print("inputCode: ", inputCode)
            print("...Creating input file ...")
            inputFile = createInputFile(inputCode, tFrom) # create input file
            print("Input file created!")
            print(inputFile)

            # Output code creation
            print("...Creating output file...")
            if tFrom == tTo:
                outputFile = inputFile
            elif tFrom == 'python' and tTo == 'java':
                outputFile = python2java(inputFile)
            elif tFrom == 'java' and tTo == 'python':
                outputFile = FB_translate("model_1.pth", "java", "python") # FB_translate(model_path, src_lang, tgt_lang)
            print("Output file created!")

            outputCode = readOutputFile(outputFile) # convert outputfile to output code
            print("outputCode: ", outputCode)

            return jsonify(**{'message': "Success", 'outputCode': outputCode })
        return jsonify(**{'message': "This code translation is not currently supported."})
    except:
        print(request)
        return jsonify(**{'message': 'Translation was unsupported. :('})

""" Feedback route
Request data provides: { 'feedback': feedback }
"""
@routes.route('/feedback', methods=['POST'])
def feedback():
    try:
        data = request.get_json()
        if data is None:
            return jsonify(**{'message': 'No data found'})
        print(data)

        if data:
            feedback = data['feedback']
            newFeedback = Feedback(feedback)
            addFeedback(newFeedback)
            print("Added feedback in routes.py")

            feedback_from_db= getFeedback()
            all_feedback = []
            print("Received feedback in routes.py")
            for fb in feedback_from_db:
                all_feedback.append({"id": fb.id, "feedback": fb.data})
            print(all_feedback)

            return jsonify(**{'message': "Success", 'feedbackId': newFeedback.id})
        return jsonify(**{'message': "Somewhere went wrong when sending feedback!"})
    except:
        print(request)
        return jsonify(**{'message': 'Feedback was unsupported. :('})
