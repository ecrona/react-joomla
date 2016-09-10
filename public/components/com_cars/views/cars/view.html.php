<?php

defined('_JEXEC') or die;

class CarsViewCars extends JViewLegacy
{
	public function display($tpl = null)
	{
		$doc = JFactory::getDocument();
		$doc->addScript(JUri::root() . 'components/com_cars/assets/build/bundle.js');

		return parent::display($tpl);
	}
}