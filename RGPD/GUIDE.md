# Guide d'utilisation - Skill RGPD pour organismes de formation

## Ce que fait cette skill

Cette skill transforme Claude en assistant RGPD opérationnel spécialisé pour les organismes de formation, CFA et formateurs indépendants.

Elle ne se contente pas d'expliquer le RGPD en général. Elle aide à produire, relire, corriger ou adapter des livrables concrets en lien avec l'activité réelle d'un organisme de formation, par exemple :

- un registre des traitements ;
- une politique de confidentialité ;
- des clauses d'information ;
- un clausier de sous-traitance ou de prestation ;
- une procédure de gestion des violations de données ;
- une procédure de suppression et d'archivage ;
- une charte informatique ;
- des supports de sensibilisation ;
- une analyse des outils numériques utilisés ;
- une aide à l'articulation entre RGPD et exigences Qualiopi.

La skill s'appuie sur deux types de contenus :

- des **fichiers de référence** dans `references/`, qui servent de garde-fous méthodologiques et juridiques ;
- des **templates** dans `templates/`, qui servent de base de rédaction et d'adaptation.

---

## Installation

**Pré-requis :** un compte Claude.ai. Une formule Pro est recommandée pour les documents longs ou les analyses complexes.

### Étapes

1. Téléchargez le fichier `rgpd-of.skill` depuis ce dossier.
2. Dans Claude, ouvrez **Paramètres -> Skills**.
3. Cliquez sur **+**, puis **Create skill**, puis **Upload a skill**.
4. Importez le fichier `.skill`.
5. Activez la skill dans votre liste.

La skill devient ensuite disponible dans vos conversations dès que votre demande concerne le RGPD, les données personnelles, la conformité documentaire ou l'usage des outils numériques dans un organisme de formation.

---

## Comment déclencher la skill

La skill s'active automatiquement lorsqu'elle reconnaît un sujet RGPD lié à un organisme de formation.

Si vous souhaitez forcer son déclenchement, vous pouvez aussi commencer votre message par :

```text
/skill rgpd-of

---

## Exemples de prompts utiles

**Audit de documents**

Voici mon formulaire d'inscription. Peux-tu identifier les données excessives et me proposer une version allégée ?

Peux-tu analyser ce tableau de suivi apprenants et me dire quelles colonnes posent un problème RGPD ?

Quels champs dois-je supprimer ou masquer avant de partager ce fichier avec mon OPCO ?

**Registre des traitements**

Voici la liste de mes outils et process. Génère mon registre des traitements au format article 30.

Peux-tu mettre à jour mon registre existant à partir de ces nouveaux traitements ?

**Politique et documents**

Rédige une politique de confidentialité adaptée à mon OF, pour mon site et mon espace apprenant.

Rédige la clause RGPD à intégrer dans mes conventions de formation.

Peux-tu me faire une procédure de suppression et d'archivage adaptée à mon organisme ?

**Outils numériques**

J'utilise Zoom, Formdev et Brevo. Peux-tu auditer ces outils et me dire ce que je dois vérifier ou mettre en place ?

Peux-tu me dire si mes outils impliquent des points de vigilance sur les transferts hors UE ?

**Qualiopi**

Dans 2 mois j'ai un audit Qualiopi. Quels documents RGPD dois-je préparer ?

Comment articuler mes obligations RGPD avec mes preuves Qualiopi ?

**Violation de données**

J'ai envoyé un tableau apprenants au mauvais destinataire ce matin. Que dois-je faire ?

**Durées de conservation**

Peux-tu me proposer un tableau de durées de conservation adapté à mon OF, avec les justifications ?

**Sensibilisation**

Peux-tu me préparer une fiche de sensibilisation RGPD pour mes formateurs ?

Fais-moi un quiz simple pour vérifier les réflexes RGPD de mon équipe administrative.

---

## Ce que contient le dossier

**Structure du dossier**
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

**Contenu du dossier references**

Le dossier references/ regroupe les textes d'appui, repères méthodologiques, cas d'usage et garde-fous utilisés par la skill.

Il contient notamment :

aipd.md : méthode pour qualifier la nécessité d'une AIPD ;
cas-usages-prompts-rgpd-of.md : formulations types à reconnaître ;
droits-personnes.md : gestion opérationnelle des demandes d'exercice des droits ;
durees-conservation-of.md : repères de conservation pour les organismes de formation ;
outils-numeriques.md : grille d'analyse des outils, sous-traitants et transferts ;
qualiopi-rgpd.md : articulation entre RGPD, Qualiopi et documentation de conformité ;
sanctions-jurisprudence.md : points d'attention tirés de décisions et cas utiles ;
secteurs-specifiques.md : mineurs, handicap, apprentissage, structures publiques, cas particuliers ;
Manuel-procedure-rgpd/ : ressources procédurales complémentaires.

Ces fichiers ne sont pas des templates. Ils servent de base d'analyse, de vérification et de prudence.

**Contenu du dossier templates**

Le dossier templates/ contient actuellement onze modèles de documents prêts à adapter.

Fichier	Usage
registre-traitements-of.md	Registre des traitements structuré par activité
politique-confidentialite-of.md	Politique de confidentialité site / espace apprenant
clause-information-prealable.md	Clause RGPD à insérer dans devis, convention, contrat ou bulletin d'inscription
clausier-rgpd-prestation.md	Clauses RGPD pour contrat de prestation et sous-traitance
engagement-confidentialite.md	Engagement de confidentialité pour intervenants, prestataires ou personnes autorisées
reponse-exercice-droits.md	Modèles de réponse aux demandes d'accès, rectification, effacement, opposition, limitation ou portabilité
procedure-violation-donnees.md	Procédure interne de gestion des incidents et violations de données
procedure-suppression-archivage.md	Procédure de conservation, archivage et suppression des données
charte-informatique-rgpd.md	Charte informatique et d'usage des données personnelles
fiche-sensibilisation-rgpd.md	Support court de sensibilisation RGPD pour formateurs et salariés
quiz-sensibilisation-rgpd.md	Quiz de sensibilisation RGPD pour vérification des acquis
Comment utiliser les templates

Les fichiers du dossier templates/ sont des bases de rédaction. Ils ne doivent pas être repris sans relecture ni adaptation.

Avant utilisation, il faut toujours vérifier :

le rôle réel des acteurs ;
les outils réellement utilisés ;
les flux de données ;
les durées de conservation ;
les éventuels transferts hors UE ;
les données sensibles ou particulières ;
la cohérence avec vos pratiques internes.

Le plus efficace est souvent de travailler en deux temps.

Étape 1 - Compléter ou adapter le template

Exemple :

Voici mon template de politique de confidentialité.
Mon organisme s'appelle [NOM], nous utilisons [OUTILS],
nous formons principalement [PUBLIC], notre référent RGPD est [NOM ou "non désigné"].
Complète tous les champs [À COMPLÉTER] en cohérence avec ces informations.
Étape 2 - Relire, reformuler ou mettre en forme

Exemples :

Relis ce document comme un juriste RGPD spécialisé OF et signale les zones trop affirmatives ou à adapter.
Transforme ce template en document clair et professionnel, prêt à être diffusé en interne.
Limites à connaître

La skill fournit un appui opérationnel et documentaire. Elle ne remplace pas, à elle seule, un conseil juridique au sens strict.

Une validation complémentaire reste particulièrement recommandée lorsque la situation concerne notamment :

des données de santé ;
des situations complexes impliquant des mineurs ;
un incident grave ou une violation de données à fort impact ;
une AIPD sur un traitement sensible ;
un contentieux ;
une qualification contractuelle délicate entre responsable de traitement et sous-traitant ;
un environnement technique complexe ou fortement externalisé.

La skill est conçue pour signaler ces zones de vigilance quand elles apparaissent.

Pour aller plus loin : optimiser le déclenchement

Cette section s'adresse surtout aux utilisateurs avancés, notamment dans un contexte de test ou d'amélioration continue.

La skill se déclenche à partir de la description contenue dans skill.md. Si vos utilisateurs formulent leurs demandes de manière très différente de ce qui est prévu, il peut être utile d'affiner cette description à partir de prompts réels.

Le principe est simple :

constituer un jeu de prompts représentatif ;
tester ce qui déclenche bien ou non la skill ;
ajuster la description si nécessaire ;
reconditionner ensuite le fichier .skill.

Cette étape est facultative. La skill fonctionne sans cela.

Bon usage recommandé

Pour obtenir de meilleurs résultats :

fournissez le contexte réel de votre organisme ;
nommez les outils utilisés ;
précisez s'il s'agit d'un OF, d'un CFA, d'un formateur indépendant ou d'une structure mixte ;
collez le document à relire ou donnez sa structure ;
indiquez si vous cherchez un modèle, une correction, une mise à jour, un audit ou une analyse de risque.

Plus la demande est contextualisée, plus la réponse sera utile.

Contribuer

Ce dossier fait partie du projet FormaSwift/skill-OF.

Les améliorations possibles incluent notamment :

l'ajout de nouvelles références ;
l'amélioration des garde-fous ;
l'enrichissement des cas d'usage ;
l'ajout de nouveaux templates utiles au secteur ;
la correction de formulations trop générales ou trop figées.

Les retours terrain sont particulièrement utiles pour améliorer la pertinence opérationnelle de la skill.
---
