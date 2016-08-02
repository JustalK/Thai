<?php 

class View {
	private $model;
	private $controller;
	
	public function __construct($model,$controller) {
		$this->model = $model;
		$this->controller = $controller;
	}
	
	public function __toString() {
		$tmp ='<div id="menu-bottom" class="row" style="position:relative;height: 100%;">';
		for($i=0;$i<sizeof($this->model->listSubmenu);$i++) {
			if($i%4==0) {
				$tmp .='<div id="'.strtolower(str_replace(' ', '', $this->model->listSubmenu[$i]->title)).'" class="item-bottom col-md-offset-2 col-md-2 col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-10" style="margin-top:20px;height: calc(100% - 40px);">';
			} else if($i%4==1 || $i%4==3) {
				$tmp .='<div id="'.strtolower(str_replace(' ', '', $this->model->listSubmenu[$i]->title)).'" class="item-bottom col-md-offset-0 col-md-2 col-sm-offset-0 col-sm-5 col-xs-offset-1 col-xs-10" style="margin-top:20px;height: calc(100% - 40px);">';
			} else {
				$tmp .='<div id="'.strtolower(str_replace(' ', '', $this->model->listSubmenu[$i]->title)).'" class="item-bottom col-md-offset-0 col-md-2 col-sm-offset-1 col-sm-5 col-xs-offset-1 col-xs-10" style="margin-top:20px;height: calc(100% - 40px);">';			
			}
			$tmp .='<div class="title-menu max-width white"><h2>'.$this->model->listSubmenu[$i]->title.'</h2></div>';
			$tmp .='<div class="title-menu-image" style="background: #030303 url(\''.$this->model->listSubmenu[$i]->link.'\') no-repeat scroll center top / cover;"></div>';
			$tmp .='</div>';
		}
		$tmp .= '</div>';
		return $tmp;
	}
}

?>