# Handi-Adapt — Skill Claude pour Référents Handicap en OF

Assistant stratégique du Référent Handicap en organisme de formation.
Analyse les situations, propose des adaptations concrètes, outille les formateurs,
structure les preuves Qualiopi et aide à monter les dossiers Agefiph.

---

## Ce que fait cette skill

- Analyser une situation individuelle et proposer des adaptations par type de handicap
- Rédiger des fiches formateur claires, sans jargon médical
- Préparer les preuves Qualiopi (indicateurs 4, 10, 26, et 20 pour les CFA)
- Monter un dossier Agefiph pour l'aide à l'adaptation
- Produire des bilans de compensation
- Concevoir des actions SEEPH
- Générer des documents à la charte de votre organisme

---

## Contenu de la skill

```
handi-adapt/
├── SKILL.md                          Logique centrale, méthode, formats de sortie
└── references/
    ├── adaptations-catalog.md        Adaptations par type de situation (6 catégories)
    ├── qualiopi-evidence.md          Guide des preuves Qualiopi (indicateurs 4, 10, 26, et 20 pour les CFA)
    ├── agefiph-aide.md               Processus dossier aide à l'adaptation Agefiph
    ├── consignes-output.md           ⭐ CHARTE GRAPHIQUE — À personnaliser
    └── mesformations.md              ⭐ VOS FORMATIONS — À renseigner
```

Les fichiers marqués ⭐ sont les deux fichiers à personnaliser.
Tous les autres fichiers sont génériques et fonctionnent sans modification.

---

## Installation

1. Télécharger le fichier `handi-adapt.skill`
2. Dans Claude.ai → Paramètres → Skills → Importer une skill
3. Sélectionner le fichier `.skill`
4. Personnaliser les deux fichiers décrits ci-dessous

---

## Personnalisation — 2 fichiers à modifier

### 1. `references/consignes-output.md` — Votre charte graphique

Ce fichier définit comment Claude met en forme les documents générés : couleurs, polices, formats, style rédactionnel.

**À modifier :**

```markdown
## Identité visuelle
**Nom de l'organisme :** [Votre nom]
**Baseline :** [Votre accroche]

## Palette de couleurs
| Couleur principale | [Votre couleur] | `#XXXXXX` |
| Couleur secondaire | [Votre couleur] | `#XXXXXX` |
...
```

**Ce que vous pouvez adapter :**
- Nom et baseline de votre organisme
- Palette de couleurs (hex)
- Typographies
- Formats de documents (A4, LinkedIn, infographie...)
- Style rédactionnel (ton, règles typographiques)
- En-têtes et pieds de page

**Si vous n'avez pas de charte :** laissez les valeurs par défaut, la skill fonctionnera avec une mise en forme neutre et professionnelle.

---

### 2. `references/mesformations.md` — Votre catalogue et vos retours d'expérience

Ce fichier permet à la skill de connaître vos formations spécifiques et de s'appuyer sur les adaptations que vous avez déjà testées.

**Partie 1 — Catalogue des formations**

Renseignez une fiche par formation en utilisant le modèle fourni :
- Durée, modalité, rythme
- Public et prérequis
- Effectif habituel
- Outils et LMS utilisés
- Accessibilité physique et numérique

**Partie 2 — Adaptations testées**

Ajoutez une fiche après chaque situation traitée :
- Type de situation (fonctionnel, sans diagnostic)
- Adaptations mises en oeuvre
- Ce qui a fonctionné / ce qui n'a pas suffi
- Résultat final
- Preuves conservées

Plus ce fichier est renseigné, plus les propositions de la skill seront précises et ancrées dans votre réalité terrain.

**Ce fichier est optionnel.** La skill fonctionne sans lui, mais les réponses seront moins contextualisées à votre offre.

---

## Utilisation

La skill se déclenche automatiquement quand vous mentionnez :
- Un apprenant en situation de handicap
- Une adaptation pédagogique ou organisationnelle
- Les indicateurs Qualiopi liés au handicap (4, 10, 26, et 20 pour les CFA)
- Un dossier Agefiph ou une aide à l'adaptation
- Une action SEEPH
- Une fiche pour un formateur
- Un bilan de compensation
- Ce que dire à un auditeur sur le handicap

**Exemples de démarrage :**

```
J'ai un apprenant qui a des difficultés à suivre le rythme de la formation.
Analyse la situation et propose des adaptations concrètes.
```

```
Rédige une fiche formateur pour accompagner un apprenant
avec des troubles de l'attention dans ma formation [titre].
```

```
Aide-moi à monter un dossier Agefiph pour l'aide à l'adaptation.
```

```
Prépare une check-list Qualiopi sur la prise en compte du handicap.
```

```
Donne-moi des idées d'action SEEPH simples pour une équipe de 5 personnes.
```

---

## Cadre d'utilisation

Cette skill est un appui opérationnel. Elle :
- Ne pose pas de diagnostic médical
- Ne remplace pas un professionnel de santé
- Ne remplace pas la RHF (Ressources Handicap Formation) pour les situations complexes
- Signale clairement ce qui est certain / probable / à vérifier

Pour les situations complexes ou les premiers dossiers Agefiph, contacter la RHF de votre département :
https://www.agefiph.fr/acteur-de-la-formation

---

## Références utilisées

- Référentiel National Qualité (RNQ) Qualiopi V10 — DGEFP
- Loi du 11 février 2005 pour l'égalité des droits et des chances
- Fiche Agefiph "Aide à l'adaptation des situations de formation" — Janvier 2025
- Ressources Handicap Formation (RHF) — Agefiph / Innov'hand
- Neurosciences et pédagogie inclusive — Elsa Géroult, Innov'hand

---

## Contribuer

Si vous utilisez cette skill et souhaitez partager des adaptations testées qui pourraient être
intégrées au catalogue générique (`adaptations-catalog.md`), vous pouvez proposer vos retours
d'expérience (anonymisés) via les canaux habituels de votre réseau RH/formation.

---

*Skill créée avec Formaswift — Conseil en organisation et qualité des organismes de formation*
*Version 1.0 — Avril 2025*
