-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2017 at 05:01 PM
-- Server version: 5.6.17
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `employee`
--

-- --------------------------------------------------------

--
-- Table structure for table `emp_details`
--

CREATE TABLE IF NOT EXISTS `emp_details` (
  `emp_id` int(255) NOT NULL AUTO_INCREMENT,
  `emp_name` varchar(255) NOT NULL,
  `emp_email` varchar(255) NOT NULL,
  `emp_gender` varchar(255) NOT NULL,
  `emp_address` varchar(255) NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `emp_details`
--

INSERT INTO `emp_details` (`emp_id`, `emp_name`, `emp_email`, `emp_gender`, `emp_address`) VALUES
(1, 'swapnil', 'swapnil@mailinator.com', 'male', '45th d'),
(2, 'Mark', 'Mark@gmail.com', 'male', 'Canada'),
(3, 'Sachin', 'sachin05@gmail.com', 'male', 'India'),
(4, 'Rachel', 'rachel1221@outlook.com', 'female', 'Australia'),
(22, 'jama', 'jama@mailinator.com', '', ''),
(23, 'jama2', 'jama@mailinator.co.in', '', '5thy'),
(24, '', '', '', ''),
(25, 'gaga', 'gaga@mailinator.com', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
