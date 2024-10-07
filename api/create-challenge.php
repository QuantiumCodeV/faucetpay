<?php
header('Content-Type: application/json');

$response = [
    "success" => true,
    "message" => "",
    "data" => [
        "captcha_id" => "bbf10cbb6a849a41fd0c4e3dff03bf59",
        "slide_url" => "/static/challenges/slides/c1e2f11f97a36b70c2aadf957d0216d5.png",
        "background_url" => "/static/challenges/backgrounds/c1e2f11f97a36b70c2aadf957d0216d5.png",
        "slide_y" => 124
    ]
];

echo json_encode($response);
?>
