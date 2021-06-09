from flask import Flask
import time
import os

from flask.helpers import send_from_directory

app = Flask(__name__, static_folder='react-flask-app/build', static_url_path='/')

@app.route('/')
@app.route('/home')
def home():
    # return send_from_directory(app.static_folder, 'index.html')
    return app.send_static_file('index.html')

@app.route('/time', methods=['GET'])
def get_current_time():
    return {'time': time.time()}

# @app.errorhandler(404)
# def not_found(e): # to prevent the server from returning 404 no found error
#     return app.send_static_file('index.html')

if __name__ == '__main__':
    # app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
    app.run(debug=False)