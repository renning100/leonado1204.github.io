<?php
if(!$_POST) exit;

    $to 	  = 'abc@somedomain.com'; #Replace your email id...
	$name	  = $_POST['txtname'];
	$age      = $_POST['txtage'];
	$course   = $_POST['txtcourse'];
    $comment  = $_POST['txtmessage'];
        
	if(get_magic_quotes_gpc()) { $comment = stripslashes($comment); }

	 $e_subject = 'Regarding Admission';

	 $msg  = "You have been contacted by $name for admission.\r\n\n";
	 $msg .= "Age : $age \r\n\n";
	 $msg .= "Course : $course \r\n\n";	 
	 $msg .= "$comment\r\n\n";
								
	 if(@mail($to, $e_subject, $msg, "From: $name\r\n"))
	 {
		 echo "<span class='success-msg'>We have received your admission request, will get back to you shortly.</span>";
	 }
	 else
	 {
		 echo "<span class='error-msg'>Sorry your message not sent, Try again Later.</span>";
	 }
?>