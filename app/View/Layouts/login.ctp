<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title><?php echo $title_for_layout; ?> - <?php echo __d('zexy', 'Zexy'); ?></title>
		<?php
		echo $this->Html->css(array(
			'/css/croogo-bootstrap',
			'/css/croogo-bootstrap-responsive',
		));
		// echo $this->Layout->js();
		echo $this->Html->script(array(
			'/js/html5',
		));

		echo $this->fetch('script');
		echo $this->fetch('css');
		?>
	</head>
	<body class="admin-login">
		<div id="wrap">

			<header class="navbar navbar-inverse navbar-fixed-top">
				<div class="navbar-inner">
					<div class="container-fluid"> <a href="#" class="brand"> Zexy Administration Login </a>
						<?php /* echo $this->Html->link(
							__d('croogo', 'Back to') . ' ' . Configure::read('Site.title'),
							'/',
							array('class' => 'brand')
						); */ ?>
					</div>
				</div>
			</header>

			<div id="push"></div>
			<div id="content-container" class="container-fluid">
				<div class="row-fluid">
					<div id="admin-login">
					<?php
						// echo $this->Layout->sessionFlash();
						echo $this->fetch('content');
					?>
					</div>
				</div>
			</div>

		</div>
		<?php //echo $this->element('Croogo.admin/footer'); ?>
	</body>
</html>