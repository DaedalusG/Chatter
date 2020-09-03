from flask import Flask, render_template, redirect, jsonify, request
from flask_login import LoginManager
from flask_jwt_extended import (
    JWTManager,
    jwt_required,
    get_jwt_identity,
    get_raw_jwt,
    verify_jwt_in_request)  # noqa
from flask_cors import CORS


from config import Config
from models import db, User
from users import user
from seed import seed
from tweets import tweets
from auth import auth


app = Flask(__name__)
app.config.from_object(Config)
app.config["CORS_HEADER"] = "Content-Type"

CORS(app)
app.register_blueprint(user, url_prefix='/api/users')
app.register_blueprint(seed, url_prefix='/api/seed')
app.register_blueprint(tweets, url_prefix='/api/tweets')
app.register_blueprint(auth, url_prefix='/auth')

db.init_app(app)
jwt = JWTManager(app)


@app.route('/')
def slash():
    return jsonify(Notice='Please use /api route to access the api')


@app.route('/api', methods=['GET'])
@jwt_required
def api():
    user = get_jwt_identity()
    current_user = User.query.filter_by(email=user['email']).first()
    safe_user = current_user.to_safe_object()
    return jsonify(safe_user), 200


@app.route('/test/')
def test():
    print('test')
    users = db.session.query(User).all()
    print(users)
    return jsonify({'test1': 1, 'test2': 2})
