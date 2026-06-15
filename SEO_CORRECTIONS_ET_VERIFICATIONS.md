# Corrections et vérifications SEO – electrotechenr.fr

Ce document répond point par point à l’audit SEO et indique ce qui est déjà en place ou a été corrigé.

---

## 1. Rendu des pages (critique pour le SEO)

**Recommandation audit :** SSR avec `getServerSideProps()` ou SSG avec `getStaticProps()`.

**Situation du site :**
- Le site utilise **Next.js 14 App Router** avec **`output: 'export'`** dans `next.config.js`.
- Toutes les pages sont générées au **build** = **Static Site Generation (SSG)**.
- Il n’y a pas de rendu côté client seul : le HTML est pré-généré.

**Remarque :** `getStaticProps` / `getServerSideProps` concernent le **Pages Router**. En App Router, les pages sans données dynamiques sont statiques par défaut. Aucun changement nécessaire.

---

## 2. HTML envoyé au crawler (View Source)

**Recommandation audit :** Éviter un `<div id="__next"></div>` vide.

**Vérification :**
- Le fichier généré `out/index.html` contient déjà tout le contenu : header, `<main>`, sections, H1, textes, footer.
- Les balises `<title>`, `<meta name="description">`, `<meta name="robots">`, etc. sont présentes dans le `<head>`.
- Le contenu principal est bien dans le HTML initial, pas seulement chargé en JavaScript.

**Conclusion :** Aucun problème de page vide pour Googlebot.

---

## 3. Balises SEO par page

**Recommandation audit :** Utiliser `<Head>` avec title et meta description.

**Situation du site :**
- En **App Router**, on utilise l’API **Metadata** (export `metadata` dans les layouts), pas `next/head`.
- **Layout racine** (`app/layout.tsx`) : title, description, keywords, robots (index, follow), canonical, Open Graph, Twitter Card, google-site-verification.
- **Chaque page** a son propre layout avec : title, description, keywords, openGraph.
- **Canonical** : ajout de `alternates.canonical` sur les pages principales (contact, nos-realisations, qui-sommes-nous, chercher-un-prestataire, panneaux-solaires, stockage-autoconsommation).
- **H1** : présents et cohérents (Hero, HeroReusable, pages légales).

**Conclusion :** Chaque page a un title et une meta description uniques ; les canonicals ont été renforcés.

---

## 4. Sitemap et robots.txt

**Recommandation audit :** Installer `next-sitemap` et générer sitemap + robots.

**Situation du site :**
- **Sitemap** : déjà géré par **`app/sitemap.ts`** (génère `sitemap.xml` avec toutes les URLs).
- **robots.txt** : présent dans **`public/robots.txt`**.
- Pas besoin du package `next-sitemap` : le sitemap natif Next.js suffit.

**Modifications effectuées :**
- URLs du sitemap mises à jour avec **trailing slash** pour correspondre à `trailingSlash: true` dans `next.config.js`.

**À faire de votre côté :** Soumettre (ou resoumettre) l’URL du sitemap dans Google Search Console :  
`https://electrotechenr.fr/sitemap.xml`

---

## 5. Fichier robots.txt

**Recommandation audit :** Ne pas bloquer les pages, indiquer le sitemap.

**Contenu actuel (`public/robots.txt`) :**
```
User-agent: *
Allow: /

Sitemap: https://electrotechenr.fr/sitemap.xml
```

**Conclusion :** Aucun `Disallow`, tout est autorisé ; le sitemap est bien indiqué.

---

## 6. Headers HTTP et balises d’indexation

**Recommandation audit :** Pages en 200 OK, pas de noindex, pas de blocage.

**Vérifications :**
- Aucune balise **noindex** dans les metadata (robots = `index, follow`).
- **.htaccess** : pas de `X-Robots-Tag: noindex` ; règles de réécriture pour servir les fichiers statiques et le routage SPA.
- Les pages statiques sont servies en **200 OK** par le serveur (fichiers HTML réels).

**Conclusion :** Aucun blocage côté headers ou meta.

---

## 7. Protections anti-bot (“verifying you are not a robot”)

**Recommandation audit :** Ne pas bloquer Googlebot (Googlebot, Googlebot-Mobile, Googlebot-Image).

**Vérifications dans le projet :**
- Aucune page “verifying you are not a robot” dans le code du site.
- **middleware.ts** : `matcher: []` → le middleware Next.js ne s’exécute pas en production (export statique).
- **robots.txt** : `Allow: /` pour tout `User-agent: *`, donc y compris Googlebot.
- **.htaccess** : aucune règle bloquant un user-agent.

**Si une telle page apparaît encore :** Elle peut venir de **Hostinger** (sécurité / anti-DDoS) ou d’un **CDN**. À vérifier dans le panneau Hostinger (sécurité, pare-feu, “Under Attack”, etc.) et éventuellement autoriser explicitement les user-agents Google si une option existe.

---

## 8. Maillage interne

**Recommandation audit :** Toutes les pages accessibles via menu, liens internes et sitemap.

**Vérifications :**
- **Header** : liens vers Accueil, Autoconsommation, Prestataire, Nos réalisations, Qui sommes-nous, Contact.
- **Footer** : liens vers Mentions légales, Politique de confidentialité, CGV + ancres (services, contact, etc.).
- **Sitemap** : 13 URLs (accueil, principales pages, pages légales).
- Aucune page importante n’est orpheline.

**Conclusion :** Maillage interne correct.

---

## Résumé des modifications effectuées

| Action | Fichier(s) |
|--------|------------|
| Canonical sur les pages principales | `app/contact/layout.tsx`, `app/nos-realisations/layout.tsx`, `app/qui-sommes-nous/layout.tsx`, `app/chercher-un-prestataire/layout.tsx`, `app/panneaux-solaires/layout.tsx`, `app/panneaux-solaires/stockage-autoconsommation/layout.tsx` |
| Sitemap avec URLs en trailing slash | `app/sitemap.ts` |

---

## Résultat attendu

- **Rendu :** SSG déjà en place ; HTML complet dans le code source.
- **SEO :** Title, description, canonical, robots, sitemap et robots.txt conformes.
- **Crawl :** Aucun blocage intentionnel dans le code ou .htaccess ; si une page “robot” apparaît, elle vient de l’hébergeur/CDN.
- **Indexation :** Après un nouveau build et déploiement, resoumettre le sitemap dans Google Search Console et demander une inspection des URLs pour accélérer la ré-indexation des pages concernées.

---

*Document généré pour l’audit SEO – electrotechenr.fr*
