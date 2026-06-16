# Thème WordPress — Trussogne

Thème classique PHP sur mesure, porté de l'application Vite + React (`site/src/`).
Aucun page builder, aucun React côté front. Contenu codé en dur pour ce premier
déploiement (voir « Évolutions possibles »).

## Installation / mise en ligne

1. **Zipper le dossier `trussogne-theme/`** (inclure tout ; exclure `.DS_Store`, `.git`, etc.).
2. WordPress Admin → **Apparence → Thèmes → Ajouter → Téléverser un thème** → choisir le zip → **Installer** → **Activer**.
3. **Créer les pages** avec ces slugs EXACTS (WP associe automatiquement `page-{slug}.php`) :

   | Titre de page          | Slug                    | Modèle utilisé (auto)            |
   |------------------------|-------------------------|----------------------------------|
   | Accueil                | *(voir étape 4)*        | `front-page.php`                 |
   | Le Gîte                | `le-gite`               | `page-le-gite.php`               |
   | Activités              | `activites`             | `page-activites.php`             |
   | À propos               | `a-propos`              | `page-a-propos.php`              |
   | Galerie                | `galerie`               | `page-galerie.php`               |
   | Contact                | `contact`               | `page-contact.php`               |
   | Conditions générales   | `conditions-generales`  | `page-conditions-generales.php`  |

   > Pas besoin de sélectionner le modèle à la main : WP associe `page-{slug}.php` au slug.

4. **Page d'accueil statique** : créer une page « Accueil » (n'importe quel slug), puis
   **Réglages → Lecture → Votre page d'accueil affiche → Une page statique → Page d'accueil : Accueil**.
   `front-page.php` est alors utilisé pour la home.

5. **Vérifier** : home, chaque page, nav mobile (drawer), état scrollé de la nav, widget de
   réservation, galerie (filtres + lightbox), formulaire de contact, accordéon FAQ.

## Contenu éditable (constantes)

Pour ce premier déploiement, les valeurs partagées sont des **constantes PHP** dans `functions.php` :

- `TRUSSOGNE_ELLOHA_URL` — lien de réservation Elloha (nav, CTAs, widget).
- `TRUSSOGNE_PHONE` — `+32 476 222 707`.
- `TRUSSOGNE_EMAIL` — `trussogne@gmail.com` (aussi destinataire du formulaire de contact).

Le reste du contenu (textes, listes d'activités/restaurants, photos de galerie) est codé en dur
dans les templates. Pour le modifier : éditer le tableau PHP correspondant en haut de chaque
`page-*.php`.

## Formulaire de contact

Traité sans plugin par `inc/contact-form.php` :
- Le formulaire POST vers `admin-post.php` (action `trussogne_contact`) avec un nonce.
- Validation + assainissement, honeypot anti-spam, consentement RGPD requis.
- Envoi via `wp_mail()` vers `TRUSSOGNE_EMAIL`, puis redirection avec `?sent=1` (succès) ou `?sent=0` (erreur).

> **À vérifier sur le serveur** : `wp_mail()` doit pouvoir envoyer. Si l'hébergeur ne route pas
> les mails PHP, installer un plugin SMTP (ex. *WP Mail SMTP*) et configurer un expéditeur.

## Widget de réservation

Shortcode `[trussogne_booking]` (`inc/booking-shortcode.php`). Utilisable dans n'importe quel
contenu, widget texte ou Elementor. Le HTML est statique ; `assets/js/main.js` gère les
compteurs (max 9 voyageurs), la date (min = aujourd'hui) et le bouton « Vérifier » qui construit
l'URL Elloha (port verbatim de `buildEllohaUrl()`) et l'ouvre dans un nouvel onglet.

## Architecture / conventions

- **Styles** : approche hybride. `assets/css/theme.css` = `site/src/index.css` copié verbatim
  (classes partagées : `.btn-primary`, `.gallery-grid`, `.field`, lightbox, etc.) + des classes
  extraites pour les éléments que le React stylait en inline selon `useBreakpoint()`.
  Les valeurs **desktop** sont en `style="..."` inline dans les templates ; les variantes
  tablette/mobile sont des `@media` dans `theme.css`.
- **Breakpoints** : les classes extraites du React (`.home-*`, `.gite-*`, `.act-*`, `.ap-*`,
  `page-hero*`, nav, footer, booking) suivent les breakpoints **600/900px** du hook React.
  Les classes héritées de l'index.css (`.ct-*`, `.gite-section`, `.act-section`, `.ap-section`)
  gardent leur cadence d'origine **480/768/1024px**. Cette différence est volontaire (on n'a pas
  refactoré du CSS qui marche) — à unifier seulement si un souci d'affichage apparaît.
- **Images** : `inc/helpers.php` → `trussogne_asset('chemin/relatif.webp')`. Tous les chemins
  `/assets/...` du React deviennent relatifs au dossier `assets/images/`.
- **Hero d'image** : `trussogne_page_hero([...])`. Pages sans hero sombre (Galerie, Contact,
  Conditions générales) : appeler `trussogne_light_hero()` avant `get_header()` → logo vert.
- **JS** : un seul `assets/js/main.js` sans dépendance — nav drawer (Escape, scroll-lock),
  état scrollé, widget de réservation, galerie (filtres + lightbox), scroll-reveal, accordéon FAQ.

## ⚠️ Interactivité React rendue STATIQUE (à décider si réactivation souhaitée)

Plusieurs sections React étaient pilotées par `useState`. En PHP (un seul rendu HTML), elles
sont rendues en version **statique** — le contenu est complet et visible, mais le changement
d'état interactif n'a PAS été porté. Aucun JS n'a été inventé pour ces cas. À réactiver via
`main.js` si désiré :

| Page      | Élément                                   | État statique rendu                              |
|-----------|-------------------------------------------|--------------------------------------------------|
| Accueil   | Slider « Quatre saisons »                 | Affiche Printemps ; onglets inertes              |
| Accueil   | Onglets « Alentours »                     | Affiche la 1ʳᵉ activité ; onglets inertes        |
| Accueil   | Flèches du carrousel d'avis               | Piste scrollable au doigt ; flèches inertes      |
| Le Gîte   | Carrousel photo des chambres (auto-play)  | 1ʳᵉ photo visible ; points/slides inertes        |
| Le Gîte   | Onglets « Alentours »                     | 1ʳᵉ activité ; onglets inertes                   |
| Le Gîte   | Flèches du carrousel d'avis               | idem Accueil                                      |
| Activités | Filtre par catégorie                      | **Toutes** les activités visibles ; pills inertes|
| À propos  | Flèches du carrousel d'avis               | idem Accueil                                      |

**Déjà fonctionnels** (JS porté) : nav drawer, état scrollé, widget de réservation, galerie
(filtres + lightbox + clavier), scroll-reveal, accordéon FAQ (Contact).

## Évolutions possibles (hors périmètre v1)

- Menu WP (`wp_nav_menu`) au lieu des liens codés en dur.
- Champs éditables (Carbon Fields, ZIP standalone) — d'abord pour les globales
  (URL Elloha, téléphone, email), puis repeaters par page (chambres, activités, galerie).
- Médiathèque WP pour les images au lieu du dossier du thème.
- Réactivation des éléments interactifs listés ci-dessus.
- Plugin SEO (Yoast / Rank Math), SMTP, lightbox sur d'autres pages.
