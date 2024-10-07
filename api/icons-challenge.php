<?php
header('Content-Type: application/json');

$response = [
    "success" => true,
    "message" => "",
    "data" => [
        "background_url" => "/static/challenges/icons/12f9adfbee0b23799b5db5b11a8e35e8.png",
        "icons_order" => [
            "star",
            "calendar",
            "buy"
        ]
    ]
];

echo json_encode($response);
?>
