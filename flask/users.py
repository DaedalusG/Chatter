from flask import Blueprint, jsonify, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token, get_jwt_identity)


from models import db, User
from auth import set_password, verify_password


user_routes = Blueprint('users', __name__, url_prefix='/users')


@user_routes.route('/')
def all_users():
    res = User.query.all()
    return {"users": [user.to_safe_object() for user in res]}


@user_routes.route('/<int:id>')
def user_by_id():
    user = User.query.get(int(id))
    return {"user": user.to_safe_object}



