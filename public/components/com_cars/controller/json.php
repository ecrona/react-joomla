<?php

defined('_JEXEC') or die;

class CarsControllerJson extends JControllerLegacy
{
	public function json($data)
    {
        $app = JFactory::getApplication();
        $app->setHeader('Content-Type', 'application/json', true)
            ->sendHeaders();

        echo json_encode($data);

        $app->close();
    }
}
