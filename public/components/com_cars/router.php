<?php
/**
 * @package     Joomla.Site
 * @subpackage  com_search
 *
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;


function carsBuildRoute(&$query)
{
	$segments = array();
	if (isset($query['catid']))
	{
		$segments[] = $query['catid'];
		unset($query['catid']);
	};
	if (isset($query['id']))
	{
		$segments[] = $query['id'];
		unset($query['id']);
	};
	unset($query['view']);
	return $segments;
}

function carParseRoute($segments)
{
	$vars = array();
	$app = JFactory::getApplication();
	$menu = $app->getMenu();
	$item = $menu->getActive();
	// Count segments
	$count = count($segments);
	// Handle View and Identifier
	switch ($item->query['view'])
	{
		case 'categories':
			if ($count == 1)
			{
				$vars['view'] = 'category';
			}
			if ($count == 2)
			{
				$vars['view'] = 'article';
			}
			$id = explode(':', $segments[$count-1]);
			$vars['id'] = (int) $id[0];
			break;
		case 'category':
			$id = explode(':', $segments[$count-1]);
			$vars['id'] = (int) $id[0];
			$vars['view'] = 'article';
			break;
	}
	return $vars;
}
