<html>
	<head>
		<title>PHP Test</title>
	</head>
	<body>
		<a href="newfile.txt">newfile.txt</a>
		<?php echo '<p>Hello World</p>'; 
		phpinfo();
		echo 'url: ' . $allow_url_fopen;
		
		?> 
		
		
		<?php
		$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
		$txt = "John Doe\n";
		fwrite($myfile, $txt);
		$txt = "Jane Doe\n";
		fwrite($myfile, $txt);
		fclose($myfile);
		?> 
	</body>
</html>