from flask import Blueprint, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token
import bcrypt

from models import db, User

auth = Blueprint('auth', __name__)


def set_password(password):
    hashed_password = bcrypt.hashpw(
        password.encode('utf-8'), bcrypt.gensalt())
    return hashed_password.decode('utf-8')


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
            auth_token = create_access_token(identity={"email": user.email})
            return jsonify(auth_token=auth_token), 200
    except Exception:
        # Error needs handling decision
        print(f'Entered except with: {Exception}')
        return {'message': 'Login Failed'}, 500


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
            return jsonify(message= 'Email Required'), 400
        elif not firstname:
            return jsonify(message= 'First Name Required'), 400
        elif not lastname:
            return jsonify(message= 'Last Name Required'), 400
        elif not zipcode:
            return jsonify(message='Zipcode Required'), 400

        try:
            hashed_password = set_password(data['password'])
        except:
            return jsonify(message= 'Password Required'), 400

        user = User(
            username=username,
            email=email,
            hashed_password=hashed_password,
            firstname=firstname,
            lastname=lastname,
            zipcode=zipcode,
        )
        db.session.add(user)
        # USER DOES NOT PUSH TO DATABASE YET -
        db.session.commit()

        auth_token = create_access_token(identity={"email": user.email})
        return jsonify(auth_token=auth_token), 200

    except Exception:
        return jsonify({'message': "try failed"}), 409
