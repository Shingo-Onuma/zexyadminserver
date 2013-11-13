<?php 
class ZUser extends AppModel {
	public $name = "ZUser";

	public $validate = array(
        'password' => array(
	        'rule'    => array('minLength', 8),
	        'allowEmpty' => false,
	        'message' => 'Password must be at least 8 characters long'
	    ),
	    'email' => array(
	    	'email' => array(
	    		'rule'       => 'email',
	            'message'    => 'Enter a valid email',
	            'allowEmpty' => false
	    	),
	    	'unique' => array(
	    		'rule'       => 'isUnique',
	            'message'    => 'This email has been taken',
	            'required' => 'create',
	            'allowEmpty' => false
	    	),
            
        ),
        'username' => array(
        	'minLength' => array(
        		'rule'    => array('minLength', 8),
		        'message' => 'User name must be at least 8 characters long',
	            'allowEmpty' => false,
        	),
            'unique' => array(
	    		'rule'       => 'isUnique',
	            'message'    => 'This username has been taken',
	            'required' => 'create',
	            'allowEmpty' => false
	    	),
        ),
        'fbid' => array(
            'checkExisted' => array(
				'rule' => 'checkFBUserExisted',
				'on' => 'create',
				'message' => 'The FBID user is existed on the system'
			)
        )
    );

    public function afterSave($created, $options = array()) {
    	CakeLog::write('ZexyApp','ZUser saved');
	    return true;
	}
}