<?php
 
defined('_JEXEC') or die();
 
class CarsTableCars extends JTable
{
	public function __construct($db)
	{
		parent::__construct( '#__cars', 'id', $db);
	}
}