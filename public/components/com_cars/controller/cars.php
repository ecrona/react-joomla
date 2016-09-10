<?php

defined('_JEXEC') or die;

class CarsControllerCars extends CarsControllerJson
{
	public function getAll()
	{
		$json = JRequest::get('json');
		$model = $this->getModel('Cars');

		$this->json($model->getItems());
	}
}
