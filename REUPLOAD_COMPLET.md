# 📤 RE-UPLOAD COMPLET SUR HOSTINGER

## ✅ PROCÉDURE SIMPLE - TOUT RE-UPLOADER

### 🟢 ÉTAPE 1 : Nettoyer et rebuilder (en local)

```bash
cd C:\Users\chetouane.n\Desktop\electrotechernp
rm -rf .next out node_modules
npm install
npm run build
```

✅ **Résultat :** Dossier `out/` créé avec tous les fichiers

---

### 🟢 ÉTAPE 2 : Supprimer TOUT sur Hostinger

**Via FTP (FileZilla) :**

1. **Connectez-vous** à votre FTP Hostinger
2. **Allez dans `public_html/`**
3. **SÉLECTIONNEZ TOUT** (Ctrl+A)
4. **SUPPRIMEZ TOUT** (Suppr ou F8)
   - ⚠️ **ATTENTION :** Ne supprimez PAS les dossiers système comme `.well-known/` si ils existent
   - Supprimez uniquement le contenu que vous avez uploadé

---

### 🟢 ÉTAPE 3 : Upload TOUT le contenu de `out/`

**Important :** Upload le **CONTENU** de `out/`, pas le dossier `out/` lui-même !

**Structure à uploader :**

```
public_html/                    ← Vous êtes ici
├── index.html                  ← Upload depuis out/
├── _next/                      ← Upload depuis out/_next/
│   └── static/
│       ├── css/
│       ├── chunks/
│       └── media/
├── img/                        ← Upload depuis out/img/
├── api/                        ← Upload depuis out/api/
│   ├── contact.php
│   ├── contact-entreprise.php
│   └── contact-prestataire.php
├── qui-sommes-nous/
├── panneaux-solaires/
├── chercher-un-prestataire/
├── nos-realisations/
├── contact/
├── robots.txt
├── sitemap.xml
└── .htaccess                   ← IMPORTANT : Upload depuis la racine du projet
```

---

### 🟢 ÉTAPE 4 : Upload le `.htaccess`

**CRUCIAL :** Le fichier `.htaccess` doit être uploadé depuis la **racine du projet** (pas depuis `out/`)

1. Dans FileZilla, allez dans `C:\Users\chetouane.n\Desktop\electrotechernp\`
2. Trouvez le fichier `.htaccess`
3. **Glissez-le** dans `public_html/` sur le serveur
4. **Remplacez** s'il existe déjà

---

## 📋 CHECKLIST POST-UPLOAD

Après l'upload, vérifiez :

- [ ] Le fichier `.htaccess` est bien dans `public_html/` (pas dans un sous-dossier)
- [ ] Le dossier `_next/` existe dans `public_html/`
- [ ] Le dossier `img/` existe dans `public_html/`
- [ ] Le dossier `api/` existe dans `public_html/` avec les 3 fichiers PHP
- [ ] Le fichier `index.html` existe dans `public_html/`

---

## 🧪 TEST IMMÉDIAT

### Test 1 : Vérifier un fichier CSS directement

Ouvrez dans votre navigateur :
```
https://lawngreen-lion-258080.hostingersite.com/_next/static/css/3688719039bf1e2e.css
```

**Résultat attendu :** Vous devriez voir le code CSS (pas du HTML)

### Test 2 : Vider le cache et recharger

1. **Videz complètement le cache** : `Ctrl + Shift + Suppr` → Cochez "Images et fichiers en cache" → Effacer
2. **Rechargez la page** : `Ctrl + Shift + R` (ou `Ctrl + F5`)
3. **Ouvrez la console** (F12) → Onglet "Console"
4. Les erreurs MIME type devraient avoir disparu

---

## ⚠️ SI ÇA NE MARCHE TOUJOURS PAS

### Vérification 1 : Le `.htaccess` est-il bien lu ?

1. Créez un fichier `test.php` dans `public_html/` :
```php
<?php phpinfo(); ?>
```

2. Visitez `https://lawngreen-lion-258080.hostingersite.com/test.php`
3. Cherchez "mod_rewrite" → doit être "enabled"
4. **Supprimez le fichier test.php après**

### Vérification 2 : Les permissions

Vérifiez les permissions via FTP :
- `.htaccess` : **644**
- Dossiers : **755**
- Fichiers : **644**

### Vérification 3 : Contactez le support Hostinger

Si rien ne fonctionne, contactez le support avec ce message :

```
Bonjour,

J'ai un problème avec mon site Next.js en export statique sur Hostinger.

Les fichiers JavaScript et CSS sont servis avec le type MIME 'text/html' 
au lieu de 'application/javascript' et 'text/css', ce qui empêche 
le site de fonctionner.

J'ai configuré un fichier .htaccess avec les types MIME corrects et 
les règles de routing, mais le problème persiste.

Pouvez-vous vérifier :
1. Si les fichiers .htaccess sont bien pris en compte sur mon compte ?
2. Si le module mod_rewrite est activé ?
3. Si le module mod_mime est activé ?
4. S'il y a des restrictions sur la configuration Apache ?

Merci de votre aide.
```

---

## 🎯 RÉSUMÉ RAPIDE

1. ✅ **Rebuilder** en local : `npm run build`
2. ✅ **Supprimer TOUT** dans `public_html/` sur Hostinger
3. ✅ **Upload TOUT** le contenu de `out/` dans `public_html/`
4. ✅ **Upload `.htaccess`** depuis la racine du projet
5. ✅ **Vider le cache** du navigateur
6. ✅ **Tester** le site

---

**C'est tout ! Après cette procédure complète, le site devrait fonctionner correctement.** 🚀
