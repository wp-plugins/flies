<?php

class flies {

    public function __construct(){

		add_shortcode('flies', array($this, 'showbutton'));	

    }

	

	public function showbutton(){

		echo "<button id='flies'>".__('FLIES!','flies')."</button>";

	}

}

?>