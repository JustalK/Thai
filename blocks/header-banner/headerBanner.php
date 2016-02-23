<?php
	include 'model.php';
	include 'controller.php';
	include 'view.php';
	
	$model = new Model("imgs/kj.png","Welcome to my land !");
	$controller = new Controller($model);
	$view = new View($model,$controller);
	echo $view;
?>