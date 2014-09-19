-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 18, 2014 at 09:25 PM
-- Server version: 5.5.37
-- PHP Version: 5.4.4-14+deb7u11

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `corpoelec`
--

-- --------------------------------------------------------

--
-- Table structure for table `consumos`
--

CREATE TABLE IF NOT EXISTS `consumos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `estado_id` int(11) NOT NULL,
  `dispositivo_id` int(11) NOT NULL,
  `monto` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `estado_id` (`estado_id`),
  KEY `dispositivo_id` (`dispositivo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `dispositivo`
--

CREATE TABLE IF NOT EXISTS `dispositivo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ids` varchar(10) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `sonido` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `dispositivo`
--

INSERT INTO `dispositivo` (`id`, `ids`, `nombre`, `sonido`) VALUES
(1, '', 'tv1', '800');

-- --------------------------------------------------------

--
-- Table structure for table `estado`
--

CREATE TABLE IF NOT EXISTS `estado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ids` varchar(2) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `maximo` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `estado`
--

INSERT INTO `estado` (`id`, `ids`, `nombre`, `maximo`) VALUES
(1, 'am', 'Amazonas', 700),
(2, 'an', 'Anzoategui', 600),
(3, 'ap', 'Apure', 7000),
(4, 'ar', 'Aragua', 600),
(5, 'ba', 'Barinas', 700),
(6, 'bo', 'Bolivar', 700);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `ID` int(7) unsigned NOT NULL AUTO_INCREMENT,
  `Username` varchar(15) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `Email` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`ID`, `Username`, `Password`, `Email`) VALUES
(1, 'corpoelec', 'ed8369db6f700f72031d07687fb64092', 'admin@corpoelec.gob.ve');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `consumos`
--
ALTER TABLE `consumos`
  ADD CONSTRAINT `consumos_ibfk_1` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`id`),
  ADD CONSTRAINT `consumos_ibfk_2` FOREIGN KEY (`dispositivo_id`) REFERENCES `dispositivo` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
