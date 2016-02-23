<?php
	include 'model.php';
	include 'controller.php';
	include 'view.php';
	
	$listSubmenu = [];
	$listSubmenu[] = new Submenu("Project","imgs/project.png");
	$listSubmenu[] = new Submenu("Articles","imgs/articles.png");
	$listSubmenu[] = new Submenu("Github","imgs/github.png");
	$listSubmenu[] = new Submenu("About Me","imgs/aboutme.png");
	
	$model = new Model($listSubmenu);
	$controller = new Controller($model);
	$view = new View($model,$controller);
	echo $view;
?>