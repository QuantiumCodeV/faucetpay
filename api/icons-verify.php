<?php
header('Content-Type: application/json');

$response = [
    "success" => true,
    "message" => "",
    "data" => [
        "captcha_response" => "255cb12ad7acc69aa6970c9714cd63d3"
    ]
];

echo json_encode($response);
?>
