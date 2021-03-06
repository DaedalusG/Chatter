from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from backend.models import db, Reply


replies = Blueprint('replies', __name__)


@replies.route('/', methods=["POST"])
@jwt_required
def post_reply():

    data = request.get_json()
    reply = Reply(
        user_id=data["user_id"],
        tweet_id=data["tweet_id"],
        content=data["reply"],
        media=data["media"],
    )
    db.session.add(reply)
    db.session.commit()

    return jsonify(Confirm='Reply submitted')


# get count of all replies for one tweet
@replies.route('/<id>')
@jwt_required
def replies_by_id(id):
    replies = Reply.query.filter(Reply.tweet_id == id).count()
    print("replies=====================>", jsonify(count=replies))
    return jsonify(count=replies)
