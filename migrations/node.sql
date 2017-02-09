-- MySQL dump 10.15  Distrib 10.0.29-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: 127.0.0.1
-- ------------------------------------------------------
-- Server version	10.1.21-MariaDB-1~jessie

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CurrentRaceEntrants`
--

DROP TABLE IF EXISTS `CurrentRaceEntrants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CurrentRaceEntrants` (
  `race_id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `player_id` int(10) unsigned DEFAULT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `place` int(10) unsigned NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `comment` varchar(140) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  KEY `player_id` (`player_id`),
  CONSTRAINT `CurrentRaceEntrants_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `Players` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CurrentRaceEntrants`
--

LOCK TABLES `CurrentRaceEntrants` WRITE;
/*!40000 ALTER TABLE `CurrentRaceEntrants` DISABLE KEYS */;
/*!40000 ALTER TABLE `CurrentRaceEntrants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CurrentRaces`
--

DROP TABLE IF EXISTS `CurrentRaces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CurrentRaces` (
  `id` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `game_id` int(10) unsigned DEFAULT NULL,
  `goal` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `state` int(10) unsigned NOT NULL,
  `filename` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `game_id` (`game_id`),
  CONSTRAINT `CurrentRaces_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `Games` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CurrentRaces`
--

LOCK TABLES `CurrentRaces` WRITE;
/*!40000 ALTER TABLE `CurrentRaces` DISABLE KEYS */;
/*!40000 ALTER TABLE `CurrentRaces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `GameRatings`
--

DROP TABLE IF EXISTS `GameRatings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `GameRatings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `player_id` int(10) unsigned NOT NULL,
  `season_id` int(10) unsigned NOT NULL,
  `game_id` int(10) unsigned NOT NULL,
  `rating` double(12,9) NOT NULL,
  `mu` double(12,9) NOT NULL,
  `sigma` double(12,9) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `player_id` (`player_id`),
  KEY `season_id` (`season_id`),
  KEY `game_id` (`game_id`),
  CONSTRAINT `GameRatings_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `Players` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `GameRatings_ibfk_2` FOREIGN KEY (`season_id`) REFERENCES `Seasons` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `GameRatings_ibfk_3` FOREIGN KEY (`game_id`) REFERENCES `Games` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `GameRatings`
--

LOCK TABLES `GameRatings` WRITE;
/*!40000 ALTER TABLE `GameRatings` DISABLE KEYS */;
/*!40000 ALTER TABLE `GameRatings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Games`
--

DROP TABLE IF EXISTS `Games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Games` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Games`
--

LOCK TABLES `Games` WRITE;
/*!40000 ALTER TABLE `Games` DISABLE KEYS */;
INSERT INTO `Games` VALUES (1,'The Legend of Zelda: Ocarina of Time','oot',''),(2,'Super Mario 64','sm64',''),(3,'Super Mario World','smw','');
/*!40000 ALTER TABLE `Games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Goals`
--

DROP TABLE IF EXISTS `Goals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Goals` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `game_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `game_id` (`game_id`),
  CONSTRAINT `Goals_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `Games` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Goals`
--

LOCK TABLES `Goals` WRITE;
/*!40000 ALTER TABLE `Goals` DISABLE KEYS */;
/*!40000 ALTER TABLE `Goals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LegacyGameRankings`
--

DROP TABLE IF EXISTS `LegacyGameRankings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LegacyGameRankings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `game_id` int(10) unsigned NOT NULL,
  `popularityrank` int(10) unsigned NOT NULL,
  `popularity` decimal(12,6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `game_id` (`game_id`),
  CONSTRAINT `LegacyGameRankings_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `Games` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LegacyGameRankings`
--

LOCK TABLES `LegacyGameRankings` WRITE;
/*!40000 ALTER TABLE `LegacyGameRankings` DISABLE KEYS */;
INSERT INTO `LegacyGameRankings` VALUES (1,1,2,840.000000),(2,2,1,970.000000),(3,3,3,500.000000);
/*!40000 ALTER TABLE `LegacyGameRankings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Players`
--

DROP TABLE IF EXISTS `Players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Players` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `permissions` int(10) unsigned NOT NULL DEFAULT '0',
  `twitter` varchar(25) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `country` int(10) unsigned NOT NULL DEFAULT '1',
  `last_seen` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Players`
--

LOCK TABLES `Players` WRITE;
/*!40000 ALTER TABLE `Players` DISABLE KEYS */;
INSERT INTO `Players` VALUES (1,'sushi',0,'sushi','',1,'2017-02-02 07:18:04','2017-02-02 07:18:04','2017-02-02 07:18:04'),(2,'Sluip',0,'Sluip','',1,'2017-02-02 07:18:04','2017-02-02 07:18:04','2017-02-02 07:18:04'),(3,'Jiano',0,'Jiano','SunJiano',212,'2017-02-02 07:18:04','2017-02-02 07:18:04','2017-02-02 07:18:04');
/*!40000 ALTER TABLE `Players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RaceResults`
--

DROP TABLE IF EXISTS `RaceResults`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RaceResults` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `player_id` int(10) unsigned NOT NULL,
  `race_id` int(10) unsigned NOT NULL,
  `place` int(10) unsigned NOT NULL,
  `time` int(10) unsigned NOT NULL,
  `comment` varchar(140) COLLATE utf8mb4_unicode_ci NOT NULL,
  `old_rating` double(12,9) NOT NULL,
  `old_mu` double(12,9) NOT NULL,
  `old_sigma` double(12,9) NOT NULL,
  `new_rating` double(12,9) NOT NULL,
  `new_mu` double(12,9) NOT NULL,
  `new_sigma` double(12,9) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `player_id` (`player_id`),
  KEY `race_id` (`race_id`),
  CONSTRAINT `RaceResults_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `Players` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `RaceResults_ibfk_2` FOREIGN KEY (`race_id`) REFERENCES `Races` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RaceResults`
--

LOCK TABLES `RaceResults` WRITE;
/*!40000 ALTER TABLE `RaceResults` DISABLE KEYS */;
/*!40000 ALTER TABLE `RaceResults` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Races`
--

DROP TABLE IF EXISTS `Races`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Races` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `season_id` int(10) unsigned NOT NULL,
  `game_id` int(10) unsigned NOT NULL,
  `goal_id` int(10) unsigned NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `season_id` (`season_id`),
  KEY `game_id` (`game_id`),
  KEY `goal_id` (`goal_id`),
  CONSTRAINT `Races_ibfk_1` FOREIGN KEY (`season_id`) REFERENCES `Seasons` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `Races_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `Games` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `Races_ibfk_3` FOREIGN KEY (`goal_id`) REFERENCES `Goals` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Races`
--

LOCK TABLES `Races` WRITE;
/*!40000 ALTER TABLE `Races` DISABLE KEYS */;
/*!40000 ALTER TABLE `Races` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Seasons`
--

DROP TABLE IF EXISTS `Seasons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Seasons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `started` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ended` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Seasons`
--

LOCK TABLES `Seasons` WRITE;
/*!40000 ALTER TABLE `Seasons` DISABLE KEYS */;
/*!40000 ALTER TABLE `Seasons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `SequelizeMeta_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20170125032254-create-players.js'),('20170126045705-create-streams.js'),('20170129114001-create-games.js'),('20170129114917-create-goals.js'),('20170129115314-create-seasons.js'),('20170129123943-create-game-ratings.js'),('20170129124839-create-races.js'),('20170129125630-create-race-results.js'),('20170129131221-create-current-races.js'),('20170129132639-create-current-race-entrants.js'),('20170131070228-create-legacy-game-ranks.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Streams`
--

DROP TABLE IF EXISTS `Streams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Streams` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `player_id` int(10) unsigned NOT NULL,
  `api` enum('TWITCH','HITBOX','BEAM') COLLATE utf8mb4_unicode_ci NOT NULL,
  `channel` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `whitelisted` tinyint(1) NOT NULL DEFAULT '0',
  `blacklisted` tinyint(1) NOT NULL DEFAULT '0',
  `visibility` int(10) unsigned NOT NULL DEFAULT '2',
  `warnings` int(10) unsigned NOT NULL DEFAULT '0',
  `last_warning` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `player_id` (`player_id`),
  UNIQUE KEY `streams` (`api`,`channel`),
  CONSTRAINT `Streams_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `Players` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Streams`
--

LOCK TABLES `Streams` WRITE;
/*!40000 ALTER TABLE `Streams` DISABLE KEYS */;
INSERT INTO `Streams` VALUES (1,1,'TWITCH','sushi',0,0,2,0,'2017-02-02 07:18:04','2017-02-02 07:18:04','2017-02-02 07:18:04'),(2,2,'TWITCH','Sluip',0,0,2,0,'2017-02-02 07:18:04','2017-02-02 07:18:04','2017-02-02 07:18:04'),(3,3,'TWITCH','SunJiano',0,0,2,0,'2017-02-02 07:18:04','2017-02-02 07:18:04','2017-02-02 07:18:04');
/*!40000 ALTER TABLE `Streams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-07 23:11:26
