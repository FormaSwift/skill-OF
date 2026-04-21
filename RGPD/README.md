
## README.md`

```markdown
# Skill RGPD pour organismes de formation

Cette skill transforme Claude en assistant RGPD opérationnel spécialisé pour les organismes de formation, CFA et formateurs indépendants.

Elle est conçue pour aider à produire, corriger, adapter ou relire des livrables concrets liés à la conformité RGPD dans le contexte spécifique de la formation professionnelle.

## Objectif

L'objectif n'est pas d'expliquer le RGPD de manière abstraite, mais d'aider à traiter des besoins très concrets, par exemple :

- générer ou mettre à jour un registre des traitements ;
- rédiger une politique de confidentialité ;
- corriger une clause d'information préalable ;
- produire une procédure de suppression et d'archivage ;
- répondre à une demande d'exercice des droits ;
- gérer un incident ou une violation de données ;
- auditer des outils numériques utilisés dans un OF ;
- articuler les exigences RGPD avec les réalités Qualiopi et les pratiques documentaires d'un organisme de formation.

## Contenu du dossier

Le dossier repose sur trois briques principales :

- `skill.md` : le coeur de la skill ;
- `references/` : les fichiers de référence et de méthode utilisés comme garde-fous ;
- `templates/` : les modèles rédactionnels prêts à adapter.

Le fichier `rgpd-of.skill` correspond à la version packagée à importer dans Claude.

## Structure du dossier

```text
RGPD/
├── GUIDE.md
├── README.md
├── rgpd-of.skill
├── skill.md
├── references/
│   ├── Manuel-procedure-rgpd/
│   ├── aipd.md
│   ├── cas-usages-prompts-rgpd-of.md
│   ├── droits-personnes.md
│   ├── durees-conservation-of.md
│   ├── outils-numeriques.md
│   ├── qualiopi-rgpd.md
│   ├── sanctions-jurisprudence.md
│   └── secteurs-specifiques.md
└── templates/
    ├── charte-informatique-rgpd.md
    ├── clause-information-prealable.md
    ├── clausier-rgpd-prestation.md
    ├── engagement-confidentialite.md
    ├── fiche-sensibilisation-rgpd.md
    ├── politique-confidentialite-of.md
    ├── procedure-suppression-archivage.md
    ├── procedure-violation-donnees.md
    ├── quiz-sensibilisation-rgpd.md
    ├── registre-traitements-of.md
    └── reponse-exercice-droits.md
