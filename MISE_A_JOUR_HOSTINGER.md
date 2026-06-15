# Mise à jour Hostinger – Electrotech

Ce guide permet de préparer et d’uploader une **mise à jour complète** du site sur Hostinger (images, pages, styles, scripts, formulaires PHP, .htaccess).

---

## Ce qui est inclus dans le package

Le dossier **`out/`** (ou l’archive **`electrotech-hostinger.zip`**) contient :

| Élément | Contenu |
|--------|---------|
| **Pages HTML** | `index.html` + toutes les pages (qui-sommes-nous, panneaux-solaires, contact, nos-realisations, chercher-un-prestataire, etc.) |
| **Assets Next.js** | `_next/` (CSS, JavaScript) |
| **Images** | `img/` : Bâtimentprofessionnel.jpg, chantier.png, Champs2.jpg, champs.jpg, champs3.jpg, detail.png, Entrepôtlogistique.jpg, renfort.jpg, Siteindustriel.jpg, logo.png, ATEC.png, MMALOGO.png, ETN.png, etudebureau.png, stockage.png, etc. + vidéos (electrotechmp4.mp4, equiper.mp4, pretatairev2.mp4, etc.) + certifications (.avif) |
| **Formulaires PHP** | `api/` : contact.php, contact-entreprise.php, contact-prestataire.php |
| **Fichiers racine** | `robots.txt`, `sitemap.xml` (si généré), `.htaccess` |
| **.htaccess** | Règles Apache (MIME, cache, sécurité, routage SPA, HTTPS) |

---

## Méthode 1 : Script automatique (recommandé)

### Sous Windows

**Option A – Fichier batch :**
```batch
build-hostinger.bat
```
Double-clic ou dans une invite de commandes à la racine du projet.

**Option B – PowerShell :**
```powershell
.\build-hostinger.ps1
```

Le script :
1. Nettoie les anciens `out/` et `electrotech-hostinger.zip`
2. Lance `npm run build` (export statique Next.js)
3. Copie `.htaccess` dans `out/`
4. Crée `electrotech-hostinger.zip` avec tout le contenu de `out/`

En cas d’erreur au build, corriger le projet puis relancer le script.

---

## Méthode 2 : À la main

```batch
# 1. Build
npm run build

# 2. Copier .htaccess dans out
copy .htaccess out\.htaccess

# 3. (Optionnel) Créer une archive du contenu de out
# Sous PowerShell :
Compress-Archive -Path "out\*" -DestinationPath "electrotech-hostinger.zip" -Force
```

---

## Upload sur Hostinger

### Via File Manager (hPanel)

1. Aller dans **Fichiers** → **Gestionnaire de fichiers** → **`public_html`**.
2. **Sauvegarder** l’ancien `.htaccess` si vous l’aviez modifié.
3. **Supprimer** tout le contenu de `public_html` (sauf un `.htaccess` à conserver si besoin).
4. **Upload** :
   - **Si vous avez `electrotech-hostinger.zip`** : uploader le zip dans `public_html`, puis **Extraire** (bouton « Extract »). S’assurer que le contenu (index.html, _next, img, api, .htaccess, etc.) est **à la racine** de `public_html`, pas dans un sous-dossier.
   - **Si vous uploadez le dossier `out/`** : envoyer **tout le contenu** de `out/` (fichiers et dossiers) dans `public_html`.

### Via FTP (FileZilla, etc.)

1. Se connecter au FTP Hostinger.
2. Aller dans `public_html/`.
3. Vider le répertoire (sauvegarder `.htaccess` si personnalisé).
4. Envoyer **tout le contenu** de `out/` (ou le contenu extrait de `electrotech-hostinger.zip`) dans `public_html/`.

---

## Structure attendue dans `public_html/`

Après mise à jour, vous devez avoir par exemple :

```
public_html/
├── index.html
├── .htaccess
├── _next/
│   ├── static/
│   └── ...
├── img/
│   ├── Bâtimentprofessionnel.jpg
│   ├── chantier.png
│   ├── Champs2.jpg
│   ├── champs.jpg
│   ├── champs3.jpg
│   ├── detail.png
│   ├── Entrepôtlogistique.jpg
│   ├── renfort.jpg
│   ├── Siteindustriel.jpg
│   ├── logo.png
│   ├── ATEC.png
│   ├── MMALOGO.png
│   ├── ETN.png
│   ├── etudebureau.png
│   ├── stockage.png
│   ├── *.avif, *.mp4, etc.
│   └── ...
├── api/
│   ├── contact.php
│   ├── contact-entreprise.php
│   └── contact-prestataire.php
├── qui-sommes-nous/
│   └── index.html
├── panneaux-solaires/
│   ├── index.html
│   ├── stockage-autoconsommation/
│   │   └── index.html
│   └── ...
├── nos-realisations/
│   └── index.html
├── chercher-un-prestataire/
│   └── index.html
├── contact/
│   └── index.html
├── mentions-legales/
│   └── index.html
├── confidentialite/
│   └── index.html
├── cgv/
│   └── index.html
├── equiper-mon-entreprise/
│   └── index.html
└── robots.txt
```

---

## Vérifications après mise à jour

- [ ] Page d’accueil et toutes les pages (menu, liens) s’affichent.
- [ ] Images (chantiers, logos, vidéos) se chargent.
- [ ] Formulaires (contact, entreprise, prestataire) envoient bien les emails.
- [ ] Pas de 404 sur les routes (ex. `/nos-realisations/`, `/panneaux-solaires/stockage-autoconsommation/`).
- [ ] HTTPS et `.htaccess` (redirection, cache, sécurité) actifs.

---

## Dépannage

| Problème | Piste |
|----------|--------|
| **404 sur les pages** | Vérifier que `.htaccess` est bien à la racine de `public_html` et que les règles de réécriture SPA sont présentes. |
| **Images 404** | Vérifier que tout le dossier `img/` (et sous-dossiers) a été uploadé dans `public_html/img/`. |
| **CSS/JS ne chargent pas** | Vérifier que `_next/` a bien été uploadé. |
| **Formulaires ne marchent pas** | Vérifier `api/` (contact.php, contact-entreprise.php, contact-prestataire.php), permissions (644/755) et que `mail()` PHP fonctionne. |
| **Build échoue en local** | Vérifier Node/npm, `npm install`, et qu’il n’y a pas d’erreurs TypeScript/ESLint dans le projet. |

---

## Rappel

- **Ne pas** envoyer `node_modules/`, `.next/`, `package.json`, ou le code source.
- **Envoyer uniquement** le contenu de `out/` (ou l’équivalent extrait de `electrotech-hostinger.zip`) dans `public_html/`.

---

*Dernière mise à jour : janvier 2025*
