# Dashboard GA4 — A/B test CTA pages Compétences (Dabia)

Objectif: identifier en 7 jours la variante CTA gagnante (`balanced`, `whatsapp-first`, `rdv-first`) sur `/competences/*`.

## 1) Pré-requis GA4 (une seule fois)

Dans **Admin → Custom definitions**, créer les dimensions d’événement suivantes:

- `cta_variant`
- `cta_type`
- `competence_slug`
- `page_path`

> Source events déjà envoyés par le site:
- `competence_cta_ab_impression`
- `competence_cta_ab_click`
- `cta_rendez_vous_click`

## 2) Exploration principale (Free form)

Créer une exploration nommée: **"CTA Compétences A/B — 7 jours"**

- Période: `Last 7 days`
- Filtre global:
  - `page_path` contains `/competences/`
  - `event name` in (`competence_cta_ab_impression`, `competence_cta_ab_click`, `cta_rendez_vous_click`)

### A. Table performance par variante

**Lignes**
- `cta_variant`

**Valeurs**
- `Event count` (filtré sur `competence_cta_ab_impression`) → alias `Impressions`
- `Event count` (filtré sur `competence_cta_ab_click`) → alias `Clicks`
- `Event count` (filtré sur `cta_rendez_vous_click`) → alias `Business clicks`

**Metric calculée (CTR brut)**
- `Clicks / Impressions`

### B. Table détail par type de CTA

**Lignes**
- `cta_variant`
- `cta_type`

**Valeur**
- `Event count` (filtré sur `competence_cta_ab_click`)

But: voir si la variante pousse plutôt `rdv`, `whatsapp` ou `advice`.

### C. Table par compétence

**Lignes**
- `competence_slug`
- `cta_variant`

**Valeurs**
- `Impressions`
- `Clicks`
- `Business clicks`

But: détecter si une variante gagne globalement mais perd sur certaines compétences.

## 3) Dashboard Looker Studio (vue management)

Créer un rapport Looker Studio connecté à la propriété GA4.

### Cartes recommandées

1. **Scorecards (7j)**
   - Impressions AB
   - Clicks AB
   - Business clicks
   - CTR AB global

2. **Bar chart: CTR par variante**
   - Dimension: `cta_variant`
   - Métriques: `Impressions`, `Clicks`, `CTR`

3. **Stacked bar: répartition des clics par type**
   - Dimension: `cta_variant`
   - Breakdown: `cta_type`
   - Métrique: `Clicks`

4. **Table: performance par compétence**
   - Dimensions: `competence_slug`, `cta_variant`
   - Métriques: `Impressions`, `Clicks`, `Business clicks`, `CTR`

5. **Série temporelle**
   - Date vs `Business clicks`
   - Breakdown par `cta_variant`

## 4) Règle de décision (gagnant)

Attendre minimum:
- `>= 300 impressions` par variante (idéal),
- ET `>= 30 business clicks` cumulés.

Choisir la variante qui maximise en priorité:
1. `Business clicks / Impressions` (proxy conversion)
2. puis `Clicks / Impressions` (CTR)

En cas d’écart < 10% entre variantes: prolonger 7 jours.

## 5) Vérification DebugView (avant lecture des résultats)

Dans GA4 DebugView, confirmer la présence de:
- `competence_cta_ab_impression` avec (`cta_variant`, `competence_slug`, `page_path`)
- `competence_cta_ab_click` avec (`cta_type`, `cta_variant`, `competence_slug`)
- `cta_rendez_vous_click` avec `cta_type` suffixé `_competence_ab`

## 6) Recommandation opérationnelle

- Laisser tourner 7 jours sans changer les CTA.
- Faire un point J+7 avec ce dashboard.
- Si gagnant clair: figer la variante sur toutes les compétences (suppression randomisation).