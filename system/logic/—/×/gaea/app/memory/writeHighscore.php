<?php 

	// $myFile = "http://www.dubbe.se/test/high0.xml";
	$myFile = "high0.xml";
	$fh = fopen($myFile, 'w') or die("can't open file");
	$stringData = "Floppy Jalopy\n";
	fwrite($fh, $stringData);
	$stringData = "Pointy Pinto\n";
	fwrite($fh, $stringData);
	fclose($fh);

?>
