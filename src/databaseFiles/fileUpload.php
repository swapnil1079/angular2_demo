<?php
// header('Content-type: application/json');
require_once 'database_connections.php';
   if (isset($_FILES['userfile'])) {
   $originalName = $_FILES['userfile']['name'];
   $profile_pic_temp = $_FILES['userfile']['tmp_name'];
   $target =$_SERVER['DOCUMENT_ROOT']."/proj2/src/media_temp/";
   $userfile_extn = substr($originalName, strrpos($originalName, '.')+1);
   $chksum_code =  md5_file($profile_pic_temp);
   move_uploaded_file($profile_pic_temp, $target.$chksum_code.".".$userfile_extn);
   $file_name = $chksum_code.".".$userfile_extn;
   $response_array['file_name'] =  $file_name;
   echo json_encode($response_array);
   }
   else
   {
    $response_array['file_name'] =  '';
   echo json_encode($response_array);
   }
//var_dump($_FILES);
//print_r($_FILES);
// $data =json_decode(file_get_contents("php://input"));
// var_dump($data);
?>