<?php
	require_once("mailchimp/MCAPI.class.php");
	$mcapi = new MCAPI('e6f53a7e3eae5ef2975d6ea8582e76b4-us21');
	$lists = $mcapi->lists();

	if($lists) {
		$merge_vars = Array('EMAIL' => $_REQUEST['mc_email']);
		$list_id = 'd7abdc383a';
	
		if($mcapi->listSubscribe($list_id, $_REQUEST['mc_email'], $merge_vars ) ):
			echo '<span class="success-msg">Благодарим Ви за регистрацията! На посочения имейл сме изпратили линк за потвърждение. Проверете входящата си поща или папка СПАМ.</span>';
		else:
			echo '<span class="error-msg"><b>Error:</b>&nbsp;'.$mcapi->errorMessage.'</span>';
		endif;
	}
	else {
		echo '<span class="error-msg"><b>Error:</b>&nbsp;Mailchimp API is not Valid.</span>';
	}
?>