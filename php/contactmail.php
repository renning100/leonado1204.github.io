<?php
if(!$_POST) exit;

    $to 	  = 'abc@somedomain.com'; #Replace your email id...
	$name	  = $_POST['txtname'];
	$email    = $_POST['txtemail'];
	$subject  = $_POST['txtsubject'];
    $comment  = $_POST['txtmessage'];
        
	if(get_magic_quotes_gpc()) { $comment = stripslashes($comment); }

	 $msg  = "You have been contacted by $name with regards to $subject.\r\n\n";
	 $msg .= "$comment\r\n\n";
	 $msg .= "You can contact $name via email, $email.\r\n\n";
	 $msg .= "-------------------------------------------------------------------------------------------\r\n";
								
	 if(@mail($to, $subject, $msg, "From: $email\r\nReturn-Path: $email\r\n"))
	 {
		 echo "<span class='success-msg'>Thanks for Contacting Us, We will get back to you shortly.</span>";
	 }
	 else
	 {
		 echo "<span class='error-msg'>Sorry your message not sent, Try again Later.</span>";
	 }
?>