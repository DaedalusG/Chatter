from flask import Blueprint, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
import bcrypt

from models import db, User

auth = Blueprint('auth', __name__)


def set_password(password):
    hashed_password = bcrypt.hashpw(
        password.encode('utf-8'), bcrypt.gensalt())
    return hashed_password


def verify_password(password, hashed_password):
    # Return value could be made more sophisticated
    if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
        return True
    else:
        return False


@auth.route('/login', methods=['POST'])
def login():
    try:
        # Request objects are currently pseudocode
        username = request.username
        password = request.password

        if not username:
            return {'message': 'Username Required'}, 400
        elif not password:
            return {'message': 'Password Required'}, 400

        user = User.query.filter_by(username=username).first()
        if not user:
            return {'message': 'Username incorrect'}, 400

        passCheck = verify_password(password, user.hashed_password)
        if not passCheck:
            # Error needs handling decision
            return {'message': 'passCheck failed'}, 403
        else:
            auth_token = create_access_token(identity={"id": user.id})
            return jsonify(auth_token=auth_token), 200
    except Exception as ex:
        # Error needs handling decision
        return {'message': 'Login Failed'}, 500


@auth.route('/signup', methods=['POST'])
def signup():
    try:
        # Request objects are currently pseudocode
        username = request.username
        email = request.email
        password = request.password
        firstname = request.firstname
        lastname = request.lastname
        zipcode = int(request.zipcode)

        if not username:
            return {'message': 'Username Required'}, 400
        elif not email:
            return {'message': 'Email Required'}, 400
        elif not password:
            return {'message': 'Password Required'}, 400
        elif not firstname:
            return {'message': 'First Name Required'}, 400
        elif not lastname:
            return {'message': 'Last Name Required'}, 400
        elif not zipcode:
            return {'message': 'Zipcode Required'}, 400

        hashed_password = set_password(password)
        user = User(
            username=username,
            email=email,
            hashed_password=hashed_password,
            firstname=firstname,
            lastname=lastname,
            zipcode=zipcode,
        )
        db.session.add(order)
        db.session.commit()

        auth_token = create_access_token(identity={"id": user.id})
        # This return will need to be refined
        return jsonify(auth_token=auth_token), 200

    except Exception:
        return {'message': Exception}, 400
