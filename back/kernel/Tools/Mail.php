<?php
namespace Kernel\Tools;

use Kernel\Config;

class Mail
{
    /**
     * @param array $from
     * @param array $to
     * @param array $reply
     * @param $subject
     * @param $body
     * @param null $altbody
     */
    public static function send($from = [], $to = [], $reply = [], $subject, $body, $altbody = null)
    {
        $mail = new PHPMailer(true);
        try {
            // Server settings for PHPMailer
            $mail->isSMTP();
            $mail->Host = Config::get('mail')['host'];
            $mail->SMTPAuth = true;
            $mail->Username = Config::get('mail')['username']; // SMTP username
            $mail->Password = Config::get('mail')['pw']; // SMTP password
            $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 465;

            // Recipients
            $mail->setFrom($from['email'], $from['name']);

            if (count($to) !== count($to, COUNT_RECURSIVE)) {
                foreach ($to as $item) {
                    if (!empty($item['name'])) {
                        $mail->addAddress($item['email'], $item['name']);
                    } else {
                        $mail->addAddress($item['email']);
                    }
                }
            } else {
                if (!empty($to['name'])) {
                    $mail->addAddress($to['email'], $to['name']);
                } else {
                    $mail->addAddress($to['email']);
                }
            }


            $mail->addReplyTo($reply['email'], $reply['name']);

            // Content
            $mail->CharSet = 'UTF-8';
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body    = $body;
            if (null != $altbody) {
                $mail->AltBody = $altbody;
            }

            $mail->send();
        } catch (Exception $e) {
            echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
        }
    }
}