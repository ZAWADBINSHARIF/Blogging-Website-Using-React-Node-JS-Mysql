CREATE DATABASE blogging_website;

USE blogging_website;

CREATE table users (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(50) not null, 
    email varchar(100) not null, 
    password varchar(255) not null, 
    img varchar(255)
);

CREATE TABLE `blogging_website`.`posts` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `title` VARCHAR(45) NOT NULL, 
    `desc` LONGTEXT NOT NULL, 
    `img` VARCHAR(255) NULL, 
    `category` VARCHAR(45), 
    `date` DATE NOT NULL, 
    `user_id` INT NOT NULL, 
    PRIMARY KEY (`id`), 
    INDEX `_idx` (`user_id` ASC) VISIBLE, 
    CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `blogging_website`.`users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);