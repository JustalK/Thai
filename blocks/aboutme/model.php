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

class Icon {
	private $img;
	private $level;
	private $href;

	public function __construct($img,$level,$href="") {
		$this->img = $img;
		$this->level = $level;
		$this->href = $href;
	}

	public function __get($property) {
		if (property_exists($this, $property)) {
			return $this->$property;
		}
	}
}

class ListIcons {
	public $table;

	public function __construct($table) {
		$this->table = $table;
	}

	public function getImg($pos) {
		$arr = $this->table;
		return $arr[$pos]->img;
	}
	
	public function getLevel($pos) {
		$arr = $this->table;
		return $arr[$pos]->level;
	}	
	
	public function getNumberIcons() {
		return count($this->table);
	}
	
	public function __get($property) {
		if (property_exists($this, $property)) {
			return $this->$property;
		}
	}
}
?>