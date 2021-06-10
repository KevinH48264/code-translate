from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='build/', template_folder="build", static_url_path='/')

CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

class Code():
    def __init__(self, text="", language="python"):
        self.text = text
        self.language = language

@app.route('/', methods=['GET'])
@app.route('/home')
def home():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e): # to prevent the server from returning 404 no found error
    return app.send_static_file('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    try:
        data = request.get_json()
        if data is None:
            return jsonify(**{'message': 'No data found'})
        print(data)

        if data:
            # code = Code(text=request.form['inputCode'], language)
            # return '<p>{}<p>'.format(data['inputCode'])
            return jsonify(**{'message': "SUCCESS", 'outputCode': 'Currently translating...'})
        return jsonify(**{'message': "This code translation cannot be currently supported."})
    except:
        print(request)
        return jsonify(**{'message': 'Translation was unsupported. :('})

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, use_reloader=False, port=os.environ.get('PORT', 5000))
    
# Example of how to jsonify many attributes
# return jsonify(**{'port_number': api_port_number,
#                 'api_name': api_name,
#                 'app_uuid': str(app_uuid)})