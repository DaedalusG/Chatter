from flask import Flask, render_template, redirect, jsonify, request
from flask_login import LoginManager
from flask_jwt_extended import JWTManager

from config import Config
from models import db
from seed import seed

app = Flask(__name__)
app.config.from_object(Config)
app.register_blueprint(seed, url_prefix='/api/seed')
db.init_app(app)
jwt = JWTManager(app)

@app.route('/')
def slash():
    return jsonify(Notice='Please use /api route to access the api')

@app.route('/api')
def api():
    return jsonify(Welcome='To The Chatter API')