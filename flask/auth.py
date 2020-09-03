from flask import Blueprint, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
import bcrypt

from models import db, User

auth = Blueprint('auth', __name__)


def set_password(password):
    # hashed_password = bcrypt.hashpw(
    #     password.encode('utf-8'), bcrypt.gensalt())
    # return hashed_password.decode('utf-8')
    password = b"password"
    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    return hashed


def verify_password(password, hashed_password):
    # Return value could be made more sophisticated
    if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
        print("It Matches!")
        return True
    else:
        print("It Does not Match :(")
        return False

    # if bcrypt.checkpw(password.encode('utf-8'), hashed_password):
    #     return True
    # else:
    #     return False


@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data['email']
    password = data['password']
    user = User.query.filter_by(email=email).first()
    verify_password(password, user.hashed_password)

    # print("USER------>", user)
    # print("hashed------>", user.hashed_password)
    # print("password----->", password)
    # print("IS IT GOOD????", )
    return jsonify(Welcome='To The Chatter API')

    # try:
    #     username = data['username']
    #     password = data['password']

    #     if not username:
    #         return jsonify(message='Username Required'), 400
    #     elif not password:
    #         return jsonify(message='Password Required'), 400

    #     user = User.query.filter_by(username=username).first()
    #     if not user:
    #         return jsonify(message='Username incorrect'), 400

    #     print("USER--->", user)

    #     passCheck = verify_password(password, user.hashed_password)
    #     print("PASSCHECK--->", user)
    #     if not passCheck:
    #         # Error needs handling decision
    #         return jsonify(message='passCheck failed'), 403
    #     else:
    #         auth_token = create_access_token(identity={"email": user.email})
    #         return jsonify(auth_token=auth_token), 200
    # except Exception:
    #     return jsonify(message='Login Failed'), 408


@auth.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    try:
        username = data['username']
        email = data['email']
        firstname = data['firstname']
        lastname = data['lastname']
        zipcode = int(data['zipcode'])

        if not username:
            return jsonify(message="Username Required"), 400
        elif not email:
            return jsonify(message='Email Required'), 400
        elif not firstname:
            return jsonify(message='First Name Required'), 400
        elif not lastname:
            return jsonify(message='Last Name Required'), 400
        elif not zipcode:
            return jsonify(message='Zipcode Required'), 400

        try:
            hashed_password = set_password(data['password'])
        except:
            return jsonify(message='Password Required'), 400

        user = User(
            username=username,
            email=email,
            hashed_password=hashed_password,
            firstname=firstname,
            lastname=lastname,
            zipcode=zipcode,
        )
        db.session.add(user)
        db.session.commit()

        auth_token = create_access_token(identity={"email": user.email})
        return jsonify(auth_token=auth_token), 200

    except Exception:
        return jsonify({'message': "try failed"}), 409


# import bcrypt
# password = b"super secret password"
# # Hash a password for the first time, with a randomly-generated salt
# hashed = bcrypt.hashpw(password, bcrypt.gensalt())
# Check that an unhashed password matches one that has previously been
# # hashed
# if bcrypt.checkpw(password, hashed):
#     print("It Matches!")
# else:
#     print("It Does not Match :(")
