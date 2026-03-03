# LCP Phase 5 — Field Validation Pack (GA4 + GSC)

## Ce qui a été instrumenté
- `page_view` enrichi avec:
  - `page_template` (home, blog_post, rdv, etc.)
  - `device_type` (mobile/desktop)
- `web_vitals` enrichi avec:
  - `metric_rating`
  - `metric_delta`
  - `page_template`
  - `device_type`

## Vérification GA4 (DebugView)
1. Ouvrir le site avec `?ga_debug=1`
2. Naviguer: `/`, `/blog`, `/blog/:slug`, `/rendez-vous`
3. Vérifier événements:
   - `page_view` avec `page_template` + `device_type`
   - `web_vitals` (surtout LCP) avec `metric_rating`

## Rapport recommandé (Exploration GA4)
- Dimensions: `page_template`, `device_type`, `metric_name`, `metric_rating`
- Mesures: `event_count`, `metric_value`
- Filtre: `event_name = web_vitals` AND `metric_name = LCP`

## Validation GSC
1. Core Web Vitals > Mobile > LCP
2. Lancer/relancer "Valider la correction"
3. Suivre l'évolution sur 14-28 jours

## Objectif de succès
- Réduction progressive des URL "LCP > 2.5s (mobile)"
- Hausse des événements LCP avec `metric_rating = good` sur `page_template=home`
