from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

follows = db.Table(
    "follows",
    db.Model.metadata,
    db.Column('following_id', db.Integer, db.ForeignKey("users.id"), primary_key=True),  # noqa
    db.Column('follower_id', db.Integer, db.ForeignKey("users.id"), primary_key=True)  # noqa
)


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.Binary(100), nullable=False, unique=True)
    first_name = db.Column(db.String(40), nullable=False, unique=True)
    last_name = db.Column(db.String(40), nullable=False, unique=True)
    zipcode = db.Column(db.Integer, nullable=False)
    pinned_tweet = db.Column(db.Integer)
    about = db.Column(db.Text)
    profile_pic = db.Column(db.String)

    tweets = db.relationship("Tweet", backref="user")
    retweets = db.relationship("Tweet", backref="user")
    likes = db.relationship("User", backref="user")
    replies = db.relationship("User", backref="user")

    following = db.relationship("User", secondary=follows, backref="user")
    followers = db.relationship("User", secondary=follows, backref="user")


class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # noqa

    likes = db.relationship('Like', backref='tweet')
    replies = db.relationship('Reply', backref='tweet')
    retweets = db.relationship('Retweet', backref='tweet')


class Retweet(db.Model):
    __tablename__ = 'retweets'

    id = db.Column(db.Integer, primary_key=True)
    tweet_id = db.Column(db.Integer, db.ForeignKey('tweets.id'))

    likes = db.relationship('Like', backref='retweet')


class Reply(db.Model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)  # noqa
    tweet_id = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable=False)  # noqa
    content = db.Column(db.Text, nullable=False)

    likes = db.relationship('Like', backref='reply')


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    liker = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    liked_tweet = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable=True)  # noqa
    liked_retweet = db.Column(db.Integer, db.ForeignKey("retweets.id"), nullable=True)  # noqa
    liked_reply = db.Column(db.Integer, db.ForeignKey("replies.id"), nullable=True)  # noqa


# class Follow(db.Model):
#     __tablename__ = 'follows'

#     id = db.Column(db.Integer, primary_key=True)
#     following_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)  # noqa
#     follower_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)  # noqa
