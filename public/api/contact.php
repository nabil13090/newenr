<?php
/**
 * API de contact pour Hostinger (remplace /api/contact)
 * Compatible avec export statique Next.js
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Rate limiting simple (en session)
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

// Vérifier méthode
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Méthode non autorisée']);
    exit;
}

// Récupérer les données
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Données invalides']);
    exit;
}

// Validation
$name = htmlspecialchars(trim($data['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$subject = $data['subject'] ?? '';
$message = htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');

// Vérifier les champs obligatoires
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Tous les champs obligatoires doivent être remplis']);
    exit;
}

// Valider email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Adresse email invalide']);
    exit;
}

// Limites de taille
if (strlen($name) > 100 || strlen($email) > 150 || strlen($message) > 500) {
    http_response_code(413);
    echo json_encode(['error' => 'Données trop volumineuses']);
    exit;
}

// Map subjects
$subjectMap = [
    'devis' => 'Demande de devis',
    'etude' => 'Étude de faisabilité',
    'info' => 'Demande d\'information',
    'autre' => 'Autre demande',
];
$subjectText = $subjectMap[$subject] ?? 'Nouvelle demande de contact';

// Configuration email
$to = getenv('CONTACT_EMAIL') ?: 'contact@electrotech13.fr';
$from = getenv('SMTP_FROM') ?: $email;

// Préparer l'email
$emailSubject = "Electrotech - Panneaux Solaires - $subjectText";
$emailBody = "
Nouveau message de contact

Nom: $name
Email: $email
" . (!empty($phone) ? "Téléphone: $phone\n" : "") . "
Sujet: $subjectText

Message:
$message

---
IP: $ip
Date: " . date('d/m/Y H:i:s') . "
";

$headers = "From: $from\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envoyer l'email
$mailSent = @mail($to, $emailSubject, $emailBody, $headers);

if ($mailSent) {
    echo json_encode(['message' => 'Message envoyé avec succès !']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur lors de l\'envoi du message. Veuillez réessayer.']);
}
?>
