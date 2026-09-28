<?php
/**
 * API contact entreprise pour Hostinger
 * Format HTML + confirmation (comme app/api/contact-entreprise/route.ts)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

session_start();
$ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$rateLimitKey = "rate_limit_entreprise_$ip";

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

$entreprise = htmlspecialchars(trim($data['entreprise'] ?? ''), ENT_QUOTES, 'UTF-8');
$secteur = htmlspecialchars(trim($data['secteur'] ?? ''), ENT_QUOTES, 'UTF-8');
$surface = htmlspecialchars(trim($data['surface'] ?? ''), ENT_QUOTES, 'UTF-8');
$objectif = $data['objectif'] ?? '';
$ville = htmlspecialchars(trim($data['ville'] ?? ''), ENT_QUOTES, 'UTF-8');
$departement = htmlspecialchars(trim($data['departement'] ?? ''), ENT_QUOTES, 'UTF-8');
$nom = htmlspecialchars(trim($data['nom'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');

if (empty($entreprise) || empty($secteur) || empty($surface) || empty($objectif) ||
    empty($ville) || empty($departement) || empty($nom) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Tous les champs obligatoires doivent être remplis']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Adresse email invalide']);
    exit;
}

$objectifMap = [
    'revente' => 'Revente totale',
    'autoconsommation' => 'Autoconsommation',
    'les-deux' => 'Revente et autoconsommation',
];
$objectifText = $objectifMap[$objectif] ?? htmlspecialchars($objectif, ENT_QUOTES, 'UTF-8');

$to = getenv('CONTACT_EMAIL') ?: 'contact@electrotech13.fr';
$from = getenv('SMTP_FROM') ?: 'noreply@electrotech13.fr';
$dateFr = date('d/m/Y H:i:s');
$messageRow = !empty($message)
    ? '<div class="field"><span class="label">Message:</span> ' . nl2br($message) . '</div>'
    : '';

$emailSubject = "Electrotech - Demande projet solaire entreprise - $entreprise";
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
    .section { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #00a86b; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Nouvelle demande - Projet solaire entreprise</h2>
    </div>
    <div class="content">
      <div class="section">
        <h3 style="color: #00a86b; margin-bottom: 15px;">Informations entreprise</h3>
        <div class="field"><span class="label">Entreprise:</span> $entreprise</div>
        <div class="field"><span class="label">Secteur d'activité:</span> $secteur</div>
        <div class="field"><span class="label">Surface toiture:</span> $surface</div>
        <div class="field"><span class="label">Objectif:</span> $objectifText</div>
        <div class="field"><span class="label">Localisation:</span> $ville, $departement</div>
      </div>
      <div class="section">
        <h3 style="color: #00a86b; margin-bottom: 15px;">Contact</h3>
        <div class="field"><span class="label">Nom:</span> $nom</div>
        <div class="field"><span class="label">Email:</span> <a href="mailto:$email">$email</a></div>
        <div class="field"><span class="label">Téléphone:</span> $phone</div>
        $messageRow
      </div>
    </div>
    <div class="footer">
      <p>Ce message a été envoyé depuis le formulaire "Équiper mon entreprise"</p>
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
  <h2>Merci pour votre demande !</h2>
  <p>Bonjour $nom,</p>
  <p>Nous avons bien reçu votre demande d'étude pour équiper <strong>$entreprise</strong> en panneaux solaires.</p>
  <p>Notre équipe va étudier votre projet et vous contactera dans les plus brefs délais.</p>
  <p>Cordialement,<br/>L'équipe Electrotech</p>
</body>
</html>
HTML;
    $confirmHeaders = "MIME-Version: 1.0\r\n";
    $confirmHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
    $confirmHeaders .= "From: Electrotech <$from>\r\n";
    @mail($email, 'Confirmation de votre demande - Electrotech', $confirmBody, $confirmHeaders);

    echo json_encode(['message' => 'Votre demande a été envoyée avec succès !']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur lors de l\'envoi du message. Veuillez réessayer.']);
}
?>
