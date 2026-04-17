# ARTEFACTS

Ce dossier contient des artefacts au format HTML ou TSX

Ces fichiers peuvent etre utilises de deux manieres :
- dans Claude, pour lecture, adaptation ou modification
- en local, dans un navigateur, pour tester ou reutiliser l'interface

## A quoi servent ces artefacts

Les artefacts proposes ici sont pensés pour les organismes de formation et leurs besoins concrets :
- structuration d'informations
- aide a l'analyse
- interfaces simples
- outils visuels ou interactifs
- prototypes fonctionnels

Selon les cas, un artefact peut etre :
- totalement autonome
- utilisable dans Claude sans configuration technique supplementaire
- ou necessiter une integration API pour fonctionner hors Claude

## Option 1 - Utiliser un artefact dans Claude

Vous pouvez importer un fichier `.html` dans une conversation Claude ou dans un projet.

### Etapes

- ouvrez une conversation Claude
- cliquez sur `+`
- choisissez l'ajout de fichier
- importez le fichier `.html`
- demandez ensuite a Claude ce que vous voulez faire

Exemples :
- "explique moi a quoi sert ce fichier"
- "modifie le texte de cette interface pour un organisme de formation"
- "adapte ce prototype pour une check-list Qualiopi"
- "corrige les erreurs HTML, CSS ou JavaScript"

### Ce que Claude peut faire

Une fois le fichier importé, Claude peut notamment :
- lire sa structure
- analyser le code
- proposer des corrections
- modifier le contenu
- adapter le design
- generer une nouvelle version

### Point important

Importer un fichier HTML dans Claude permet surtout a Claude de travailler sur son contenu.

Cela ne remplace pas l'ouverture du fichier dans un navigateur si vous voulez tester son comportement interactif réel.

## Option 2 - Utiliser un artefact en local

Vous pouvez aussi télécharger le fichier puis l'ouvrir directement sur votre ordinateur.

### Etapes

- téléchargez le fichier `.html`
- double-cliquez dessus ou ouvrez-le dans votre navigateur
- testez son affichage et son fonctionnement

Cette option est la plus simple si l'artefact est autonome.

## Faut-il ajouter une clé API ?

Pas dans tous les cas.

### Cas 1 - Pas de clé API nécessaire

Aucune clé API n'est nécessaire si :
- vous utilisez le fichier comme support de travail dans Claude
- ou si l'artefact est utilisé nativement dans l'environnement Claude prévu a cet effet

Dans ce cas, l'utilisateur fonctionne avec son propre compte Claude.

### Cas 2 - Clé API nécessaire

Une clé API devient nécessaire si vous voulez faire fonctionner l'artefact en dehors de Claude avec de vrais appels a un modele.

Exemples :
- bouton "analyser" relié a Claude
- formulaire qui envoie une requete au modele
- assistant conversationnel intégré a une page web
- generation automatique de contenu depuis une interface HTML

## Si vous utilisez une API hors Claude

Dans ce cas, il faut ajouter une couche serveur.

### Recommandation

N'insérez jamais une clé API directement en clair dans le fichier HTML ou dans un script JavaScript exécuté coté navigateur.

Utilisez plutot :
- un backend
- une variable d'environnement
- un proxy serveur sécurisé

## Limites a connaitre

- un fichier HTML importé dans Claude n'est pas "installé" comme une application autonome
- pour tester réellement une interface, ouvrez le fichier dans un navigateur
- certains artefacts peuvent nécessiter des scripts complémentaires
- certains artefacts peuvent dépendre d'un service externe ou d'une autorisation spécifique

## Usage recommandé

Pour un usage simple :
- ouvrez le fichier dans Claude pour le faire adapter
- puis testez la version finale dans votre navigateur

Pour un usage avancé :
- utilisez l'HTML comme base d'interface
- reliez ensuite cette interface a votre propre architecture technique

## Public concerné

Ces artefacts peuvent etre utiles a :
- des organismes de formation
- des CFA
- des responsables qualité
- des équipes administratives
- des directions
- des consultants ou prestataires du secteur

## Avertissement

Ces artefacts sont fournis comme base de travail, prototype ou support opérationnel.

Ils doivent etre testés, relus et adaptés avant utilisation en situation réelle, notamment si :
- des données sensibles sont traitées
- un usage réglementaire est envisagé
- l'outil influence une décision administrative, qualité ou juridique

## Formaswift

Ces artefacts s'inscrivent dans la démarche de Formaswift :
mettre l'IA au service d'usages concrets, structurés et utiles pour les organismes de formation, sans perdre de vue les exigences de fiabilité, de méthode et de validation humaine.
