<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
 // Compose the email message
 $email_message = "Name: $name\n";
 $email_message .= "Email: $email\n";
 $email_message .= "Phone: $phone\n\n";
 $email_message .= "Message:\n$message";
$recipient = "ivytaglife@gmail.com";
$subject = "Contact Form Submission from $name";
$mailheader = "From: $email";
if (mail($recipient, $subject, $email_message, $mailheader)) {
    echo ("Thank You, Your Message has been delivered! We will get back to you soon" . "-" ."<button class='app-form-button'><a href='index.html'> Return Home</a></button>");
    } else {
        echo("Email sending failed, please check your details and try again" . "-" . "<button class='app-form-button'><a href='index.html'> Return Home</a></button>");
    }
}
?>
