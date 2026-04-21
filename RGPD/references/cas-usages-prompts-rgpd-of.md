# Cas d'usage et demandes typiques - Skill RGPD OF

Ce fichier sert de bibliothèque de formulations à reconnaître par la skill, avec la sortie attendue pour chaque type de demande.

## 1. Audit documentaire

Questions typiques :
- Peux-tu analyser ce dossier et identifier les données personnelles qu'il contient ?
- Peux-tu repérer les données sensibles ou particulièrement à risque dans ce document ?
- Peux-tu me signaler les données qui paraissent excessives au regard du principe de minimisation ?
- Peux-tu analyser ce tableau de suivi apprenants et me dire quelles colonnes posent un risque RGPD ?
- Peux-tu analyser ce formulaire d'inscription et me dire quelles questions devraient être supprimées, reformulées ou rendues facultatives ?

Sortie attendue :
- inventaire des données repérées ;
- classement : nécessaire / à justifier / excessive / sensible ;
- analyse de la finalité ;
- recommandations champ par champ ;
- version reformulée si demandé.

## 2. Minimisation des données

Questions typiques :
- Quelles données me conseilles-tu de ne plus demander à l'inscription ?
- Dans ce questionnaire, quelles données sont disproportionnées par rapport à la finalité ?
- Peux-tu me proposer une version allégée de ce formulaire conforme au principe de minimisation ?
- Peux-tu m'indiquer, pour chaque champ de ce tableau, s'il est indispensable, optionnel ou à supprimer ?

Sortie attendue :
- qualification de chaque champ ;
- justification brève ;
- proposition de formulaire allégé ;
- vigilance spécifique sur données de santé, pièces d'identité, RIB, données familiales et données libres non cadrées.

## 3. Anonymisation et pseudonymisation

Questions typiques :
- Peux-tu anonymiser l'ensemble de ce dossier de façon exploitable ?
- Peux-tu pseudonymiser ce tableau tout en conservant une utilité de pilotage ?
- Quels champs doivent être supprimés, masqués ou agrégés pour partager ce fichier sans risque excessif ?
- Cette anonymisation est-elle suffisamment robuste ou reste-t-il un risque de réidentification ?

Sortie attendue :
- méthode retenue ;
- liste des champs modifiés ;
- distinction anonymisation / pseudonymisation / masquage ;
- alerte si le niveau de protection reste insuffisant.

## 4. Registre des traitements

Questions typiques :
- Voici le dossier de mes fournisseurs et partenaires, peux-tu générer mon registre de traitement ?
- Peux-tu transformer ce tableau opérationnel en registre de traitement RGPD structuré ?
- Peux-tu mettre à jour mon registre à partir de ces nouveaux traitements ?
- Peux-tu repérer les traitements manquants dans mon registre au regard de mes documents et process ?

Sortie attendue :
- registre article 30 ;
- regroupement par familles de traitements ;
- champs manquants clairement signalés ;
- recommandations priorisées.

## 5. Conservation, archivage, suppression

Questions typiques :
- Peux-tu repérer dans ce dossier les données qui auraient dû être supprimées ou archivées ?
- Peux-tu me dire quels fichiers semblent conservés trop longtemps au regard de leur finalité ?
- Peux-tu me proposer une règle de conservation pour chaque type de document de mon organisme ?
- Peux-tu analyser cette arborescence et identifier les dossiers à purger ?

Sortie attendue :
- tri : conservation active / archivage intermédiaire / suppression ;
- justification de chaque recommandation ;
- plan de purge ou d'archivage ;
- tableau de durées de conservation si demandé.

## 6. Procédures et gouvernance

Questions typiques :
- Peux-tu rédiger une procédure interne de traitement des données personnelles dans mon organisme de formation ?
- Peux-tu rédiger une procédure de gestion des demandes d'accès, de rectification et d'effacement ?
- Peux-tu rédiger une procédure de violation de données adaptée à une petite structure ?
- Peux-tu rédiger la fiche de poste du DPO au sein de mon organisme de formation ?
- Peux-tu m'aider à déterminer si j'ai réellement besoin d'un DPO désigné ou plutôt d'un référent interne RGPD ?

Sortie attendue :
- document exploitable immédiatement ;
- version adaptée à la taille de la structure ;
- répartition claire des rôles ;
- rappel des points à valider juridiquement en cas de risque élevé.

## 7. Financeurs et contexte sectoriel

Questions typiques :
- Peux-tu rédiger une fiche comparative des flux de données personnelles selon que la formation est financée par OPCO, CPF, France Travail, Région ou employeur ?
- Peux-tu me dire quelles données sont réellement nécessaires pour répondre aux exigences des financeurs, sans surcollecte ?
- Peux-tu analyser mes justificatifs de financement et me dire lesquels comportent des données non nécessaires ?

Sortie attendue :
- comparaison par financeur ;
- distinction entre obligation légale, contractuelle et pratique interne ;
- points de vigilance RGPD ;
- recommandations opérationnelles pour l'équipe administrative.

## 8. Veille sectorielle RGPD

Questions typiques :
- Peux-tu lancer une veille hebdomadaire sur les actualités RGPD utiles à un organisme de formation ?
- Peux-tu me faire une synthèse mensuelle des nouveautés CNIL, jurisprudences, sanctions ou recommandations utiles à mon activité ?
- Peux-tu me signaler les évolutions concernant la gestion des données d'apprenants, de salariés et de sous-traitants ?

Sortie attendue :
- sources fiables et prioritairement officielles ;
- synthèse datée ;
- impacts concrets pour l'OF ;
- actions ou mises à jour recommandées.

## Formulation-mère recommandée

Pour les analyses de documents, la skill peut reformuler automatiquement la demande ainsi :

> Analyse ce document comme un expert RGPD spécialisé organismes de formation. Identifie les données personnelles, classe-les en nécessaire / à justifier / excessive / sensible, repère les écarts probables au regard des principes du RGPD, puis propose les actions correctives et, si demandé, une version anonymisée ou un livrable conforme.
