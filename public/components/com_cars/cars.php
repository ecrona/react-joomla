<?php

defined('_JEXEC') or die;

require_once(JPATH_BASE . '/components/com_cars/controller/json.php');

$controller = JControllerLegacy::getInstance('Cars');
$controller->execute(JFactory::getApplication()->input->get('task'));
$controller->redirect();