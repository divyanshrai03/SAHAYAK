<?php
	$username = "anychart_user"; // use your username  
    $password = "password";      // use your password
    $host = "localhost";         // use your host name or address 
    $database="local_db";        // use your database name

	// Database connection
	// connect to database
    $server = mysqli_connect($host, $username, $password);
    $connection = mysqli_select_db($server,$database);
?>