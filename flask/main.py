from flask import Flask, render_template, redirect, jsonify, request
from flask_login import LoginManager
from flask_jwt_extended import JWTManager

from config import Config
from models import db, User, Tweet, Like, Follow, Reply
import requests
from faker import Faker


app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
jwt = JWTManager(app)


@app.route('/')
def welcome():
    return jsonify(Welcome='To The Chatter API')
