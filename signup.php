<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$company = $_POST['company'];
		$from = 'sign-up Form';
		$to = 'coroldenhuis@msn.com';
		$subject = 'Aanvraag login ';
		$url='http://coroldenhuis.nl';

		$body ="From: $name\n E-Mail: $email\n Company:\n $company";

		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}

		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}

		//Check if company name has been entered
		if (!$_POST['company']) {
			$errCompany = 'Please enter your company name';
		}

// If there are no errors, send the email
if (!$errName && !$errEmail && !$errCompany ) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry there was an error sending your sign up form. Please try again later.</div>';
	}
} else {
		$result= $company;
}
	echo $result;
	echo '<META HTTP-EQUIV=REFRESH CONTENT="1; '.$url.'">';

	}
?>
