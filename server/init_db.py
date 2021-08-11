from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
import os

# FROM AMAZON RDS
# engine = create_engine('mysql://admin:codetranslate2021!@codetranslatedb.curusflffqkl.us-east-2.rds.amazonaws.com:3306/codetranslatedb')

# LOCAL
parent_directory = (os.path.dirname(os.path.abspath(os.path.join(__file__, os.pardir))))

if not os.path.exists(os.path.abspath(parent_directory + '/tmp')):
    os.makedirs(parent_directory + '/tmp')

engine = create_engine('sqlite:///tmp/feedback.db'.format(dir=parent_directory), convert_unicode=True)

db_session = scoped_session(sessionmaker(autocommit=False,
                                        autoflush=False,
                                        bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()

def init_db():
    # import database modules here for models
    import server.modelsDB.FeedbackDB
    Base.metadata.create_all(bind=engine)
