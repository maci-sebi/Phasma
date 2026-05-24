<?php
// Cílová URL adresa - ZDE vlož svůj zkopírovaný odkaz z Discordu
$target_url = "https://discord.com/api/webhooks/1508115434845638657/hyoknygrTcyJ0DJO-E7d9wUUQpFGwf2r9Tv4woxrCNdccKrOcbwfaQw1I2LHAVaoqfap"; 

$success = false;
$error_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Získání a sanitizace dat z formuláře
    $name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';
    $message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';

    // Jednoduchá validace
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        $error_message = "Všechna pole jsou povinná.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "Neplatný formát e-mailové adresy.";
    } else {
        
        // PŘÍPRAVA TEXTU PRO DISCORD:
        // Discord potřebuje text v políčku 'content'. Vytvoříme přehlednou zprávu.
        $discord_text = "📝 **Nová zpráva z Phasmophobia Guide!**\n";
        $discord_text .= "━━━━━━━━━━━━━━━━━━━━━━━━\n";
        $discord_text .= "👤 **Jméno:** " . $name . "\n";
        $discord_text .= "📧 **E-mail:** " . $email . "\n";
        $discord_text .= "📌 **Předmět:** " . $subject . "\n";
        $discord_text .= "💬 **Zpráva:**\n" . $message . "\n";
        $discord_text .= "━━━━━━━━━━━━━━━━━━━━━━━━\n";
        $discord_text .= "⏰ *Odesláno: " . date('Y-m-d H:i:s') . "*";

        // Zabalené pro Discord API
        $post_data = array(
            'content' => $discord_text
        );

        // Odeslání dat na cílovou URL pomocí PHP (cURL s fallbackem na file_get_contents)
        if (function_exists('curl_version')) {
            // Použití cURL
            $ch = curl_init($target_url);
            $payload = json_encode($post_data);
