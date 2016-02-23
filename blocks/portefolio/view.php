<?php

class View {

	public function __construct() {
	}

	public function __toString() {
		$tmp ='<div id="menu-bottom" class="row" style="background:#000000;height:100%;">';
		$tmp .= '</div>';
		return $tmp;
	}
}

?>