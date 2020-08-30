from flask import Blueprint, jsonify
from starter_app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def index():
    response = User.query.all()
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('/:id')
def user_by_id():
    pass


@user_routes.route('/:id/following')
def followings_by_user():
    pass


@user_routes.route('/:id/followers')
def followers_by_user():
    pass
