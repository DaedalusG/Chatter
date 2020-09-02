from flask import Blueprint, jsonify, request
from sqlalchemy.orm import subqueryload, joinedload
from models import db, Tweet
import requests

tweets= Blueprint('tweets', __name__)

@tweets.route("/", methods=["GET"])
def tweeter():
  tweets = db.session.query(Tweet).options(joinedload("user")).all()

  new_tweets = []
  for tweet in tweets:
    new_tweet = tweet.to_dict()
    new_tweet["user"] = tweet.user.to_safe_object()
    new_tweets.append(new_tweet)

  return jsonify(new_tweets)




