<?php
class Model {
	private $logo;
	private $menu;

	public function __construct($logo,$menu) {
		$this->logo = $logo;
		$this->menu = $menu;
	}

	public function __get($property) {
		if (property_exists($this, $property)) {
			return $this->$property;
		}
	}
}

class menu {
	private $title;
	private $href;

	public function __construct($title,$href = "") {
		$this->title = $title;
		$this->href = $href;
	}

	public function __get($property) {
		if (property_exists($this, $property)) {
			return $this->$property;
		}
	}
}
?>