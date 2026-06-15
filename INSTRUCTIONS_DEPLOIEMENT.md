# ⚠️ STOP - NE PAS BUILDER SUR HOSTINGER

## ❌ ERREUR ACTUELLE

Vous essayez de builder sur Hostinger, ce qui génère :
```
Permission denied
ERROR: Failed to build the application
```

**C'est NORMAL** - Hostinger bloque l'exécution de `next build`.

---

## ✅ SOLUTION : BUILDER EN LOCAL

### 🟢 ÉTAPE 1 : Sur votre PC (PAS sur Hostinger)

Ouvrez un terminal sur votre PC et allez dans le dossier du projet :

```bash
cd C:\Users\chetouane.n\Desktop\electrotechernp
```

### 🟢 ÉTAPE 2 : Nettoyer et builder

```bash
# Nettoyer les anciens builds
rm -rf .next out node_modules

# Installer les dépendances (sur votre PC)
npm install

# Builder le site (sur votre PC)
npm run build
```

✅ **Résultat :** Un dossier `out/` est créé avec tous les fichiers statiques

### 🟢 ÉTAPE 3 : Vérifier le build

```bash
# Tester localement (optionnel)
npx serve out
```

Ouvrez `http://localhost:3000` pour vérifier que tout fonctionne.

---

## 📤 ÉTAPE 4 : Upload sur Hostinger

### Via FTP (FileZilla) :

1. **Connectez-vous à votre FTP Hostinger**
   - Hôte : `ftp.votre-domaine.com` ou l'IP fournie par Hostinger
   - Utilisateur : Votre identifiant Hostinger
   - Mot de passe : Votre mot de passe Hostinger

2. **Allez dans `public_html/`**

3. **Supprimez TOUT le contenu existant** (sauf `.htaccess` si vous en avez un)

4. **Upload TOUT le contenu du dossier `out/`** dans `public_html/`

5. **Upload aussi :**
   - `public/api/*.php` → `public_html/api/`
   - `.htaccess` → `public_html/.htaccess`

---

## 📁 STRUCTURE FINALE SUR HOSTINGER

```
public_html/
├── index.html
├── _next/
│   └── (tous les fichiers CSS/JS)
├── img/
│   └── (toutes vos images)
├── api/
│   ├── contact.php
│   ├── contact-entreprise.php
│   └── contact-prestataire.php
├── qui-sommes-nous/
│   └── index.html
├── panneaux-solaires/
│   └── (toutes les pages)
├── chercher-un-prestataire/
│   └── index.html
├── nos-realisations/
│   └── index.html
├── contact/
│   └── index.html
└── .htaccess
```

---

## ⚠️ CE QU'IL NE FAUT PAS UPLOADER

- ❌ `node_modules/` → **JAMAIS**
- ❌ `.next/` → **JAMAIS**
- ❌ `package.json` → **PAS NÉCESSAIRE**
- ❌ `next.config.js` → **PAS NÉCESSAIRE**
- ❌ `tsconfig.json` → **PAS NÉCESSAIRE**
- ❌ Tous les fichiers sources (`.tsx`, `.ts`) → **PAS NÉCESSAIRE**

**UNIQUEMENT** le contenu de `out/` + les scripts PHP + `.htaccess`

---

## 🔄 PROCESSUS COMPLET

```
┌─────────────────┐
│  VOTRE PC       │
│                 │
│  1. npm install │
│  2. npm build   │
│  3. Dossier out │
└────────┬────────┘
         │
         │ Upload FTP
         ▼
┌─────────────────┐
│  HOSTINGER      │
│                 │
│  public_html/   │
│  (fichiers      │
│   statiques)    │
└─────────────────┘
```

---

## ✅ CHECKLIST POST-DÉPLOIEMENT

Après l'upload, vérifiez :

- [ ] Le site s'affiche : `https://votre-domaine.com`
- [ ] Les pages fonctionnent : `/qui-sommes-nous/`, `/contact/`, etc.
- [ ] Les images se chargent
- [ ] Le menu fonctionne
- [ ] Les formulaires envoient des emails (testez un formulaire)

---

## 🐛 SI ÇA NE FONCTIONNE PAS

### Problème : Erreur 404 sur les pages

**Solution :** Vérifiez que `.htaccess` est bien uploadé et contient les règles de rewrite.

### Problème : Les formulaires ne fonctionnent pas

**Solution :** 
1. Vérifiez que les fichiers PHP sont dans `public_html/api/`
2. Vérifiez les permissions (755 pour dossiers, 644 pour fichiers)
3. Testez PHP mail() avec un script de test

### Problème : CSS/JS ne se charge pas

**Solution :** Vérifiez que le dossier `_next/` est bien uploadé dans `public_html/_next/`

---

## 📝 RÉSUMÉ

1. ✅ **Builder EN LOCAL** sur votre PC
2. ✅ **Upload UNIQUEMENT** le dossier `out/`
3. ❌ **NE JAMAIS** builder sur Hostinger
4. ❌ **NE JAMAIS** uploader `node_modules/`

---

**C'est tout !** 🎉

Si vous avez encore des erreurs, c'est probablement parce que vous essayez de builder sur Hostinger. **Arrêtez ça** et suivez les étapes ci-dessus.
