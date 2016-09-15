<?php

defined('_JEXEC') or die('Restricted access');

class CarsModelCar extends JModelItem
{
    private function validate($data)
    {
        return isset($data['brand']) && is_string($data['brand'])
            && isset($data['model']) && is_string($data['model'])
            && isset($data['color']) && is_string($data['color'])
            && strlen($data['brand']) <= 50
            && strlen($data['model']) <= 50
            && strlen($data['color']) <= 50;
    }

    private function exists($id)
    {
        if (intval($id) <= 0) {
            return false;
        }

        $table = $this->getTable();
        $table->load($id);
        return $table->get('id') == $id;
    }

    public function getTable($type = 'Cars', $prefix = 'CarsTable', $config = array())
    {
        JTable::addIncludePath(JPATH_BASE . '/components/com_cars/tables');
        return JTable::getInstance($type, $prefix, $config);
    }

    public function getSingle($id)
    {
        $table = $this->getTable();
        $table->load($id);
        return $table->getProperties();
    }

    public function create($data)
    {
        if (!$this->validate($data)) {
            return false;
        }

        $table = $this->getTable();
        $table->set('brand', $data['brand']);
        $table->set('model', $data['model']);
        $table->set('color', $data['color']);
        $table->store();

        return $table->getProperties();
    }

    public function update($id, $data)
    {
        if (!$this->validate($data) 
         || !$this->exists($id)) {
            return false;
        }

        $table = $this->getTable();
        $table->set('id', $id);
        $table->set('brand', $data['brand']);
        $table->set('model', $data['model']);
        $table->set('color', $data['color']);
        $table->store();

        return $table->getProperties();
    }

    public function delete($id)
    {
        $table = $this->getTable();
        $table->delete($id);
        return true;
    }
}