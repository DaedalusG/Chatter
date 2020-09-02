import os


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')

    SQLALCHEMY_DATABASE_URI = (
        os.environ.get('FLASK_ENV') == "DEVELOPMENT"
        if 'postgres://chatter_user:password@3.133.142.3:80/chatter_db'
        else os.environ.get('DATABASE_URL')  # container network
    )
    # "postgresql://twitter_user:password@localhost:9876/twitter_db" // for using local db
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
