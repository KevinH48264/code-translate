from flask import Flask, send_from_directory, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from server.inputProcessing.inputProcessing import createInputFile
from server.python2java.python2java import python2java
from server.outputProcessing.outputProcessing import readOutputFile
import os
import pymysql

# pymysql.connect('code-translate-db.curusflffqkl.us-east-2.rds.amazonaws.com', 'admin', 'codetranslate2021!')
SQLALCHEMY_DATABASE_URI = pymysql.connect(host='code-translate-db.curusflffqkl.us-east-2.rds.amazonaws.com',
port=3306,
user='admin',
password='codetranslate2021!')


app = Flask(__name__, static_folder='build/', template_folder="build", static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:codetranslate2021!@code-translate-db.curusflffqkl.us-east-2.rds.amazonaws.com:3306'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # just to prevent an warning thrown in terminal
db = SQLAlchemy(app)

CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

class Feedback(db.Model):
    __tablename__ = 'feedback'
    # name, type, primary_key
    id = db.Column('id', db.Integer, primary_key=True)
    data = db.Column('data', db.Unicode)

class Code():
    def __init__(self, text="", language="python"):
        self.text = text
        self.language = language

@app.route('/', methods=['GET'])
def home():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e): # to prevent the server from returning 404 no found error
    return app.send_static_file('index.html')

# example data: {'tTo': 'python', 'tFrom': 'java', 'inputCode': 'print("Hello world!")'}
@app.route('/translate', methods=['POST'])
def translate():
    try:
        data = request.get_json()
        if data is None:
            return jsonify(**{'message': 'No data found'})
        print(data)

        if data:
            tTo = data['tTo']
            tFrom = data['tFrom']
            inputCode = data['inputCode']

            print("inputCode: ", inputCode)
            print("...Creating input file ...")
            inputFile = createInputFile(inputCode, tFrom) # create input file

            if tFrom == 'python' and tTo == 'java':
                print("...Creating output file...")
                outputFile = python2java(inputFile)

            outputCode = readOutputFile(outputFile) # convert outputfile to output code
            print("outputCode: ", outputCode)

            return jsonify(**{'message': "Success", 'outputCode': outputCode})
        return jsonify(**{'message': "This code translation is not currently supported."})
    except:
        print(request)
        return jsonify(**{'message': 'Translation was unsupported. :('})

def create_app():
    db.create_all()
    return

if __name__ == '__main__':
    db.create_all()
    app.run(host='0.0.0.0', debug=True, use_reloader=True, port=os.environ.get('PORT', 5000))