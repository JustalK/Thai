<?php
class Model {
	private $listSubmenu;

	public function __construct($listSubmenu) {
		$this->listSubmenu = $listSubmenu;
	}

	public function __get($property) {
		if (property_exists($this, $property)) {
			return $this->$property;
		}
	}
}

class Submenu {
	private $title;
	private $link;
	
	public function __construct($title,$link) {
		$this->title = $title;
		$this->link = $link;
	}
	
	public function __get($property) {
		if(property_exists($this, $property)) {
			return $this->$property;
		}
	}
}
?>