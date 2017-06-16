<?php
 header('Content-type: application/json');
 $data =json_decode(file_get_contents("php://input"));
 require_once 'database_connections.php';
  $emp_email = $data->email; 
  $emp_name  = $data->password;
 $sql = "SELECT * from emp_details WHERE emp_email='$emp_email' AND emp_name ='$emp_name'";
 $result  = mysqli_query($con, $sql);

 if(mysqli_num_rows($result) != 0){
  $row=mysqli_fetch_assoc($result);
      $response_array[]['data'] = $row['emp_id'];
      echo json_encode($response_array);
  }
  else{
    $response_array[]['data'] = 'error';
      echo json_encode($response_array); 
  }




?>