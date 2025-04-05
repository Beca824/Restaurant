<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $message = htmlspecialchars($_POST["feedback"]);

    if (!empty($name) && !empty($message)) {
        $feedback = ["name" => $name, "message" => $message];
        
        
        $file = "feedback.json";
        $existingData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
        
        
        $existingData[] = $feedback;
        
        
        file_put_contents($file, json_encode($existingData, JSON_PRETTY_PRINT));

        echo "Feedback submitted successfully!";
    } else {
        echo "All fields are required!";
    }
}
?>
