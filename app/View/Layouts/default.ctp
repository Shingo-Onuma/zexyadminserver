<?php
/**
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
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'Administration - ZEXY');
?>
<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		<?php echo $cakeDescription ?>:
		<?php echo $title_for_layout; ?>
	</title>
	<?php if($title_for_layout == 'Errors'): ?>

	<?php else:?>
	<?php
		echo $this->Html->meta('icon');
		echo $this->fetch('meta');
		echo $this->Html->css(array(
			// '/css/extjs/resources/css/ext-all',
			'/css/extjs/resources/css/ext-all-neptune.css',
			'/css/extjs/resources/ext-theme-neptune/ext-theme-neptune-all.css',
		));
		
		echo $this->Html->script(array(
			'/js/extjs/source/ext-all',
			'/js/extjs/source/ext-theme-neptune.js',
			'/js/extjs/app/app',
		));
	?>
	<?php endif;?>
</head>
<body>
	<?php echo $this->fetch('content'); ?>
	<?php echo $this->element('sql_dump'); ?>
</body>
</html>
