<?php 
class ZStatic extends AppModel {
	public $name = "ZStatic";

    public function afterSave($created, $options = array()) {
    	CakeLog::write('ZexyApp','ZStatic saved');
	    return true;
	}
}