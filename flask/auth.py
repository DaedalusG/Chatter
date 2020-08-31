from flask import Blueprint, request
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token, get_jwt_identity)
import bcrypt

from models import db, User

auth_routes = Blueprint('auth', __name__, url_prefix='/auth')


def set_password(password):
    hashedPassword = bcrypt.hashpw(
        password.encode('utf-8'), bcrypt.gensalt())
    return hashedPassword


def verify_password(password, hashedPassword):
    # Return value could be made more sophisticated
    if bcrypt.checkpw(password.encode('utf-8'), hashedPassword):
        return True
    else:
        return False


@auth_routes.route('/login', methods=['POST'])
def login():
    try:
        # Request objects are currently pseudocode
        userName = request.userName
        password = request.password

        if not userName:
            return {'message': 'Username Required'}, 400
        elif not password:
            return {'message': 'Password Required'}, 400

        user = User.query.filter_by(username=userName).first()
        if not user:
            return {'message': 'Username incorrect'}, 400

        passCheck = verify_password(password, user.hashedPassword)
        if not passCheck:
            # Error needs handling decision
            return {'message': 'passCheck failed'}, 500
        else:
            auth_token = create_access_token(idenity={"email": user.email})
            return {"auth_token"}
    except Exception as ex:
        # Error needs handling decision
        return {'message': 'Login Failed'}


@auth_routes.route('/signup', methods=['POST'])
def signup():
    try:
        # Request objects are currently pseudocode
        userName = request.userName
        password = request.password

