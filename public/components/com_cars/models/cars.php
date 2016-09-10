<?php

defined('_JEXEC') or die('Restricted access');

class CarsModelCars extends JModelList
{
    public function getListQuery()
    {
        $db = JFactory::getDbo();
        $query = $db->getQuery(true);
        $query->from('#__cars');
        $query->select('*');

        return $query;
    }
}