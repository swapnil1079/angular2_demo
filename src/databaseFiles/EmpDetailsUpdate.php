<?php
 header('Content-type: application/json');
 $data =json_decode(file_get_contents("php://input"));
 require_once 'database_connections.php';
  $emp_name = $data->emp_name; 
  $emp_email = $data->emp_email;
  $emp_address = $data->emp_address;
  $emp_id = $data->emp_id;   
  $sql = "UPDATE emp_details  SET emp_name='$emp_name',emp_address='$emp_address',emp_email='$emp_email' WHERE emp_id ='$emp_id'";

  if (mysqli_query($con, $sql)) {
    $response_array['status'] = 'success';
	echo json_encode($response_array);  
    } else {
    $response_array['status'] = 'error';
	echo json_encode($response_array); 
    }

?>