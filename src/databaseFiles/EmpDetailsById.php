<?php
  header('Content-type: application/json');
  $data =json_decode(file_get_contents("php://input"));
  require_once 'database_connections.php';
  //print_r($data);
  $emp_id = $data->emp_id;
 // print_r($emp_id); 
  $sql = "SELECT * from emp_details where emp_id='$emp_id'";
  $result  = mysqli_query($con, $sql);
  $arr = array();
  if(mysqli_num_rows($result) != 0){
	while($row=mysqli_fetch_assoc($result)){
		$arr[] = $row;
	 }
  }
  echo $json_info = json_encode($arr);
?>
