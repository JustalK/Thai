<?php
	include 'model.php';
	include 'controller.php';
	include 'view.php';
	
	$model = new Model(["Home","Alphabet"]);
	$controller = new Controller($model);
	$view = new View($model,$controller);
	echo $view;
?>