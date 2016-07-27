<?php
	include 'model.php';
	include 'view.php';
	
	$model = new Model("imgs/kj.png","Welcome to my land !");
	$listIcons = new ListIcons([new Icon("./imgs/icones/wordpress.png", 70,""),
								new Icon("./imgs/icones/polymer.png", 60,""),
								new Icon("./imgs/icones/bootstrap.png", 100,""),
								new Icon("./imgs/icones/jquery.png", 90,""),
								new Icon("./imgs/icones/php.png", 80,""),
								new Icon("./imgs/icones/mysql.png", 85,""),
								new Icon("./imgs/icones/java.png", 90,""),
								new Icon("./imgs/icones/webgl.png", 70,""),
								new Icon("./imgs/icones/ruby.png", 50,""),
								new Icon("./imgs/icones/cordova.png", 100,""),
								new Icon("./imgs/icones/github.png", 100,""),
								new Icon("./imgs/icones/linux.png", 70,""),
								new Icon("./imgs/icones/python.png", 35,""),
								new Icon("./imgs/icones/e107.png", 80,""),
								new Icon("./imgs/icones/htmlcss.png", 100,""),
								new Icon("./imgs/icones/less.png", 55,""),
								new Icon("./imgs/icones/nodejs.png", 34,""),
								new Icon("./imgs/icones/angular.png", 65,""),
								new Icon("./imgs/icones/csharp.png", 79,""),
								new Icon("./imgs/icones/bash.png", 90,""),
								new Icon("./imgs/icones/flash.png", 70,""),
								new Icon("./imgs/icones/postgresql.png", 60,"")
	]);
	$view = new View($model,$listIcons);
	echo $view;
?>