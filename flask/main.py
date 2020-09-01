from flask import Flask, render_template, redirect, jsonify, request
from flask_login import LoginManager
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from sqlalchemy.orm import subqueryload, joinedload

from config import Config
from models import db, Tweet
from seed import seed
from tweets import tweets

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)
app.register_blueprint(seed, url_prefix='/api/seed')
app.register_blueprint(tweets, url_prefix='/api/tweets/')
db.init_app(app)
jwt = JWTManager(app)

@app.route('/')
def slash():
    return jsonify(Notice='Please use /api route to access the api')

@app.route('/api')
def api():
    return jsonify(Welcome='To The Chatter API')
