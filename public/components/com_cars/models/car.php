<?php

defined('_JEXEC') or die('Restricted access');

class CarsModelCar extends JModelItem
{
    public function getTable($type = 'Cars', $prefix = 'CarsTable', $config = array())
    {
        JTable::addIncludePath(JPATH_BASE . '/components/com_cars/tables');
        return JTable::getInstance($type, $prefix, $config);
    }

    public function getAll()
    {
        $query = $this->getQuery(true);
        $query->from('#__cars');

        return $query;
    }
}