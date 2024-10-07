<?php
header('Content-Type: application/json');

$response = [
    "success" => true,
    "file_url" => "/static/js/captcha_v2.js"
];

echo json_encode($response);
?>
