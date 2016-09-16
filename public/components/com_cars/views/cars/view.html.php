<?php

defined('_JEXEC') or die;

class CarsViewCars extends JViewLegacy
{
	public function display($tpl = null)
	{
		$document = JFactory::getDocument();
		$document->addStylesheet(JUri::base() . 'components/com_cars/assets/style/style.css');

		return parent::display($tpl);
	}
}