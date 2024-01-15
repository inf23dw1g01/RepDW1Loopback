

DROP TABLE IF EXISTS `Atores`;

CREATE TABLE `Atores` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `date_of_birth` varchar(512) DEFAULT NULL,
  `filmeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


LOCK TABLES `Atores` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Diretores`;

CREATE TABLE `Diretores` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `date_of_birth` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


LOCK TABLES `Diretores` WRITE;

UNLOCK TABLES;



DROP TABLE IF EXISTS `Filme`;

CREATE TABLE `Filme` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `ano` varchar(512) DEFAULT NULL,
  `diretoresId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


LOCK TABLES `Filme` WRITE;

UNLOCK TABLES;



DROP TABLE IF EXISTS `Personagens`;

CREATE TABLE `Personagens` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `role` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


LOCK TABLES `Personagens` WRITE;

UNLOCK TABLES;

-- Adiciona valor em filmes
INSERT INTO Filme (name, description, ano) VALUES ('Star Wars: Revenge Of The Sith', 'Plot. Orbiting above Coruscant, Obi-Wan Kenobi and Anakin Skywalker lead a mission to rescue Supreme Chancellor Palpatine from the cyborg Separatist commander General Grievous. After infiltrating Grievous'' flagship, Obi-Wan and Anakin battle the Sith Lord Count Dooku, whom Anakin decapitates.', '2005');
INSERT INTO Filme (name, description, ano) VALUES ('Cars', 'Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida.', '2006');
INSERT INTO Diretores (name, date_of_birth) VALUES ('Quentin Tarantino', '1963');
INSERT INTO Diretores (name, date_of_birth) VALUES ('John Krasinski', '1979');
INSERT INTO Atores (name, date_of_birth) VALUES ('Paul Walker', '1973');
INSERT INTO Atores (name, date_of_birth) VALUES ('Owen Wilson', '1968');
INSERT INTO Personagens (name, role) VALUES ('Otavio', 'Leading Director');
INSERT INTO Personagens (name, role) VALUES ('Diogo', 'Actor');
INSERT INTO Personagens (name, role) VALUES ('Otavio', 'Secondary actor');
