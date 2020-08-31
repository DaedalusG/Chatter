from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.schema import Column
from sqlalchemy.types import Integer, Boolean, DateTime, String
import datetime

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True,)
    userName = Column(String(50), nullable=False, unique=True)
    email = Column(String(50), nullable=False, unique=True,)
    hashedPassword = Column(String(80), nullable=False,)
    firstName = Column(String(50), nullable=False,)
    lastName = Column(String(50), nullable=False,)
    zipCode = Column(Integer,)
    pinnedTweet = Column(Integer,)
    about = Column(String(240),)
    profilePic = Column(String(500),)

    @property
    def hashedPassword(self):
        return hashedPassword

    def to_safe_object(self):
        return {
            "id": self.id,
            "userName": self.userName,
            "email": self.email,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "zipCode": self.zipCode,
            "pinnedTweet": self.pinnedTweet,
            "about": self.about,
            "profilePic": self.profilePic
        }


class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = Column(Integer, primary_key=True,)
    userId = Column(Integer, nullable=False,)
    content = Column(String(240), nullable=False,)
    media = Column(String(240),)
    retweetId = Column(Integer,)


class Reply(db.Model):
    __tablename__ = 'replies'

    id = Column(Integer, primary_key=True,)
    content = Column(String(240), nullable=False,)
    tweetId = Column(Integer, nullable=False,)


class Like(db.Model):
    __tablename__ = 'likes'

    id = Column(Integer, primary_key=True,)
    tweetId = Column(Integer, nullable=False,)


class Follow(db.Model):
    __tablename__ = 'follows'

    id = Column(Integer, primary_key=True,)
    following = Column(Integer, nullable=False,)
    followedBy = Column(Integer, nullable=False,)
