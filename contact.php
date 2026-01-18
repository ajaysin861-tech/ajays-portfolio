<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Form ka data uthao
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // 2. Kise bhejna hai (Apni email yahan dalo)
    $to = "ajaysin861@gmail.com";
    $subject = "New Message from Portfolio";

    // 3. Kya bhejna hai
    $body = "Name: $name \nEmail: $email \nMessage: $message";
    $headers = "From: $email";

    // 4. Mail bhejne ka function
    if(mail($to, $subject, $body, $headers)) {
        echo "Message bhej diya gaya hai!";
    } else {
        echo "Locha ho gaya! Message nahi gaya.";
    }
}
?>