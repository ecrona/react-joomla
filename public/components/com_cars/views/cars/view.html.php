<?php

defined('_JEXEC') or die;

class CarsViewCars extends JViewLegacy
{
	public function display($tpl = null)
	{
		$doc = JFactory::getDocument();

		return parent::display($tpl);
	}
}