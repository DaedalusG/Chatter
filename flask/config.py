import os

class Config:
  SECRET_KEY=os.environ.get('SECRET_KEY')
  SQLALCHEMY_TRACK_MODIFICATIONS=False
  SQLALCHEMY_DATABASE_URI="postgresql://twitter_user:password@localhost:9876/twitter_db"
    # os.environ.get('FLASK_ENV')=="DEVELOPMENT" 
    # if "postgresql://twitter_user:password@localhost:9876/twitter_db" 
    # else os.environ.get('DATABASE_URL') )
  SQLALCHEMY_ECHO=True