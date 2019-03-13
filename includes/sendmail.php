<?php
$submit = $_POST['submit'];
if(isset($submit)){
    $subject = $_POST['subject'];
    $msg = $_POST['msg'];
    $mail = $_POST['mail'];
    include_once '../securimage/securimage.php';
    $securimage = new Securimage();
    if ($securimage->check($_POST['captcha_code']) == false) {
        header('Location: ../index.php?wrongcaptcha');
    } else {
        $headers = 'From: '.$mail . "\r\n" .
        "Content-type: text/html; charset=UTF-8" . "\r\n" .
        'Reply-To: noreply@tengil.one' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        mail('noreply@tengil.one', $subject, $msg, $headers);
        header('Location: ../index.php?mailad');
    }
}
