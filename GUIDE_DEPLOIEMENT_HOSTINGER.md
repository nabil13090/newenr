# 🚀 GUIDE DE DÉPLOIEMENT SUR HOSTINGER

**Mode :** Export statique Next.js  
**Hébergement :** Hostinger mutualisé  
**Date :** 2025-01-20

---

## ⚠️ IMPORTANT - RÈGLES D'OR

### ❌ À NE JAMAIS FAIRE SUR HOSTINGER
- ❌ `npm install` sur le serveur
- ❌ `npm run build` sur le serveur
- ❌ Upload de `node_modules/`
- ❌ Upload de `.next/`
- ❌ Upload de `package.json` (optionnel, pas nécessaire)

### ✅ À FAIRE
- ✅ Build en LOCAL sur votre PC
- ✅ Upload uniquement le dossier `out/`
- ✅ Upload des scripts PHP pour les formulaires

---

## 📋 ÉTAPE PAR ÉTAPE

### 1️⃣ PRÉPARATION EN LOCAL

Sur votre PC, dans le dossier du projet :

```bash
# Nettoyer les anciens builds
rm -rf .next out node_modules

# Installer les dépendances
npm install

# Builder le site (génère le dossier out/)
npm run build
```

✅ **Résultat :** Un dossier `out/` est créé avec tous les fichiers statiques

---

### 2️⃣ VÉRIFIER LE BUILD

```bash
# Tester localement le build
npx serve out
```

Ouvrez `http://localhost:3000` et vérifiez que tout fonctionne.

---

### 3️⃣ UPLOAD SUR HOSTINGER

#### Via FTP / FileZilla :

1. **Connectez-vous à votre FTP Hostinger**
2. **Allez dans `public_html/`**
3. **Supprimez tout le contenu existant** (sauf `.htaccess` si vous en avez un)
4. **Upload TOUT le contenu du dossier `out/`** dans `public_html/`

#### Structure finale sur Hostinger :

```
public_html/
├── index.html
├── _next/
├── img/
├── api/
│   ├── contact.php
│   ├── contact-entreprise.php
│   └── contact-prestataire.php
├── qui-sommes-nous/
├── panneaux-solaires/
├── contact/
└── .htaccess
```

---

### 4️⃣ CONFIGURER .htaccess

**Créer/modifier `public_html/.htaccess` :**

```apache
# Configuration pour Next.js Static Export sur Hostinger

# Activer la compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache des fichiers statiques
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresDefault "access plus 2 days"
</IfModule>

# Sécurité
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Content-Security-Policy "default-src 'self'; img-src 'self' https: data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self'; frame-ancestors 'self';"
  Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
</IfModule>

# Routing pour SPA Next.js
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Redirection HTTPS (si SSL activé)
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Si le fichier ou dossier existe, l'utiliser directement
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Sinon, rediriger vers index.html (pour le routing Next.js)
  RewriteRule ^(.*)$ /index.html [L]
</IfModule>

# Protection contre les injections
<IfModule mod_rewrite.c>
  RewriteCond %{QUERY_STRING} (\<|%3C).*script.*(\>|%3E) [NC,OR]
  RewriteCond %{QUERY_STRING} GLOBALS(=|\[|\%[0-9A-Z]{0,2}) [OR]
  RewriteCond %{QUERY_STRING} _REQUEST(=|\[|\%[0-9A-Z]{0,2})
  RewriteRule ^(.*)$ - [F,L]
</IfModule>
```

---

### 5️⃣ CONFIGURER LES SCRIPTS PHP

Les scripts PHP sont dans `public/api/` et seront uploadés dans `public_html/api/`.

**Vérifier que PHP mail() fonctionne :**

1. Créez un fichier test : `public_html/test-mail.php`
2. Contenu :
```php
<?php
$to = "votre-email@example.com";
$subject = "Test";
$message = "Test email";
$headers = "From: test@example.com";
mail($to, $subject, $message, $headers);
echo "Email envoyé";
?>
```
3. Visitez `https://votre-site.com/test-mail.php`
4. Vérifiez votre boîte mail
5. **Supprimez le fichier test après vérification**

---

### 6️⃣ VARIABLES D'ENVIRONNEMENT (SMTP — aligné sur le site Electrotech)

Utilisez **les mêmes noms de variables** que sur le site principal (`electrotech` / `env.example.txt`) pour pouvoir recopier la configuration SMTP (Hostinger, Gmail, Resend, etc.).

| Variable | Rôle |
|----------|------|
| `SMTP_HOST` | Serveur (ex. `smtp.hostinger.com` ou `smtp.gmail.com`) |
| `SMTP_PORT` | Port (souvent `587`) |
| `SMTP_USER` | Identifiant de la boîte d’envoi |
| `SMTP_PASS` | Mot de passe ou clé API selon le fournisseur |
| `SMTP_FROM` | Adresse « Expéditeur » affichée (ex. `noreply@votre-domaine.fr`) |
| `CONTACT_EMAIL` | Boîte qui reçoit les formulaires |

1. **hPanel Hostinger** → **Avancé** → **Variables d’environnement** (recommandé pour les secrets).
2. **Alternative** : fichier `public_html/api/.htaccess` — pratique pour `CONTACT_EMAIL` / `SMTP_FROM` uniquement ; **évitez d’y mettre `SMTP_PASS`** (fichier souvent lisible).

```apache
# Exemple public_html/api/.htaccess (sans mot de passe SMTP)
SetEnv CONTACT_EMAIL contact@votre-domaine.fr
SetEnv SMTP_FROM noreply@votre-domaine.fr
```

En local, copiez `env.example.txt` vers `.env` et remplissez les mêmes valeurs que sur l’autre site si vous partagez le compte d’envoi.

---

## 🔍 VÉRIFICATIONS POST-DÉPLOIEMENT

### ✅ Checklist

- [ ] Le site s'affiche correctement
- [ ] Toutes les pages sont accessibles
- [ ] Les images se chargent
- [ ] Le menu fonctionne
- [ ] Les formulaires envoient des emails
- [ ] Le routing fonctionne (pas d'erreur 404 sur les pages)
- [ ] HTTPS est activé (si SSL configuré)
- [ ] Les headers de sécurité sont présents

### 🧪 Tests à faire

1. **Tester chaque formulaire :**
   - Formulaire contact
   - Formulaire entreprise
   - Formulaire prestataire

2. **Vérifier les headers de sécurité :**
   ```bash
   curl -I https://votre-site.com
   ```
   Vérifier la présence de :
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: SAMEORIGIN`
   - `Strict-Transport-Security`

3. **Tester le routing :**
   - Visiter directement `/qui-sommes-nous/`
   - Visiter `/panneaux-solaires/equiper-mon-entreprise/`
   - Vérifier qu'il n'y a pas d'erreur 404

---

## 🐛 RÉSOLUTION DE PROBLÈMES

### Problème : Erreur 404 sur les pages

**Solution :** Vérifier que `.htaccess` contient bien les règles de rewrite pour SPA

### Problème : Les formulaires ne fonctionnent pas

**Solution :** 
1. Vérifier que les fichiers PHP sont bien dans `public_html/api/`
2. Vérifier les permissions (755 pour les dossiers, 644 pour les fichiers)
3. Vérifier que PHP mail() fonctionne

### Problème : Images ne se chargent pas

**Solution :** Vérifier que le dossier `img/` est bien uploadé dans `public_html/img/`

### Problème : CSS/JS ne se charge pas

**Solution :** Vérifier que le dossier `_next/` est bien uploadé

---

## 📦 STRUCTURE FINALE SUR HOSTINGER

```
public_html/
├── index.html                    # Page d'accueil
├── _next/                        # Assets Next.js (CSS, JS)
│   ├── static/
│   └── ...
├── img/                          # Images
│   ├── logo.png
│   ├── *.jpg
│   └── ...
├── api/                          # Scripts PHP pour formulaires
│   ├── contact.php
│   ├── contact-entreprise.php
│   └── contact-prestataire.php
├── qui-sommes-nous/
│   └── index.html
├── panneaux-solaires/
│   ├── index.html
│   ├── equiper-mon-entreprise/
│   │   └── index.html
│   ├── autoconsommation/
│   │   └── index.html
│   └── revente-electricite/
│       └── index.html
├── chercher-un-prestataire/
│   └── index.html
├── nos-realisations/
│   └── index.html
├── contact/
│   └── index.html
└── .htaccess                     # Configuration Apache
```

---

## 🔄 PROCESSUS DE MISE À JOUR

Quand vous voulez mettre à jour le site :

1. **En local :**
   ```bash
   npm run build
   ```

2. **Upload uniquement les fichiers modifiés** (ou tout le dossier `out/` si changement majeur)

3. **Vérifier que tout fonctionne**

---

## ✅ AVANTAGES DE CETTE CONFIGURATION

- ✅ Compatible Hostinger mutualisé
- ✅ Pas besoin de Node.js sur le serveur
- ✅ Performance optimale (fichiers statiques)
- ✅ Sécurité maintenue (headers, sanitization)
- ✅ Formulaires fonctionnels (PHP)
- ✅ SEO optimal (pages statiques)

---

## 📝 NOTES IMPORTANTES

1. **Les API routes Next.js ne fonctionnent pas** en static export
   - ✅ Solution : Scripts PHP créés dans `public/api/`

2. **Les images doivent être `unoptimized: true`**
   - ✅ Déjà configuré dans `next.config.js`

3. **Le routing utilise `trailingSlash: true`**
   - ✅ Déjà configuré dans `next.config.js`

4. **Les formulaires utilisent automatiquement PHP en production**
   - ✅ Déjà configuré dans les composants

---

**Fin du guide**

*Pour toute question, référez-vous à ce guide ou contactez le support Hostinger.*
