from flask import Flask, send_from_directory, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from server.init_db import init_db
import os

init_db() # need to initialize the database first

app = Flask(__name__, static_url_path='', static_folder='build', template_folder="build")
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

from server.routes.routes import routes
app.register_blueprint(routes) # last case scenario, these blueprints are messing up the static files

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, use_reloader=True, port=os.environ.get('PORT', 5000))