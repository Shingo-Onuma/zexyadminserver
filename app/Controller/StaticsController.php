<?php
/**
 * Static content controller.
 *
 * This file will render views from views/pages/
 *
 * PHP 5
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Controller
 * @since         CakePHP(tm) v 0.2.9
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
// App::uses('AppController', 'Controller');

/**
 * Static content controller
 *
 * Override this controller by placing a copy in controllers directory of an application
 *
 * @package       app.Controller
 * @link http://book.cakephp.org/2.0/en/controllers/pages-controller.html
 */
class StaticsController extends AppController {

/**
 * This controller does not use a model
 *
 * @var array
 */
	public $uses = array('ZStatic');

	public $components = array(
		'RequestHandler'
	);

/**
 * Displays a view
 *
 * @param mixed What page to display
 * @return void
 * @throws NotFoundException When the view file could not be found
 *	or MissingViewException in debug mode.
 */
	public function index() {
		$this->RequestHandler->respondAs('application/json');
		$this->layout = 'ajax';

		$statics = $this->ZStatic->find('all');

		$results = array();
		foreach ($statics as $key => $static) {
			$results['data'][] = $static['ZStatic'];
		}

		$this->set(compact('results'));
	}

	public function edit(){
		$save_info = true;
		$save_contact = true;
		if(isset($this->request->data['info'])){
			$save_info = $this->ZStatic->save($this->request->data['info']);
		}

		if(isset($this->request->data['contact'])){
			$save_contact = $this->ZStatic->save($this->request->data['contact']);
		}

		if(!$save_info || !$save_contact){
			$results = array(
				'success' => false,
			);
		}else{
			$results = array(
				'success' => true,
			);
		}
		
		$this->set(compact('results'));

	}

}
