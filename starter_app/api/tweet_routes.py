from flask import Blueprint, jsonify
from starter_app.models import Tweets

tweet_routes = Blueprint('tweets', __name__)

# --- Could handle main page tweet population
# @tweet_routes.route('/')
# def index():
#     pass


@tweet_routes.route('/:id')
def tweet_by_id():
    pass


@tweet_routes.route('/users/:userId')
def tweets_by_user():
    pass


@tweet_routes.route('/:id/replies')
def replies_by_tweet():
    pass


@tweet_routes.route('/:id/likes')
def likes_by_tweet():
    pass
