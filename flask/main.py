from flask import Flask, render_template, redirect, jsonify, request
from config import Config
from models import db, User, Tweet, Like, Follow, Reply

app = Flask(__name__)
app.config.from_object(Config)
app.register_blueprint(seed, url_prefix='/api/seed')
db.init_app(app)


# add data to database
@app.route('/')
def welcome():
    return jsonify(Welcome='To The Chatter API')

