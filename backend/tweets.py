from flask import Blueprint, jsonify, request
import asyncio
from sqlalchemy.orm import subqueryload, joinedload
from backend.models import db, Tweet, Reply, Like
import requests
import json
from flask_jwt_extended import jwt_required

from flask_cors import CORS

tweets = Blueprint('tweets', __name__)

# Get one tweet with its replies


@tweets.route("/tweet/<id>", methods=["GET"])
@jwt_required
def get_a_tweet(id):

    model_tweet = Tweet.query.filter(Tweet.id == id).first()
    tweet = model_tweet.to_dict()
    tweet["user"] = model_tweet.user.to_safe_object()

    replies = []
    for reply in model_tweet.replies:
        reply_object = []
        print("----->", reply.users)
        # reply.user_id.to_safe_object()
        reply_object.append(reply.to_dict())
        reply_object.append(reply.users.to_safe_object())
        replies.append(reply_object)
    tweet["replies"] = replies

    return jsonify(tweet)


# Get all tweets for one user
@tweets.route("/user/<id>", methods=["GET"])
def get_user_tweets(id):

    model_tweets = Tweet.query.filter(Tweet.user_id == id).all()
    tweets = []
    for model_tweet in model_tweets:
        tweet = model_tweet.to_dict()
        tweet["user"] = model_tweet.user.to_safe_object()
        tweets.append(tweet)

    return jsonify(tweets)


# Get all all tweets joined with user data
@tweets.route("/", methods=["GET"])
def get_all_tweets():

    model_tweets = db.session.query(Tweet).options(joinedload("user")).all()
    tweets = []
    for model_tweet in model_tweets:
        tweet = model_tweet.to_dict()
        tweet["user"] = model_tweet.user.to_safe_object()
        tweets.append(tweet)

    return jsonify(tweets)


# Create a tweet
@tweets.route("/post", methods=["POST"])
def post_tweet():

    data = json.loads(request.data)
    tweet = Tweet(
        user_id=data["user_id"],
        content=data["content"],
        media=data["media"],
    )
    if tweet.content == "":
        return jsonify(empty='A tweet cannot be empty')
    db.session.add(tweet)
    db.session.commit()
    return jsonify(Goodjob='you posted to db')

# Create a tweet
# @tweets.route("/delete", methods=["GET", "POST", "DELETE"])
# @jwt_required
# def delete_tweet():
#     try:
#         data = request.get_json()
#         print('data===============>',data)
#         tweet = Tweet.query.filter(Tweet.id == int(data['tweetId'])).first()
#         replies = Reply.query.filter(Reply.tweet_id == int(data['tweetId'])).all()
#         likes = Like.query.filter(Like.tweet_id == int(data['tweetId'])).all()
#         print("made it to maps====================>")
#         try:
#             for reply in replies:
#                 db.session.delete(reply)
#         except:
#             return jsonify(Goodjob='failed at replies')
#         try: 
#             for like in likes:
#                 db.session.delete(like)
#         except:
#             return jsonify(Goodjob='failed at likes')
#         try:
#             db.session.delete(tweet)
#             db.session.commit()
#         except:
#             return jsonify(Goodjob='failed at tweets')
#         return jsonify(Goodjob='you deleted a tweet')
#     except Exception: 
#         return jsonify(message='failed to delete tweet')
#     return jsonify(Goodjob='you deleted a tweet')


@tweets.route("/delete", methods=["GET", "POST", "DELETE"])
@jwt_required
def delete_tweet():
    try:
        data = request.get_json()
        print('data===============>',data)
        tweet = Tweet.query.filter(Tweet.id == int(data['tweetId'])).first()
        db.session.delete(tweet)
        db.session.commit()
    except Exception: 
        return jsonify(message='failed to delete tweet')
    return jsonify(Goodjob='you deleted a tweet')
    




