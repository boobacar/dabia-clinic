# Plan de reporting GA4 — SEO local & RDV (Clinique DABIA)

Objectif: suivre précisément l'impact SEO local sur les demandes de rendez-vous.

## 1) Événements à vérifier (DebugView / Realtime)

Événements custom implémentés côté site:

- `cta_rendez_vous_click`
- `click_tel`
- `click_whatsapp`
- `rdv_form_start`
- `rdv_form_submit_success`
- `rdv_urgence_prefill`

Paramètres utiles:

- `page_path`
- `link_text`
- `destination` (tel/whatsapp)
- `urgence`
- `soin`

## 2) Marquer les conversions GA4

Dans GA4:

1. **Admin → Événements**
2. Activer "Marquer comme conversion" pour:
   - `rdv_form_submit_success` (conversion principale)
   - `click_tel` (micro-conversion)
   - `click_whatsapp` (micro-conversion)

## 3) Créer 3 explorations essentielles

### A. Tunnel RDV (Funnel)
Étapes:
1. `page_view` avec `page_path` contient pages SEO money
   - `/dentiste-dakar`
   - `/cabinet-dentaire-dakar`
   - `/urgence-dentaire-dakar`
2. `cta_rendez_vous_click`
3. `rdv_form_start`
4. `rdv_form_submit_success`

But: trouver où la friction est la plus forte.

### B. Source/Medium → Conversions
Dimensions:
- Session source/medium
- Landing page + query string

Metrics:
- Users
- `rdv_form_submit_success`
- `click_tel`
- `click_whatsapp`
- Conversion rate session

But: savoir si l'organique local apporte de vrais RDV.

### C. Device & Page performance
Dimensions:
- Device category
- Page path

Metrics:
- `cta_rendez_vous_click`
- `rdv_form_start`
- `rdv_form_submit_success`

But: vérifier si mobile convertit correctement.

## 4) Rapport hebdomadaire (template)

Chaque semaine, noter:

- Clics SEO sur pages money (GSC)
- Position moyenne:
  - dentiste dakar
  - clinique dentaire dakar
  - urgence dentaire dakar
- `cta_rendez_vous_click`
- `rdv_form_start`
- `rdv_form_submit_success`
- `click_tel`
- `click_whatsapp`
- Taux Start→Submit = `rdv_form_submit_success / rdv_form_start`

## 5) Seuils d’alerte simples

- Si `rdv_form_start` monte mais `submit` baisse → friction formulaire
- Si `click_whatsapp` domine largement → renforcer CTA WhatsApp sur pages SEO
- Si mobile convertit mal vs desktop → simplifier encore la version mobile

## 6) Dashboard Looker Studio (optionnel, recommandé)

Connecteur: GA4 + Search Console

Widgets:
- Courbe hebdo des conversions (submit, tel, whatsapp)
- Table des pages SEO money (sessions, conv, taux)
- Tableau mots-clés GSC (requêtes locales + clics + position)
- Device split

---

## Checklist de validation rapide (30 min)

- [ ] Ouvrir le site en navigation privée
- [ ] Cliquer Appeler / WhatsApp / RDV
- [ ] Commencer formulaire
- [ ] Soumettre formulaire test
- [ ] Vérifier événements dans DebugView
- [ ] Marquer conversions dans GA4
