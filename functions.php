<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "exp";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

@@session_start();

function isloggedin()
{
	
if(@@$_SESSION['logged_in']!=TRUE)
{
 return FALSE;
}	
else
{
return TRUE;
}
}



?>