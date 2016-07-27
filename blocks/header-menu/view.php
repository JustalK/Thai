<?php 

class View {
	private $model;
	private $controller;
	
	public function __construct($model,$controller) {
		$this->model = $model;
		$this->controller = $controller;
	}
	
	public function __toString() {
		$tmp ='<div id="header-menu" class="row header-top-top" style="position:relative;">';
		$tmp .='<div class="col-md-offset-2 col-md-1 col-sm-offset-2 col-sm-2 col-xs-0 max-height">
					<img id="mini-logo-home" src="'.$this->model->logo.'" class="img-responsive-custom">
				</div>';
		
		for($i=0;$i<sizeof($this->model->menu);$i++) {
				$tmp .='<div class="col-md-1 col-sm-1 col-md-offset-0 col-sm-offset-0 col-xs-offset-0 col-xs-2 header-top-button max-height">
							<addr href="'.$this->model->menu[$i]->href.'">'.$this->model->menu[$i]->title.'</addr>
						</div>';	
		}
		$tmp .= '<div class="col-md-offset-3 col-md-2 col-sm-offset-3 col-sm-2 col-xs-offset-1 col-xs-4 max-height">
					<div id="login">Login</div>
				</div>';
		$tmp .= '</div>';
		return $tmp;
	}
}

?>