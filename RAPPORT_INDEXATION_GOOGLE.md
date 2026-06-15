# Rapport d'audit – Indexation Google
## Site : Electrotech (https://electrotechenr.fr)

**Date :** 26 janvier 2026  
**Framework :** Next.js 14 (App Router), export statique (SSG)

---

## 1. Fichier robots.txt

### Présence et contenu

| Élément | Statut |
|--------|--------|
| Fichier présent | Oui (`public/robots.txt`) |
| Copié dans `out/` au build | Oui |

**Contenu actuel :**
```
User-agent: *
Allow: /

Sitemap: https://electrotechenr.fr/sitemap.xml
```

### Analyse

- **Disallow :** Aucun. Rien ne bloque Googlebot.
- **Allow :** `Allow: /` — tout le site est autorisé au crawl.
- **Sitemap :** URL correcte et domaine cohérent.

### Recommandation

Aucune modification nécessaire. Version correcte pour l’indexation.

---

## 2. Balises meta, headers HTTP et configurations bloquantes

### 2.1 Balises meta "noindex" / "nofollow"

**Recherche dans le code :**

- `app/layout.tsx` : `robots: { index: true, follow: true }` — **indexation et suivi des liens activés**.
- Aucune balise `noindex`, `nofollow` ou `none` sur les pages analysées.

**Verdict :** Aucun blocage côté meta robots.

### 2.2 Headers HTTP

**Fichier `.htaccess` (production) :**

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy`, `Content-Security-Policy`, `Strict-Transport-Security`, `Permissions-Policy`

Aucun header du type `X-Robots-Tag: noindex` ou équivalent. Aucun header identifié comme bloquant l’indexation.

### 2.3 Fichier .htaccess et règles serveur

- Aucune règle `Disallow` ou blocage des crawlers.
- Règles principales : MIME, cache, sécurité, redirection HTTPS, routage SPA.
- Les fichiers statiques (HTML, JS, CSS, images, `sitemap.xml`, `robots.txt`) sont servis correctement.

**Verdict :** Aucune configuration serveur bloquant Google.

---

## 3. Sitemap, robots.txt, meta title/description, H1

### 3.1 Sitemap XML

| Élément | Statut |
|--------|--------|
| Fichier sitemap | Oui (`app/sitemap.ts` → génère `out/sitemap.xml`) |
| Accessible en production | Oui (après déploiement) |
| Format | XML valide, schéma sitemaps.org |
| Domaine des URLs | `https://electrotechenr.fr` |

**Pages listées (13 URLs) :**
- `/`
- `/qui-sommes-nous`
- `/panneaux-solaires`
- `/panneaux-solaires/stockage-autoconsommation`
- `/panneaux-solaires/autoconsommation`
- `/panneaux-solaires/equiper-mon-entreprise`
- `/equiper-mon-entreprise`
- `/chercher-un-prestataire`
- `/nos-realisations`
- `/contact`
- `/mentions-legales`
- `/confidentialite`
- `/cgv`

### 3.2 Lien sitemap dans robots.txt

- Ligne présente : `Sitemap: https://electrotechenr.fr/sitemap.xml`
- URL absolue et cohérente avec le domaine.

**Verdict :** Correct.

### 3.3 Meta title et meta description par page

| Page | Meta title | Meta description |
|------|------------|-------------------|
| Accueil | Oui (page.tsx) | Oui |
| Layout global | Oui (layout.tsx) | Oui |
| Qui sommes-nous | Oui (layout) | Oui |
| Contact | Oui (layout) | Oui |
| Nos réalisations | Oui (layout) | Oui |
| Chercher un prestataire | Oui (layout) | Oui |
| Panneaux solaires | Oui (layout) | Oui |
| Stockage / autoconsommation | Oui (layout) | Oui |
| Équiper mon entreprise | Oui (layouts) | Oui |
| Mentions légales | Oui (page) | Oui |
| CGV | Oui (page) | Oui |
| Confidentialité | Oui (layout ou page) | Oui |

**Verdict :** Toutes les pages ont un meta title et une meta description.

### 3.4 Balises H1

| Page | H1 | Fichier / composant |
|------|----|----------------------|
| Accueil | "Solaire photovoltaïque" | `Hero.tsx` |
| Contact | "Contactez-nous" | `contact/page.tsx` |
| Qui sommes-nous | Via HeroReusable (titre page) | `HeroReusable.tsx` (balise `<h1>`) |
| Nos réalisations | Via HeroReusable | Idem |
| Chercher un prestataire | Via HeroReusable | Idem |
| Stockage / autoconsommation | Via HeroReusable | Idem |
| Mentions légales | "Mentions Légales" | `mentions-legales/page.tsx` |
| CGV | "Conditions Générales de Vente" | `cgv/page.tsx` |

**Verdict :** H1 présents et cohérents avec le contenu de chaque page.

---

## 4. Framework et mode de rendu (React / Next.js)

### Stack

- **Framework :** Next.js 14 (React), App Router.
- **Mode de build :** `output: 'export'` dans `next.config.js` → **export statique (SSG)**.

### Type de rendu

- **SSG (Static Site Generation) :** Toutes les pages sont pré-rendues au build.
- **Pas de CSR pur :** Le HTML est généré côté build, pas uniquement côté client.
- **Contenu dans le HTML :** Texte, titres, meta et structure sont présents dans les fichiers HTML générés dans `out/`.

### Lisibilité par Google

- Les crawlers reçoivent du HTML complet.
- Pas de dépendance au JavaScript pour afficher le contenu principal.
- **Verdict :** Site adapté à l’indexation (SEO-friendly).

### Si le site avait été 100 % CSR (non recommandé)

- Contenu chargé uniquement après exécution du JS.
- Risque de contenu peu ou pas indexé.
- **Solution recommandée :** Utiliser le SSG (comme actuellement) ou du SSR pour les pages importantes.

---

## 5. Erreurs fréquentes

### 5.1 Canonical

- **Layout racine (`app/layout.tsx`) :** `alternates: { canonical: "/" }` → canonical uniquement pour la page d’accueil.
- **Autres pages :** Pas de `alternates.canonical` explicite dans les layouts/pages vérifiés.
- **Impact :** Avec `metadataBase` défini, Next.js peut résoudre des URLs canoniques pour les autres pages selon la doc ; en pratique, ajouter un canonical explicite par page (ou par layout) renforce la gestion des doublons.

**Recommandation :** Optionnel mais utile : définir une URL canonique explicite pour les pages importantes (ex. `/contact`, `/qui-sommes-nous`, etc.) pour éviter tout doublon (query params, trailing slash, etc.).

### 5.2 Pages en double / redirections

- **`/panneaux-solaires/autoconsommation`** : Redirection 307 vers `/panneaux-solaires/stockage-autoconsommation`. Les deux URLs sont dans le sitemap. Google suivra la redirection ; on peut retirer l’URL qui redirige du sitemap pour simplifier.
- **`/equiper-mon-entreprise`** et **`/panneaux-solaires/equiper-mon-entreprise`** : Toutes deux dans le sitemap. Si le contenu est identique, définir une canonical vers une seule URL évite le duplicate content.

**Recommandation :**  
- Retirer `/panneaux-solaires/autoconsommation` du sitemap (page = simple redirection).  
- Pour équiper mon entreprise : choisir une URL canonique et la refléter en meta canonical.

### 5.3 Pages vides ou non crawlables

- Aucune page vide détectée.
- Pas de contenu masqué par défaut (ex. noindex) qui rendrait une page inutile pour l’indexation.

### 5.4 Assets bloqués

- **robots.txt :** Aucun `Disallow` sur `/_next/`, `/img/`, `/api/` (côté crawl ; `/api/` peut rester crawlable ou non selon objectif).
- **.htaccess :** Pas de blocage des ressources statiques.
- **Verdict :** JS, CSS et images ne sont pas bloqués pour le chargement des pages.

---

## 6. Tableau récapitulatif

| Problème détecté | Fichier / zone | Conséquence SEO | Solution recommandée |
|------------------|----------------|------------------|------------------------|
| Aucun | — | — | — |
| Canonical uniquement sur l’accueil | `app/layout.tsx` | Risque limité de doublons (URLs alternatives) | Ajouter `alternates.canonical` dans les layouts des pages importantes |
| URL de redirection dans le sitemap | `app/sitemap.ts` | Sitemap contient une URL qui redirige | Retirer `/panneaux-solaires/autoconsommation` du sitemap |
| Deux URLs “équiper mon entreprise” | `app/sitemap.ts` + pages | Risque duplicate content si contenu identique | Définir une URL canonique (ex. `/panneaux-solaires/equiper-mon-entreprise`) et canonical meta sur l’autre page |

### Points déjà corrects (aucune action bloquante)

- robots.txt présent, sans Disallow, Sitemap correct.
- Aucune meta noindex/nofollow bloquante.
- Aucun header ni .htaccess bloquant l’indexation.
- sitemap.xml présent et lien correct dans robots.txt.
- Meta title et meta description sur toutes les pages.
- H1 cohérents et un par page.
- Site en SSG (Next.js export statique), contenu lisible par Google.
- Pas de pages vides ou non crawlables identifiées.
- Assets non bloqués.

---

## 7. Plan d’action

### À faire en priorité (recommandé)

1. **Sitemap**  
   - Retirer l’URL `/panneaux-solaires/autoconsommation` du sitemap (page = redirection uniquement).

2. **Canonical (optionnel mais conseillé)**  
   - Ajouter une URL canonique explicite pour les principales pages (contact, qui-sommes-nous, nos-realisations, chercher-un-prestataire, panneaux-solaires, etc.) dans leurs layouts ou pages.

### Optionnel (amélioration)

3. **Éviter le duplicate content “équiper mon entreprise”**  
   - Choisir une URL principale (ex. `/panneaux-solaires/equiper-mon-entreprise`).  
   - Sur l’autre page (ex. `/equiper-mon-entreprise`), ajouter une redirection ou au minimum une balise canonical vers l’URL choisie.

4. **Vérification post-déploiement**  
   - Tester `https://electrotechenr.fr/robots.txt` et `https://electrotechenr.fr/sitemap.xml`.  
   - Soumettre le sitemap dans Google Search Console.  
   - Vérifier l’indexation des pages principales après quelques jours.

### Déjà bon (à conserver)

- robots.txt et sitemap corrects.
- Pas de noindex/nofollow bloquant.
- Pas de blocage côté headers ou .htaccess.
- Meta title et description sur toutes les pages.
- H1 cohérents.
- Rendu SSG et contenu lisible par Google.
- Fichier de vérification Google Search Console en place (`googlea17c85930f103b70.html`).

---

**Conclusion :** Le site est en bonne posture pour être indexé par Google. Aucun blocage critique ; les ajustements proposés (sitemap, canonical, gestion des doublons) sont des optimisations pour renforcer la clarté du crawl et éviter le duplicate content.
