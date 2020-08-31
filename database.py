from starter_app.models import User
from starter_app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()

    ian = User(username='Ian', email='ian@aa.io', hashedPassword='123', firstName='pump',
               zipcode='23798478', pinnedtweet=3, about='i am', profilepicture='jfhskjdhfksjhf')
    javier = User(username='Javier', email='javier@aa.io', hashedPassword='133', firstName='pump',
                  zipcode='23798478', pinnedtweet=3, about='i am', profilepicture='jfhskjdhfksjhf')
    dean = User(username='Dean', email='dean@aa.io', hashedPassword='143', firstName='pump',
                zipcode='23798478', pinnedtweet=3, about='i am', profilepicture='jfhskjdhfksjhf')
    angela = User(username='Angela', email='angela@aa.io', hashedPassword='153', firstName='pump',
                  zipcode='23798478', pinnedtweet=3, about='i am', profilepicture='jfhskjdhfksjhf')
    soonmi = User(username='Soon-Mi', email='soonmi@aa.io', hashedPassword='163', firstName='pump',
                  zipcode='23798478', pinnedtweet=3, about='i am', profilepicture='jfhskjdhfksjhf')
    alissa = User(username='Alissa', email='alissa@aa.io', hashedPassword='173', firstName='pump',
                  zipcode='23798478', pinnedtweet=3, about='i am', profilepicture='jfhskjdhfksjhf')

    db.session.add(ian)
    db.session.add(javier)
    db.session.add(dean)
    db.session.add(angela)
    db.session.add(soonmi)
    db.session.add(alissa)

    db.session.commit()
