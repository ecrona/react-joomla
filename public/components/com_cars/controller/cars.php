<?php

defined('_JEXEC') or die;

class CarsControllerCars extends CarsControllerJson
{
	public function getAll()
	{
		$model = $this->getModel('Cars');
		$this->json($model->getItems());
	}

	public function getSingle()
	{
		$model = $this->getModel('Car');
		$input = JFactory::getApplication()->input;

		$this->json($model->getSingle($input->get('id')));
	}

	public function create()
	{
		$model = $this->getModel('Car');
		$json  = JFactory::getApplication()->input->json;

		$this->json($model->create([
			'brand' => $json->get('brand'),
			'model' => $json->get('model'),
			'description' => $json->get('description')
		]));
	}

	public function update()
	{
		$model = $this->getModel('Car');
		$input = JFactory::getApplication()->input;
		$json  = $input->json;

		$this->json($model->update($input->get('id'), [
			'brand' => $json->get('brand'),
			'model' => $json->get('model'),
			'description' => $json->get('description')
		]));
	}

	public function delete()
	{
		$model = $this->getModel('Car');
		$input = JFactory::getApplication()->input;

		$this->json($model->delete($input->get('id')));
	}
}
