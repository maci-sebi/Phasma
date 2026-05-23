<?php
// Cílová URL adresa pro nahrání/odeslání dat (např. API, Webhook, Discord atd.)
// Upravte tuto adresu dle potřeby
$target_url = "https://httpbin.org/post"; 

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
        // Příprava dat pro odeslání
        $post_data = array(
            'name' => $name,
            'email' => $email,
            'subject' => $subject,
            'message' => $message,
            'sent_at' => date('Y-m-d H:i:s'),
            'source' => 'Phasmophobia Guide Contact Form'
        );

        // Odeslání dat na cílovou URL pomocí PHP (cURL s fallbackem na file_get_contents)
        if (function_exists('curl_version')) {
            // Použití cURL
            $ch = curl_init($target_url);
            $payload = json_encode($post_data);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_TIMEOUT, 10);
            $response = curl_exec($ch);
            $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);

            // Považujeme kódy 200-299 za úspěšné odeslání
            if ($http_code >= 200 && $http_code < 300) {
                $success = true;
            } else {
                $error_message = "Chyba při odesílání dat na server (HTTP kód: $http_code).";
            }
        } else {
            // Použití stream contextu (file_get_contents) jako záložní možnost
            $options = array(
                'http' => array(
                    'header'  => "Content-Type: application/json\r\n",
                    'method'  => 'POST',
                    'content' => json_encode($post_data),
                    'timeout' => 10
                )
            );
            $context  = stream_context_create($options);
            $result = @file_get_contents($target_url, false, $context);
            
            if ($result !== false) {
                $success = true;
            } else {
                $error_message = "Nepodařilo se navázat spojení s cílovým serverem.";
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Kontakt - Odeslání</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../style/style-needed.css">
    <link rel="icon" href="..\..\images\Spirit.webp">
    <script src="../../scripts/rain.js" defer></script>
</head>
<div class="rain"></div>
<body>
    <nav class="sidebar">
        <a href="../../index.html">Domů</a>
        <a href="../../html/ghosts/home-ghosts.html">Duchové</a>
        <a href="../../html/maps/home-maps.html">Mapy</a>
        <a href="../../html/cursed_objects/home-cursed-objects.html">Prokleté předměty</a>
        <a href="../../html/equipment/home-equipment.html">Vybavení</a>
        <a href="../../html/needed/kontakt.html">Kontakt</a>
        <a href="../../html/needed/o-hře.html">O hře</a>
        <a href="../../html/needed/o-mně.html">O mně</a>
         <div class="sidebar-buttons">
    <a class="btn steam" href="https://store.steampowered.com/app/739630/Phasmophobia/" target="_blank">
        <img src="../../images/steam.svg" alt="Steam" class="btn-icon"> Get on Steam
    </a>
    <a class="btn xbox" href="https://www.xbox.com/cs-CZ/games/store/-/9N6D60SBZN05" target="_blank">
        <img src="../../images/xbox.png" alt="Xbox" class="btn-icon"> Get on Xbox
    </a>
    <a class="btn ps" href="https://store.playstation.com/en-cz/concept/10005673/" target="_blank">
        <img src="../../images/ps.svg" alt="PS5" class="btn-icon"> <b>Get on PS5</b>
    </a>
    </div>
    </nav>
</div>
    <main class="paragraf" style="max-width:700px;margin:0 auto;padding-bottom: 50px; text-align: center;">
        <header><h1>Odeslání zprávy</h1></header>
        
        <div class="contact-form-container" style="max-width: 500px; margin: 50px auto;">
            <?php if ($_SERVER["REQUEST_METHOD"] != "POST"): ?>
                <h2>Přístup odepřen</h2>
                <p>Formulář nebyl odeslán správnou metodou.</p>
                <div class="back-button" style="margin-top: 30px;">
                    <a href="kontakt.html" style="width: auto;">Zpět na kontakt</a>
                </div>
            <?php elseif ($success): ?>
                <h2 style="color: #4caf50;">Úspěšně odesláno!</h2>
                <p>Vaše zpráva byla úspěšně nahrána a zpracována pomocí PHP.</p>
                <div style="text-align: left; background: #111; padding: 15px; border-radius: 6px; margin: 20px 0; border: 1px dashed #444;">
                    <p style="margin: 5px 0;"><strong>Jméno:</strong> <?php echo $name; ?></p>
                    <p style="margin: 5px 0;"><strong>E-mail:</strong> <?php echo $email; ?></p>
                    <p style="margin: 5px 0;"><strong>Předmět:</strong> <?php echo $subject; ?></p>
                </div>
                <div class="back-button" style="margin-top: 30px;">
                    <a href="kontakt.html" style="width: auto;">Zpět na kontakt</a>
                </div>
            <?php else: ?>
                <h2 style="color: #f44336;">Chyba při odesílání</h2>
                <p><?php echo $error_message; ?></p>
                <div class="back-button" style="margin-top: 30px;">
                    <a href="kontakt.html" style="width: auto;">Zpět a zkusit znovu</a>
                </div>
            <?php endif; ?>
        </div>
    </main>
    <footer>
    © 2026 Phasma. Všechna práva vyhrazena. | <a href="pravidla.html">Právní info</a>
</footer>
</body>
</html>
