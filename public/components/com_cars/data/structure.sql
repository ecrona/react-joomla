CREATE TABLE `jos_cars` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`brand` VARCHAR(50) NOT NULL,
	`model` VARCHAR(50) NOT NULL,
	`description` TEXT NOT NULL,
	PRIMARY KEY (`id`)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;