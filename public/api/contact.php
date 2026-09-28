<?php
/**
 * API de contact pour Hostinger (remplace /api/contact)
 * Compatible avec export statique Next.js
 * Format HTML + confirmation (comme app/api/contact/route.ts)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

session_start();
$ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$rateLimitKey = "rate_limit_contact_$ip";

if (!isset($_SESSION[$rateLimitKey])) {
    $_SESSION[$rateLimitKey] = ['count' => 0, 'reset' => time() + 60];
}

if ($_SESSION[$rateLimitKey]['reset'] < time()) {
    $_SESSION[$rateLimitKey] = ['count' => 0, 'reset' => time() + 60];
}

if ($_SESSION[$rateLimitKey]['count'] >= 5) {
    http_response_code(429);
    echo json_encode(['error' => 'Trop de requêtes. Veuillez réessayer dans quelques instants.']);
    exit;
}

$_SESSION[$rateLimitKey]['count']++;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Données invalides']);
    exit;
}

$name = htmlspecialchars(trim($data['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$subject = $data['subject'] ?? '';
$message = htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Tous les champs obligatoires doivent être remplis']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Adresse email invalide']);
    exit;
}

if (strlen($name) > 100 || strlen($email) > 150 || strlen($message) > 500) {
    http_response_code(413);
    echo json_encode(['error' => 'Données trop volumineuses']);
    exit;
}

$subjectMap = [
    'devis' => 'Demande de devis',
    'etude' => 'Étude de faisabilité',
    'info' => 'Demande d\'information',
    'autre' => 'Autre demande',
];
$subjectText = $subjectMap[$subject] ?? 'Nouvelle demande de contact';

$to = getenv('CONTACT_EMAIL') ?: 'contact@electrotech13.fr';
$from = getenv('SMTP_FROM') ?: 'noreply@electrotech13.fr';
$dateFr = date('d/m/Y H:i:s');
$messageHtml = nl2br($message);
$phoneRow = !empty($phone)
    ? "<div class=\"field\"><span class=\"label\">Téléphone:</span> $phone</div>"
    : '';

$emailSubject = "Electrotech - Contact - $subjectText";
$emailBody = <<<HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #00a86b; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #00a86b; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #00a86b; margin-top: 15px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nouveau message de contact</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Nom:</span> $name
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:$email">$email</a>
      </div>
      $phoneRow
      <div class="field">
        <span class="label">Sujet:</span> $subjectText
      </div>
      <div class="message-box">
        <div class="label">Message:</div>
        <p>$messageHtml</p>
      </div>
    </div>
    <div class="footer">
      <p>Ce message a été envoyé depuis le formulaire de contact du site Electrotech</p>
      <p>IP: $ip | Date: $dateFr</p>
    </div>
  </div>
</body>
</html>
HTML;

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Electrotech <$from>\r\n";
$headers .= "Reply-To: $email\r\n";

$mailSent = @mail($to, $emailSubject, $emailBody, $headers);

if ($mailSent) {
    $confirmBody = <<<HTML
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2>Merci pour votre message !</h2>
  <p>Bonjour $name,</p>
  <p>Nous avons bien reçu votre message concernant : <strong>$subjectText</strong></p>
  <p>Notre équipe vous répondra dans les plus brefs délais.</p>
  <p>Cordialement,<br/>L'équipe Electrotech</p>
</body>
</html>
HTML;
    $confirmHeaders = "MIME-Version: 1.0\r\n";
    $confirmHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $confirmHeaders .= "From: Electrotech <$from>\r\n";
    @mail($email, 'Confirmation de votre message - Electrotech', $confirmBody, $confirmHeaders);

    echo json_encode(['message' => 'Message envoyé avec succès !']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur lors de l\'envoi du message. Veuillez réessayer.']);
}
?>
