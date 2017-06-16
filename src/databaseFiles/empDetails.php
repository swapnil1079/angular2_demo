<?php
require_once 'database_connections.php';
$sql = "SELECT * from emp_details ORDER BY emp_id ASC";
$result  = mysqli_query($con, $sql);
$arr = array();
if(mysqli_num_rows($result) != 0){
	while($row=mysqli_fetch_assoc($result)){
		$arr[] = $row;
	}
}
 echo $json_info = json_encode($arr);
?>
