DROP DATABASE IF EXISTS chirpy;

CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

  id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
  chirp varchar(255) NOT NULL,
	PRIMARY KEY (id)

);

INSERT INTO pets (name, chirp) VALUES ('Billiam', 'Chirp chirp derp derp');
INSERT INTO pets (name, chirp) VALUES ('Quincy', 'Larp darp darp');