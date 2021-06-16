from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('mysql://admin:codetranslate2021!@codetranslatedb.curusflffqkl.us-east-2.rds.amazonaws.com:3306/codetranslatedb')
db_session = scoped_session(sessionmaker(autocommit=False,
                                        autoflush=False,
                                        bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()

def init_db():
    # import database modules here for models
    import server.modelsDB.FeedbackDB
    Base.metadata.create_all(bind=engine)
