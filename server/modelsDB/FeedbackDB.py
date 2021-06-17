from sqlalchemy import Column, Integer, String, Boolean
from random import randint
from server.init_db import Base, db_session

class Feedback(Base):
    __tablename__ = 'feedback'
    # name, type, primary_key
    id = Column('id', Integer, primary_key=True)
    data = Column('data', String(64), unique=False, nullable=False)

    def __init__(self, data):
        self.data = data

def addFeedback(feedback):
    if feedback:
        db_session.add(feedback)
        db_session.commit()
        print("Added Feedback to DB")

def getFeedback():
    print("Getting Feedback from DB")
    return Feedback.query.all()