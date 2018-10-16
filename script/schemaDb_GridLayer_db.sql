--
-- Database: `gridlayer_db`
--

CREATE DATABASE IF NOT EXISTS `gridlayer_db`;
USE `gridlayer_db`;


-- ENTITIES

--
-- Struttura della tabella `grid`
--

CREATE TABLE IF NOT EXISTS `grid` (
	`grid_id` numeric  NOT NULL UNIQUE,
	`grid_name` varchar(40) ,
	`grid_port` numeric ,
	`grid_trustkey` varchar(40) ,
	`grid_uid` varchar(40) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);






