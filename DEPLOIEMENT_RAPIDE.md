# ⚡ DÉPLOIEMENT RAPIDE SUR HOSTINGER

## 🎯 EN 3 ÉTAPES

### 1️⃣ BUILD EN LOCAL

```bash
# Dans le dossier du projet
rm -rf .next out node_modules
npm install
npm run build
```

✅ **Résultat :** Dossier `out/` créé

---

### 2️⃣ UPLOAD SUR HOSTINGER

**Via FTP (FileZilla) :**

1. Connectez-vous à `public_html/`
2. **Supprimez tout** (sauf `.htaccess` si existant)
3. **Upload TOUT le contenu de `out/`** dans `public_html/`
4. **Upload aussi `public/api/*.php`** dans `public_html/api/`
5. **Upload `.htaccess`** à la racine de `public_html/`

---

### 3️⃣ VÉRIFIER

Visitez votre site et testez :
- ✅ Les pages s'affichent
- ✅ Les formulaires envoient des emails
- ✅ Le menu fonctionne

---

## 📁 FICHIERS À UPLOADER

```
public_html/
├── Tout le contenu de out/
├── api/
│   ├── contact.php
│   ├── contact-entreprise.php
│   └── contact-prestataire.php
└── .htaccess
```

---

## ⚠️ IMPORTANT

- ❌ **NE PAS** uploader `node_modules/`
- ❌ **NE PAS** uploader `.next/`
- ❌ **NE PAS** uploader `package.json`
- ✅ **UNIQUEMENT** le contenu de `out/` + les scripts PHP

---

**C'est tout !** 🎉
