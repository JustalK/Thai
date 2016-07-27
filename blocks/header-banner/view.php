<?php 

class View {
	private $model;
	private $controller;
	
	public function __construct($model,$controller) {
		$this->model = $model;
		$this->controller = $controller;
	}
	
	public function __toString() {
		$tmp ='<div id="header-middle" class="row header-top-middle" style="position:relative;">';
		$tmp .='<div id="logo">
					<div class="col-md-offset-2 col-md-2 col-sm-offset-1 col-sm-4 hidden-xs max-height" style="position:relative;">
						<img src="'.$this->model->img.'" class="img-responsive circle"/>
						<img src="imgs/circle.png" class="img-responsive circle" />
					</div>
			 		<div id="title" class="col-md-8 col-md-offset-0 col-sm-offset-0 col-xs-offset-1 max-height" style="float: left;display: flex;align-items: center;">
						<div style="max-width: 100%;">
							<h1 style="font-weight: 300 !important;">'.$this->model->title.'</h1>
				 			<div class="button-banner">Portefolio</div>
						</div>
					</div>
				</div>';
		$tmp .= '</div>';
		return $tmp;
	}
}

?>