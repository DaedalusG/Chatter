from flask import Blueprint, jsonify, request
from sqlalchemy.orm import subqueryload, joinedload
from models import db, Tweet
import requests
import json
from flask_cors import CORS

tweets = Blueprint('tweets', __name__)

#Get all tweets for one user
@tweets.route("/user", methods=["GET"])
def get_user_tweets():

  user = request.args.get("kiwi")
  print("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", user)

  # tweets = Tweet.query.filter_by(user_id=1).all()

  # new_tweets = []
  # for tweet in tweets:
  #   new_tweet = tweet.to_dict()
  #   new_tweet["user"] = tweet.user.to_safe_object()
  #   new_tweets.append(new_tweet)

  return jsonify(tweetswithcommentszzzzz=user)


# Get all all tweets joined with user data
@tweets.route("/", methods=["GET"])
def get_all_tweets():
  tweets = db.session.query(Tweet).options(joinedload("user")).all()
  new_tweets = []
  for tweet in tweets:
    new_tweet = tweet.to_dict()
    new_tweet["user"] = tweet.user.to_safe_object()
    new_tweets.append(new_tweet)

  return jsonify(new_tweets)


# Create a tweet
@tweets.route("/post", methods=["POST"])
def post_tweet():

  data = json.loads(request.data)
  tweet = Tweet(
    user_id = data["user_id"],
    content = data["content"],
    )
  db.session.add(tweet)
  db.session.commit()

  return jsonify(Goodjob='you posted to db')