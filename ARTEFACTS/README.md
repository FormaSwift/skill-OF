## Installation et utilisation

Ce dépôt contient deux types de ressources :

- des skills pour Claude
- des artefacts HTML

Ils ne s'utilisent pas de la même manière.

### 1. Installer une skill dans Claude

Pour utiliser une skill de ce dépôt dans Claude :

- téléchargez le dossier de la skill concernée
- compressez ce dossier au format `.zip`
- vérifiez que le dossier de la skill est bien à la racine du ZIP
- dans Claude, ouvrez `Customize > Skills`
- cliquez sur `+`
- choisissez `Create skill`, puis `Upload a skill`
- importez votre fichier `.zip`
- activez ensuite la skill dans votre liste

Une fois importée, la skill peut être utilisée dans vos conversations Claude selon son descriptif.

### 2. Utiliser un artefact HTML

Les artefacts HTML de ce dépôt peuvent être utilisés de deux façons.

#### Option A - Dans Claude

Vous pouvez téléverser un fichier `.html` dans une conversation Claude ou dans un projet pour que Claude :

- lise sa structure
- l'explique
- le modifie
- l'adapte à votre besoin

Cela est utile pour retravailler un artefact, corriger un comportement ou demander une variante.

#### Option B - En local, dans un navigateur

Vous pouvez aussi télécharger le fichier `.html` puis l'ouvrir directement dans votre navigateur web.

Cette méthode est la plus adaptée si l'artefact est autonome et fonctionne sans service externe.

### 3. Faut-il ajouter une clé API ?

Pas toujours.

#### Aucun ajout de clé API nécessaire

Si vous utilisez l'artefact directement dans Claude en tant qu'artifact partagé ou personnalisable dans Claude, l'utilisateur se connecte avec son propre compte Claude. Il n'a normalement pas à ajouter de clé API.

#### Clé API nécessaire

Une clé API devient nécessaire uniquement si vous voulez faire fonctionner le fichier HTML en dehors de Claude avec de vrais appels à l'API Anthropic.

Exemples :
- formulaire relié à Claude
- assistant embarqué dans une page web
- génération de contenu depuis un bouton de l'interface
- analyse automatique via requêtes API

### 4. Recommandation de sécurité

N'insérez jamais une clé API directement en clair dans un fichier HTML ou dans un script JavaScript exécuté côté navigateur.

Pour un usage hors Claude, utilisez de préférence :

- un backend
- une variable d'environnement
- un proxy serveur chargé d'appeler l'API

### 5. Limites et remarques utiles

- un fichier HTML peut être téléversé dans Claude comme document
- un fichier HTML téléversé dans Claude n'est pas "installé" comme une skill
- pour les documents non PDF importés dans Claude, l'extraction est principalement textuelle
- si vous voulez exécuter réellement l'interface interactive d'un artefact HTML, ouvrez-le dans un navigateur
- certains artefacts peuvent nécessiter des connexions ou autorisations supplémentaires s'ils reposent sur des outils externes

### 6. En résumé

- une skill = import en ZIP dans Claude
- un artefact HTML = fichier à ouvrir, modifier ou réutiliser
- pas de clé API à ajouter pour un usage natif dans Claude
- clé API nécessaire seulement pour un usage externe avec intégration Anthropic
