# 🚀 Checklist SEO + Sécurité — Next.js Production
> Généré pour un stack Next.js sur hébergement mutualisé Apache.
> Coche chaque point avant le lancement.

---

## 🔒 SÉCURITÉ

### Headers HTTP
- [ ] `Strict-Transport-Security` configuré (HSTS, max-age 2 ans, preload)
- [ ] `X-Frame-Options: DENY` activé
- [ ] `X-Content-Type-Options: nosniff` activé
- [ ] `Content-Security-Policy` configuré et testé sur [csp-evaluator.withgoogle.com](https://csp-evaluator.withgoogle.com)
- [ ] `Referrer-Policy: strict-origin-when-cross-origin` activé
- [ ] `Permissions-Policy` configuré (désactive camera, micro, géoloc)
- [ ] `X-Powered-By` supprimé (`poweredByHeader: false` dans next.config.js)
- [ ] Cross-Origin Policies (COEP, COOP, CORP) configurés
- [ ] Score A+ sur [securityheaders.com](https://securityheaders.com)

### SSL/TLS
- [ ] Certificat SSL valide et non expiré
- [ ] TLS 1.2 minimum (TLS 1.3 recommandé)
- [ ] HTTP redirige vers HTTPS (301)
- [ ] www redirige vers non-www (ou l'inverse, consistant)
- [ ] Site soumis à [hstspreload.org](https://hstspreload.org) (optionnel mais recommandé)

### Variables d'environnement
- [ ] Aucune clé API dans le code source ou les commits Git
- [ ] `.env.local` dans `.gitignore`
- [ ] Variables préfixées `NEXT_PUBLIC_` seulement pour ce qui doit être public
- [ ] Rotation régulière des secrets planifiée

### Dépendances
- [ ] `npm audit` lancé — 0 vulnérabilités critiques
- [ ] `npx depcheck` — pas de dépendances inutiles
- [ ] Dépendances à jour : `npx npm-check-updates`
- [ ] `package-lock.json` ou `yarn.lock` commité

### API
- [ ] Rate limiting activé sur toutes les routes `/api/`
- [ ] Validation des inputs avec Zod ou Yup (jamais de `req.body` brut)
- [ ] Authentification vérifiée côté serveur (jamais juste côté client)
- [ ] Headers CORS restrictifs
- [ ] Pas de données sensibles dans les réponses d'erreur (pas de stack trace en prod)

### Fichiers sensibles
- [ ] `.htaccess` bloque l'accès aux `.env`, `.git`, `.sql`, `.bak`
- [ ] `robots.txt` exclut `/api/`, `/admin/`, `/dashboard/`
- [ ] Pas de `console.log()` avec des données sensibles en production
- [ ] `next.config.js` non accessible depuis le web

### Infrastructure
- [ ] Backups automatiques configurés
- [ ] Accès FTP/SSH sécurisé (clé SSH plutôt que mot de passe)
- [ ] Mot de passe hébergeur fort + 2FA activé
- [ ] Monitoring des uptime (UptimeRobot gratuit ou Better Uptime)

---

## 🔍 SEO TECHNIQUE

### Fondamentaux
- [ ] `sitemap.xml` généré et accessible sur `/sitemap.xml`
- [ ] `robots.txt` présent et correct sur `/robots.txt`
- [ ] Sitemap soumis dans Google Search Console
- [ ] Sitemap soumis dans Bing Webmaster Tools
- [ ] Canonical URLs configurées sur toutes les pages
- [ ] Pas de contenu dupliqué (www/non-www, http/https, trailing slash)

### Balises Meta
- [ ] `<title>` unique par page (50-60 caractères)
- [ ] `<meta name="description">` unique par page (150-160 caractères)
- [ ] Balises Open Graph complètes (og:title, og:description, og:image, og:url)
- [ ] Image OG 1200x630px minimum, < 1Mo
- [ ] Twitter Card configurée
- [ ] `<html lang="fr">` présent
- [ ] Hreflang si site multilingue

### Structured Data
- [ ] Schema.org Organisation ou LocalBusiness présent
- [ ] Schema.org WebSite présent
- [ ] Schema.org BreadcrumbList sur les pages intérieures
- [ ] Schema.org Article sur les pages blog
- [ ] Testé sur [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] Validé sur [validator.schema.org](https://validator.schema.org)

### Performance (Core Web Vitals)
- [ ] **LCP** (Largest Contentful Paint) < 2.5s
  - Images critiques avec `priority` prop sur `<Image>`
  - `<link rel="preload">` sur l'image hero
  - Fonts avec `display: swap`
- [ ] **FID/INP** (Interaction to Next Paint) < 200ms
  - Code splitting activé
  - Pas de JS bloquant au-dessus de la fold
- [ ] **CLS** (Cumulative Layout Shift) < 0.1
  - Dimensions explicites sur toutes les images
  - Pas d'injection de contenu au-dessus du contenu existant
- [ ] Score Lighthouse Mobile ≥ 90 (Performance, SEO, Accessibilité, Best Practices)
- [ ] Testé sur [PageSpeed Insights](https://pagespeed.web.dev)

### Images
- [ ] Composant `<Image>` Next.js utilisé (jamais `<img>` brut)
- [ ] Formats AVIF + WebP configurés dans next.config.js
- [ ] Attribut `alt` présent et descriptif sur toutes les images
- [ ] Pas d'image > 200Ko (hors images haute résolution intentionnelles)
- [ ] Lazy loading actif par défaut (Next.js Image)

### Crawlabilité
- [ ] Toutes les pages importantes sont indexables (`<meta name="robots" content="index, follow">`)
- [ ] Aucun lien cassé (404) — tester avec Screaming Frog ou Ahrefs
- [ ] Profondeur de clic ≤ 3 (toute page accessible en 3 clics depuis l'accueil)
- [ ] Pas de redirect chains (A→B→C — à aplatir en A→C)
- [ ] Navigation interne cohérente (maillage interne)

### Mobile
- [ ] 100% responsive (testé sur mobile réel)
- [ ] Viewport meta présent : `width=device-width, initial-scale=1`
- [ ] Éléments tactiles ≥ 44x44px
- [ ] Pas de contenu masqué sur mobile que Google n'indexe pas

### Accessibilité (impact SEO indirect)
- [ ] Structure de titres logique (H1 → H2 → H3, pas de saut)
- [ ] Un seul H1 par page
- [ ] Contrastes suffisants (AA WCAG)
- [ ] Navigation au clavier fonctionnelle
- [ ] Aria-labels sur les éléments interactifs sans texte

---

## 📊 ANALYTICS & MONITORING

- [ ] Google Search Console configuré et vérifié
- [ ] Google Analytics 4 (ou alternative privacy-first : Plausible, Umami)
- [ ] Alertes configurées pour les erreurs 404 et 500
- [ ] Monitoring des Core Web Vitals en production
- [ ] Tableau de bord de surveillance sécurité (logs d'erreurs consultables)

---

## 🛠️ OUTILS DE VALIDATION

| Outil | URL | Cible |
|-------|-----|-------|
| PageSpeed Insights | pagespeed.web.dev | Score ≥ 90 mobile |
| Security Headers | securityheaders.com | Grade A+ |
| CSP Evaluator | csp-evaluator.withgoogle.com | Pas de vulnérabilité |
| Rich Results Test | search.google.com/test/rich-results | Structured data OK |
| Schema Validator | validator.schema.org | 0 erreur |
| SSL Test | ssllabs.com/ssltest | Grade A+ |
| Mozilla Observatory | observatory.mozilla.org | Grade A |
| GTmetrix | gtmetrix.com | Grade A |
| Lighthouse CI | github.com/GoogleChrome/lighthouse-ci | Automatisé |
| npm audit | `npm audit` | 0 vulnérabilités critiques |

---

## 📦 DÉPENDANCES UTILES À INSTALLER

```bash
# SEO
npm install next-sitemap

# Sécurité
npm install helmet  # si API Express sous-jacente
npm audit fix       # corriger les vulnérabilités connues

# Validation
npm install zod     # validation des inputs API

# Performance
npm install @next/bundle-analyzer  # analyser la taille du bundle
```

### Analyser le bundle :
```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer(nextConfig);
```
```bash
ANALYZE=true npm run build
```

---

## ✅ Commandes pré-déploiement

```bash
# 1. Audit sécurité dépendances
npm audit

# 2. Build production
npm run build

# 3. Générer le sitemap
npm run postbuild   # si next-sitemap configuré en postbuild

# 4. Test Lighthouse en local
npx lighthouse http://localhost:3000 --view

# 5. Vérifier les variables d'env
grep -r "NEXT_PUBLIC_" .env.local  # aucune clé secrète ne doit être là
```

Sous **Windows (PowerShell)**, pour l’étape 5 : `Select-String -Path .env.local -Pattern "NEXT_PUBLIC_"` (ou ouvrir `.env.local` et contrôler manuellement qu’aucune clé secrète n’a le préfixe `NEXT_PUBLIC_`).

---

*Dernière mise à jour : Avril 2026*
