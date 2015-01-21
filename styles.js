/* CSS Document */

<script>

function random_color_part() {

    return str_pad( dechex( mt_rand( 0, 255 ) ), 2, '0', STR_PAD_LEFT);

}



function random_color() {

    return "#".random_color_part() . random_color_part() . random_color_part();

}



function random_em(){

	return rand(0,10)."em";

}

</script>

$color =  random_color();

$em = random_em();

?>

#flies{

	background-color: <?php echo $color; ?>;

}

a{

	font-size: <?php echo $color; ?>!important;

	color:<?php echo $color; ?>!important;

}

h1{

	color: <?php echo $color; ?>!important;

	font-size:.<?php echo $em; ?>!important;

}

body{

	background-color:<?php echo $color; ?>!important;

}



