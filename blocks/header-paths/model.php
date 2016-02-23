<?php
class Model {
	private $paths;

	public function __construct($paths) {
		$this->paths = $paths;
	}

	public function __get($property) {
		if (property_exists($this, $property)) {
			return $this->$property;
		}
	}
}
?>