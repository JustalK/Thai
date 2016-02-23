<?php
	include 'model.php';
	include 'view.php';
	
	$model = new Model("imgs/kj.png","Welcome to my land !");
	$view = new View($model);
	echo $view;
?>