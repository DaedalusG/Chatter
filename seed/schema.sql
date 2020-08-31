CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) NOT NULL UNIQUE,
  hashedpassword VARCHAR(80) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  zipcode VARCHAR(50),
  pinnedtweets BOOLEAN,
  about VARCHAR(240),
  profilepic VARCHAR(240),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tweets (
  id SERIAL PRIMARY KEY,
  userid INTEGER,
  content VARCHAR(240),
  media VARCHAR(240),
  retweetid INTEGER,
  retweetcount INTEGER,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE replies (
  id SERIAL PRIMARY KEY,
  content VARCHAR(240),
  tweetid INTEGER,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);  

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  tweetid INTEGER,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE follows (
  following INTEGER,
  followedby INTEGER,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);