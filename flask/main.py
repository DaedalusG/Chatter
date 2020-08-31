from flask import Flask, render_template, redirect, jsonify, request
from flask_login import LoginManager

from config import Config
from models import db, User, Tweet, Like, Follow, Reply
import requests
from faker import Faker


app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
login = LoginManager()
login.init_app(app)
login.login_view = "session.login"


@app.route('/')
def welcome():
    return jsonify(Welcome='To The Chatter API')


@login.user_loader
def load_user(id):
    return User.query.get(int(id))
