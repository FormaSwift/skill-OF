---
name: multi-veille-of
description: >
  Génère un rapport hebdomadaire de veille structuré et classé pour les organismes de formation (OF), couvrant les 4 indicateurs Qualiopi : I23 (veille légale/réglementaire formation), I24 (évolutions compétences/métiers/emplois), I25 (innovations pédagogiques et technologiques), I26 (handicap et accessibilité). Produit une analyse d'impact filtrée selon le profil de l'OF (secteur, activité, taille), le niveau de traitement requis (urgent / à surveiller / pour information) et le type de poste concerné (direction, RRF, formateur, assistante administrative, référent handicap). Génère aussi un email récap hebdomadaire prêt à envoyer à l'équipe. À utiliser dès que l'utilisateur mentionne veille hebdomadaire, rapport de veille, indicateur 23, indicateur 24, indicateur 25, indicateur 26, veille formation, veille Qualiopi, veille RH, veille pédagogique, veille handicap, récap veille, newsletter interne OF, ou toute demande de synthèse d'actualité pour un organisme de formation. Déclencher même si la demande est formulée comme "qu'est-ce qui a changé cette semaine ?", "y a-t-il des actualités importantes pour mon OF ?", ou "prépare notre veille du vendredi".
---

# Multi-Veille OF — Rapport hebdomadaire Qualiopi (I23–I26)

## Objectif

Produire chaque semaine un rapport de veille structuré, priorisé et directement actionnable pour les acteurs d'un organisme de formation. Le rapport couvre les 4 indicateurs de veille du Référentiel National Qualité (RNQ v9) et intègre une analyse d'impact adaptée au profil de l'OF.

---

## Étape 1 — Collecter le profil de l'OF (si non connu)

Si le profil de l'OF n'est pas disponible dans le contexte de la conversation, poser UNE seule question synthétique :

> "Pour adapter la veille à votre OF, pouvez-vous me préciser en quelques mots : votre secteur(s) d'intervention principal(aux), vos publics (salariés, demandeurs d'emploi, alternants...), et si vous avez un référent handicap en interne ?"

Utiliser ensuite les variables suivantes pour personnaliser le rapport :

| Variable | Valeurs possibles |
|---|---|
| `secteur` | ex. santé/médico-social, BTP, numérique, management, langues, RH... |
| `publics` | salariés, demandeurs d'emploi, alternants, personnes handicapées |
| `taille` | TPE (1-5), PME (5-50), ETI+ (50+) |
| `certifications` | RNCP, RS, CléA, CACES... |
| `ref_handicap` | oui / non / mutualisé |
| `distanciel` | oui / non / hybride |

---

## Étape 2 — Rechercher les actualités de la semaine

Utiliser l'outil de recherche web pour collecter les informations récentes (7 derniers jours) pour chaque indicateur. Structurer les recherches comme suit :

### I23 — Veille légale et réglementaire
Sources prioritaires :
- Ministère du Travail (travail-emploi.gouv.fr)
- France Compétences (francecompetences.fr)
- Légifrance (legifrance.gouv.fr) — arrêtés, décrets, circulaires formation
- Cap Métiers (cap-metiers.fr)

Requêtes types : `formation professionnelle décret semaine`, `CPF évolution`, `Qualiopi mise à jour`, `financement formation OPCO`

### I24 — Évolutions compétences/métiers/emplois
Sources adaptées au secteur de l'OF :
- France Travail / études métiers en tension (francetravail.fr)
- BPI France — tendances économiques (bpifrance.fr)
- Observatoires de branche du secteur concerné
- DARES — études emploi et formation (dares.travail.gouv.fr)

Requêtes types : `[secteur] compétences 2024`, `métiers tension [secteur]`, `observatoire branche [secteur]`

### I25 — Innovations pédagogiques et technologiques
Sources prioritaires :
- Jonathan Pottiez (Substack) — évaluation des acquis
- Superformateur (Substack) — pratiques formateurs
- David Vellut — veille pédagogique et technologique
- Le Blog de la Formation (blogdelaformation.com)
- Le Hub de la Formation (YouTube)

Requêtes types : `innovation pédagogique IA formation`, `évaluation apprenants nouvelles méthodes`, `technologie formation distanciel`

### I26 — Handicap et accessibilité
Sources prioritaires :
- AGEFIPH (agefiph.fr) — évolutions réglementaires et dispositifs
- Walid le Valide / Kessel Media — newsletter inclusion
- FIPHFP (fiphfp.fr) si secteur public

Requêtes types : `AGEFIPH formation handicap semaine`, `accessibilité pédagogique évolution`, `RQTH emploi formation`

---

## Étape 3 — Construire le rapport hebdomadaire

Utiliser le template ci-dessous. Adapter le contenu selon les résultats de recherche et le profil de l'OF.

```
═══════════════════════════════════════════════════
📋 RAPPORT DE VEILLE HEBDOMADAIRE
Organisme de Formation : [Nom OF]
Semaine du [lundi] au [vendredi]
═══════════════════════════════════════════════════

🔴 POINTS D'ATTENTION URGENTS
(items nécessitant une action dans les 15 jours)
→ [item] | Impact : [description] | Poste concerné : [rôle]

🟡 À SURVEILLER
(évolutions à intégrer dans les 1-3 mois)
→ [item] | Impact : [description] | Poste concerné : [rôle]

🟢 POUR INFORMATION
(tendances de fond, aucune action immédiate)
→ [item] | Source : [nom source]

───────────────────────────────────────────────────
📌 I23 — VEILLE LÉGALE ET RÉGLEMENTAIRE
───────────────────────────────────────────────────
[Pour chaque actualité :]
> Titre court — Source (date)
  Résumé en 2-3 lignes factuelles.
  ⚡ Impact OF [secteur] : [description concrète]
  👤 Poste concerné : [Direction / RRF / Admin / Formateur / Ref. Handicap]
  🎯 Niveau : 🔴 Urgent | 🟡 À surveiller | 🟢 Info

───────────────────────────────────────────────────
📌 I24 — ÉVOLUTIONS COMPÉTENCES / MÉTIERS / EMPLOIS
───────────────────────────────────────────────────
[Adapter au secteur de l'OF]
[Pour chaque actualité :]
> Titre court — Source (date)
  Résumé en 2-3 lignes.
  ⚡ Impact sur les formations : [quels modules, quels référentiels ?]
  👤 Poste concerné : [rôles]
  🎯 Niveau : 🔴 | 🟡 | 🟢

───────────────────────────────────────────────────
📌 I25 — INNOVATIONS PÉDAGOGIQUES ET TECHNOLOGIQUES
───────────────────────────────────────────────────
[Pour chaque actualité :]
> Titre court — Source (date)
  Résumé.
  ⚡ Applicabilité à votre contexte : [distanciel / présentiel / hybride]
  👤 Poste concerné : [Formateur / RRF / Direction]
  🎯 Niveau : 🔴 | 🟡 | 🟢

───────────────────────────────────────────────────
📌 I26 — HANDICAP ET ACCESSIBILITÉ
───────────────────────────────────────────────────
[Pour chaque actualité :]
> Titre court — Source (date)
  Résumé.
  ⚡ Impact sur vos pratiques : [accueil / supports / financement]
  👤 Poste concerné : [Ref. Handicap / Direction / Formateur]
  🎯 Niveau : 🔴 | 🟡 | 🟢

───────────────────────────────────────────────────
📎 SOURCES CONSULTÉES CETTE SEMAINE
───────────────────────────────────────────────────
- [Source 1] — [URL]
- [Source 2] — [URL]
...

───────────────────────────────────────────────────
📅 PROCHAINE VEILLE : semaine du [date]
Thème à approfondir : [si pertinent]
═══════════════════════════════════════════════════
```

---

## Étape 4 — Analyse d'impact par poste

Pour chaque item du rapport, appliquer la grille d'impact suivante :

| Poste | Ce qu'il/elle doit savoir | Ce qu'il/elle doit faire |
|---|---|---|
| **Direction / Gérant** | Évolutions réglementaires, risques financiers, obligations Qualiopi | Décider, valider, informer les parties prenantes |
| **Responsable RRF / Qualité** | Tout I23, I24, I25, I26 | Mettre à jour les documents, plan de formation, processus |
| **Formateur** | I24 (nouveaux contenus), I25 (méthodes), I26 (accessibilité) | Adapter les modules, les supports, les pratiques |
| **Assistante / Admin formation** | I23 (administratif), conventions, CERFA, financeurs | Mettre à jour les templates, vérifier la conformité |
| **Référent handicap** | I26 prioritairement, certains I23 (AGEFIPH) | Actualiser le volet handicap, mettre à jour les contacts |

---

## Étape 5 — Email récap hebdomadaire équipe

Après le rapport, proposer systématiquement un email interne prêt à envoyer.

Utiliser le template dans `references/email-template.md`.

Règles de rédaction de l'email :
- **Objet** : `[VEILLE OF] Semaine du [date] — [nb] actualités | [nb] urgences`
- Ton : professionnel, bienveillant, direct — pas de jargon inutile
- Longueur : 300-400 mots maximum
- Structure : intro 2 lignes + tableau récap + CTA lecture rapport complet
- Signature : au nom du responsable qualité ou de la direction

---

## Étape 6 — Intégration Cowork (si disponible)

Si Claude Cowork est installé, proposer d'ajouter automatiquement chaque item dans le tableau de veille. Vérifier la disponibilité via `search_mcp_registry` avec le mot-clé "cowork" ou "notion" ou "airtable".

Pour chaque item de veille, créer une entrée avec les champs :
- Date de veille
- Indicateur (I23/I24/I25/I26)
- Titre
- Source + URL
- Résumé (2 lignes)
- Niveau (🔴/🟡/🟢)
- Poste(s) concerné(s)
- Statut (À traiter / En cours / Traité)

---

## Règles éditoriales

- **Jamais de contenu inventé** : ne mentionner que des actualités vérifiées via recherche web
- **Toujours citer la source** avec titre, organisme et date
- **Niveau de confiance** : signaler clairement si une information est incertaine ou nécessite vérification
- **Neutralité** : présenter les faits, pas d'opinion politique
- **Pertinence sectorielle** : ne retenir I24 que si la branche ou le secteur est directement concerné
- **Concision** : 2-3 lignes max par item avant le bloc impact
- **Orthographe et syntaxe** : relecture systématique avant génération

---

## Déclencheurs d'usage

Utiliser cette skill sans hésitation si l'utilisateur dit :
- "prépare la veille de cette semaine"
- "quoi de neuf pour mon OF ?"
- "rapport de veille I23" / "I24" / "I25" / "I26"
- "actualités formation professionnelle"
- "veille Qualiopi hebdomadaire"
- "prépare l'email de veille pour l'équipe"
- "y a-t-il des nouveautés côté CPF / financement / handicap ?"
- "qu'est-ce qui a changé cette semaine dans la réglementation formation ?"

---

## Fichiers associés

- `references/email-template.md` — Template email récap hebdomadaire
- `references/sources-catalogue.md` — Catalogue complet des sources par indicateur et secteur
- `references/impact-matrix.md` — Matrice d'impact détaillée par type d'OF
