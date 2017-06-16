<?php
 header('Content-type: application/json');
 $data =json_decode(file_get_contents("php://input"));
 require_once 'database_connections.php';
  $emp_name = $data->emp_name; 
  $emp_email = $data->emp_email; 
  $sql = "INSERT INTO emp_details (emp_name,emp_email) VALUES ('$emp_name','$emp_email')";

  if (mysqli_query($con, $sql)) {
    $response_array['status'] = 'success';
	echo json_encode($response_array);  
    } else {
    $response_array['status'] = 'error';
	echo json_encode($response_array); 
    }



?>