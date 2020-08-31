from starter_app.models import User, Follow
from starter_app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    ian = User(lastname="WarrenGa", username='Ian', email='ian@aa.io', hashed_password='123', firstname='pump',
               zipcode='23798478',  about='i am', profile_pic='jfhskjdhfksjhf')
    javier = User(lastname="WarrenGb", username='Javier', email='javier@aa.io', hashed_password='133', firstname='pump',
                  zipcode='23798478',  about='i am', profile_pic='jfhskjdhfksjhf')
    dean = User(lastname="WarrenGc", username='Dean', email='dean@aa.io', hashed_password='143', firstname='pump',
                zipcode='23798478',  about='i am', profile_pic='jfhskjdhfksjhf')
    angela = User(lastname="WarrenGd", username='Angela', email='angela@aa.io', hashed_password='153', firstname='pump',
                  zipcode='23798478',  about='i am', profile_pic='jfhskjdhfksjhf')
    soonmi = User(lastname="WarrenGe", username='Soon-Mi', email='soonmi@aa.io', hashed_password='163', firstname='pump',
                  zipcode='23798478',  about='i am', profile_pic='jfhskjdhfksjhf')
    alissa = User(lastname="WarrenGf", username='Alissa', email='alissa@aa.io', hashed_password='173', firstname='pump',
                  zipcode='23798478',  about='i am', profile_pic='jfhskjdhfksjhf')
    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)

    db.session.commit()
