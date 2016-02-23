<?php 

class View {
	private $model;
	private $controller;
	
	public function __construct($model,$controller) {
		$this->model = $model;
		$this->controller = $controller;
	}
	
	public function __toString() {
		$tmp ='<div class="row header-top-bottom" >';
		$tmp .='<div class="col-md-offset-2 col-md-10 col-sm-offset-2 col-sm-10 col-xs-offset-1 col-xs-10 max-height">';
		for($i=0;$i<sizeof($this->model->paths);$i++) {
			if($i==1) {
				$tmp .= ' > ';
			}
			if($i==0) {
				$tmp .='<a id="home" class="path">'.$this->model->paths[0].'</a>';
			} else {
				$tmp .='<strong id="paths" >Menu</strong>';
			}
		}
		$tmp .= '</div></div>';
		return $tmp;
	}
}

?>