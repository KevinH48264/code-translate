from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from server.init_db import init_db
import os
import logger

init_db() # need to initialize the database first

app = Flask(__name__, static_folder='build/', template_folder="build/", static_url_path='/')
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.logger.debug('this is a DEBUG message')
app.logger.info('this is an INFO message')
app.logger.warning('this is a WARNING message')
app.logger.error('this is an ERROR message')
app.logger.critical('this is a CRITICAL msg')

from server.routes.routes import routes
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, use_reloader=True, port=os.environ.get('PORT', 5000))
else:
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)