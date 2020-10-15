FROM nikolaik/python-nodejs:python3.8-nodejs14 as base

WORKDIR /var/www
COPY . .

# Install Python Dependencies
RUN ["pip", "install", "-r", "requirements.txt"]


# Build our React App
RUN ["npm", "install", "--prefix", "client"]
ENV REACT_APP_BASE_URL=https://chatter-clone.herokuapp.com/api
RUN ["npm", "run", "build", "--prefix", "client"]

# Set up AWS Bucket variables
ENV REACT_APP_BUCKETNAME='chatter-bucket-2'
ENV REACT_APP_REGION=us-west-2
ENV REACT_APP_ACCESSKEYID=AKIAIGJFVKHRRGFI5NIQ
ENV REACT_APP_SECRETACCESSKEY=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

# Move our react build for Flask to serve
# Use cp here because we're copying files inside our working directory, not from
# our host machine.
RUN ["cp", "-r", "client/build/", "backend/static"]
# RUN ["cp", "backend/static/favicon.ico", "backend/static/static"]
# RUN ["cp", "backend/static/glider.svg", "backend/static/static"]

# Setup Flask environment
ENV FLASK_APP=backend
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True
ENV SECRET_KEY=fsdfsfasdfsdf
ENV JWT_SECRET_KEY=dsfdsafdsafsadfsa

EXPOSE 8000

# Run flask environment
CMD gunicorn backend:app