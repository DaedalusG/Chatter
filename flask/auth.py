from flask import Blueprint, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
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
            return {'message': 'passCheck failed'}, 403
        else:
            auth_token = create_access_token(idenity={"id": user.id})
            return jsonify(auth_token=auth_token), 200
    except Exception as ex:
        # Error needs handling decision
        return {'message': 'Login Failed'}, 500


@auth_routes.route('/signup', methods=['POST'])
def signup():
    try:
        # Request objects are currently pseudocode
        userName = request.userName
        email = request.email
        password = request.password
        firstName = request.firstName
        lastName = request.lastName
        zipCode = int(request.zipCode)

        if not userName:
            return {'message': 'Username Required'}, 400
        elif not email:
            return {'message': 'Email Required'}, 400
        elif not password:
            return {'message': 'Password Required'}, 400
        elif not firstName:
            return {'message': 'First Name Required'}, 400
        elif not lastName:
            return {'message': 'Last Name Required'}, 400
        elif not zipCode:
            return {'message': 'Zipcode Required'}, 400

        hashedPassword = set_password(password)
        user = User(
            userName=userName,
            email=email,
            hashedPassword=hashedPassword,
            firstName=firstName,
            lastName=lastName,
            zipCode=zipCode,
        )
        db.session.add(order)
        db.session.commit()

        auth_token = create_access_token(idenity={"id": user.id})
        # This return will need to be refined
        return jsonify(auth_token=auth_token), 200

    except Exception:
        return {'message': Exception}, 400
