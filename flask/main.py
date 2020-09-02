from flask import Flask, render_template, redirect, jsonify, request
from flask_login import LoginManager
from flask_jwt_extended import JWTManager
from flask_cors import CORS


from config import Config
from models import db
from seed import seed
from tweets import tweets


app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
app.register_blueprint(seed, url_prefix='/api/seed')
app.register_blueprint(tweets, url_prefix='/api/tweets')
db.init_app(app)
jwt = JWTManager(app)

@app.route('/')
def slash():
    return jsonify(Notice='Please use /api route to access the api')

@app.route('/api/')
def api():
    return jsonify(Welcome='To The Chatter API')


# @app.route("/api/tweets/", methods=["GET"])
# def tweets():
#   tweets = db.session.query(Tweet).options(joinedload("user")).all()

#   new_tweets = []
#   for tweet in tweets:
#     new_tweet = tweet.to_dict()
#     new_tweet["user"] = tweet.user.to_safe_object()
#     new_tweets.append(new_tweet)

#   return jsonify(new_tweets)
