from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# follows = db.Table(
#     "follows",
#     db.Model.metadata,
#     db.Column('followingid', db.Integer,
#               db.ForeignKey("users.id"), primary_key=True),
#     db.Column('followerid', db.Integer,
#               db.ForeignKey("users.id"), primary_key=True)
# )


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashedpassword = db.Column(db.Binary(100), nullable=False, unique=True)
    firstname = db.Column(db.String(40), nullable=False, unique=True)
    lastname = db.Column(db.String(40), nullable=False, unique=True)
    zipcode = db.Column(db.Integer, nullable=False)
    pinnedtweet = db.Column(db.Integer)
    about = db.Column(db.Text)
    profilepic = db.Column(db.String)

    tweets = db.relationship("User", back_populates="tweets")
    likes = db.relationship("User", back_populates="likes")
    replies = db.relationship("User", back_populates="replies")


class Tweet(db.Model):
    __tablename__ = 'tweets'

    id = db.Column(db.Integer, primary_key=True)
    appuserid = db.Column(
        db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    retweetedtweetid = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates="users")


class Reply(db.Model):
    __tablename__ = 'replies'

    id = db.Column(db.Integer, primary_key=True)
    appuserid = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    tweetid = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable=False)
    content = db.Column(db.Text, nullable=False)

    user = db.relationship("User")
    tweet = db.relationship("Tweet", back_populates="tweets")


class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    appuserid = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    liketweetid = db.Column(db.Integer, db.ForeignKey("tweets.id"), nullable=False)  # noqa

    user = db.relationship("User")
    tweet = db.relationship("Tweet")


class Follow(db.Model):
    __tablename__ = 'follows'

    id = db.Column(db.Integer, primary_key=True)
    followingid = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)
    followerid = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False)

    follower = db.relationship("User", back_populates="follows")
