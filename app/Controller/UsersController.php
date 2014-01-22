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
class UsersController extends AppController {

/**
 * This controller does not use a model
 *
 * @var array
 */
	public $uses = array('ZUser');

	public $components = array(
		'RequestHandler',
		'Paginator'
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

		$this->_page 	= isset($this->request->query['page']) 	? $this->request->query['page'] 	: 1;
		$this->_limit 	= isset($this->request->query['limit']) ? $this->request->query['limit'] 	: 10;

		//print_r($this->request);

		if (isset($this->request->query['keywork'])) {
			$keywork = $this->request->query['keywork'];
			$this->Paginator->settings = array(
				'conditions' => array(
					'OR' => array(
						'username LIKE' => '%' . $keywork .'%',
						'email LIKE' => '%' . $keywork . '%'
					)
				),
		        'limit' => $this->_limit,
				'page' =>$this->_page
		    );
		    $count = (string)$this->ZUser->find('count', array(
		    	'conditions' => array(
					'OR' => array(
						'username LIKE' => '%' . $keywork .'%',
						'email LIKE' => '%' . $keywork . '%'
					)
				),
		    ));
		}else{
			$this->Paginator->settings = array(
		        'limit' => $this->_limit,
				'page' =>$this->_page
		    );
		    $count = (string)$this->ZUser->find('count');
		}

		

		$users = $this->paginate('ZUser');

		$results = array();
		foreach ($users as $key => $user) {
			# code...
			$results['data'][] = $user['ZUser'];
		}


		
		$results['total'] = $count;

		$this->set(compact('results'));
	}

	public function login(){
		$this->layout = 'login';
		$this->set('title_for_layout', __d('ZEXY', 'Log in'));
		if ($this->request->is('post')) {
			if ($this->Auth->login()) {
				$this->redirect($this->Auth->redirect());
			} else {
				$this->Session->setFlash($this->Auth->authError, 'default', array('class' => 'error'), 'auth');
				$this->redirect($this->Auth->loginAction);
			}
		}
		// die;
	}

	public function logout(){
		$this->layout = 'login';
		$this->Session->setFlash(__d('croogo', 'Log out successful.'), 'default', array('class' => 'success'));
		$this->redirect($this->Auth->logout());
	}

}
