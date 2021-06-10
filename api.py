from flask import Flask, send_from_directory
import time

app = Flask(__name__, static_folder='build/', template_folder="build", static_url_path='/')

@app.route('/', methods=['GET'])
@app.route('/home')
def home():
    return app.send_static_file('index.html')

@app.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}

@app.errorhandler(404)
def not_found(e): # to prevent the server from returning 404 no found error
    return app.send_static_file('index.html')