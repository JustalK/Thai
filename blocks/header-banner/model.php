<?php

class model {
	private $img;
	private $title;

	public function __construct($img,$title) {
		$this->img = $img;
		$this->title = $title;
	}

	public function __get($property) {
		if (property_exists($this, $property)) {
			return $this->$property;
		}
	}
}
?>