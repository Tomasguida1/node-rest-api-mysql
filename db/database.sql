CREATE DATABASE IF NOT EXISTS pagina;

USE pagina;

CREATE TABLE posts (
    idposts INT (11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL
    PRIMARY KEY (idposts)
)

DESCRIBE posts;
INSERT INTO posts VALUES
(1, "gipe", "gipeto","gipeto.jpg");