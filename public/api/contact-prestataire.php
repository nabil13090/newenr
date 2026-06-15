<?php
/**
 * API contact prestataire pour Hostinger
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

session_start();
$ip = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
$rateLimitKey = "rate_limit_prestataire_$ip";

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

// Sanitization
$entreprise = htmlspecialchars(trim($data['entreprise'] ?? ''), ENT_QUOTES, 'UTF-8');
$typeProjet = htmlspecialchars(trim($data['typeProjet'] ?? ''), ENT_QUOTES, 'UTF-8');
$localisation = htmlspecialchars(trim($data['localisation'] ?? ''), ENT_QUOTES, 'UTF-8');
$volumeEstime = htmlspecialchars(trim($data['volumeEstime'] ?? ''), ENT_QUOTES, 'UTF-8');
$delais = htmlspecialchars(trim($data['delais'] ?? ''), ENT_QUOTES, 'UTF-8');
$nom = htmlspecialchars(trim($data['nom'] ?? ''), ENT_QUOTES, 'UTF-8');
$fonction = htmlspecialchars(trim($data['fonction'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');

// Validation
if (empty($entreprise) || empty($typeProjet) || empty($localisation) || empty($volumeEstime) || 
    empty($delais) || empty($nom) || empty($fonction) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['error' => 'Tous les champs obligatoires doivent être remplis']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Adresse email invalide']);
    exit;
}

$to = getenv('CONTACT_EMAIL') ?: 'contact@electrotech13.fr';
$from = getenv('SMTP_FROM') ?: $email;

$emailSubject = "Electrotech - Demande prestation/partenariat - $entreprise";
$emailBody = "
Nouvelle demande - Prestation / Partenariat

Informations projet:
Entreprise: $entreprise
Type de projet: $typeProjet
Localisation: $localisation
Volume estimé: $volumeEstime
Délais souhaités: $delais

Contact décisionnaire:
Nom: $nom
Fonction: $fonction
Email: $email
Téléphone: $phone
" . (!empty($message) ? "\nMessage:\n$message\n" : "") . "
---
IP: $ip
Date: " . date('d/m/Y H:i:s') . "
";

$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$mailSent = @mail($to, $emailSubject, $emailBody, $headers);

if ($mailSent) {
    echo json_encode(['message' => 'Votre demande a été envoyée avec succès !']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur lors de l\'envoi du message. Veuillez réessayer.']);
}
?>
