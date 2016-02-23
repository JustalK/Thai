<?php
	include 'model.php';
	include 'controller.php';
	include 'view.php';
	
	$model = new Model("imgs/unnamed.png",[new menu("test","test"),new menu("test2","test2")]);
	$controller = new Controller($model);
	$view = new View($model,$controller);
	echo $view;
?>