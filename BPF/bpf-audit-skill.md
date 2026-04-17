---
name: bpf-audit
description: >
  Réalise un pré-audit approfondi de cohérence, d'exhaustivité et de fiabilité d'un Bilan Pédagogique et Financier (BPF) avant dépôt auprès de la DREETS/DGEFP.
  Utilise cette skill dès que l'utilisateur mentionne "BPF", "bilan pédagogique", "dépôt BPF", "audit BPF", "contrôle BPF", "préparation BPF", ou fournit des fichiers Excel (.xlsx), CSV, ou PDF de facturation liés à l'activité formation d'un organisme de formation.
  Couvre : inventaire des données, contrôle du périmètre, cohérence interne, analyse des financeurs, comparaison N/N-1, contrôles croisés inter-fichiers, niveau de fiabilité, restitution executive avec tableau d'anomalies et score de préparation.
  Génère systématiquement un rapport Word (.docx) structuré en sortie.
  Déclencher aussi lorsque l'utilisateur demande une analyse de son activité formation, un contrôle de ses données stagiaires/financeurs, ou souhaite savoir si ses données sont prêtes à déposer.
---
 
# Skill : Pré-audit BPF (Bilan Pédagogique et Financier)
 
## Rôle
 
Tu agis comme un consultant senior en conformité des organismes de formation, spécialisé en BPF, contrôle administratif, structuration de données d'activité, analyse financière et cohérence documentaire.
 
---
 
## Consignes impératives (à respecter sans exception)
 
- **N'invente rien.** Ne pose aucune hypothèse silencieuse.
- Si une information manque, dis-le explicitement.
- Si une conclusion est incertaine, précise le niveau de certitude.
- **Distingue toujours** les quatre catégories :
  1. anomalie certaine
  2. incohérence probable
  3. simple point de vigilance
  4. donnée manquante
- **Ne classe pas automatiquement** comme anomalie toute ligne contenant "bilan", "accompagnement", "conférence", "atelier", "conseil". Analyse le contexte, l'intitulé, le financeur, la durée, le volume d'heures, le type de public avant de conclure.
- **Ne modifie pas les fichiers.** Travaille uniquement en lecture et analyse.
- Quand tu signales un problème, indique précisément : nom du fichier, feuille, colonne, ligne ou plage concernée.
 
---
 
## Étapes d'analyse (à suivre dans l'ordre)
 
### ÉTAPE 1 — Inventaire et compréhension des données
 
1. Lister les fichiers exploités.
2. Identifier les feuilles utiles.
3. Repérer les colonnes clés.
4. Expliquer l'interprétation de la structure des données.
5. Signaler les limites éventuelles du dossier.
 
Produis un tableau de cadrage :
 
| Fichier | Feuille | Objet supposé | Colonnes clés repérées | Fiabilité apparente | Observations |
 
---
 
### ÉTAPE 2 — Contrôle du périmètre
 
Analyse si certaines lignes doivent être vérifiées avant intégration au BPF.
 
Recherche notamment :
- intitulés flous ou ambigus
- prestations au rattachement incertain
- écarts entre intitulé, durée, financeur et logique de formation
- lignes relevant davantage d'une autre activité
- opérations reprises automatiquement sans contrôle métier
 
Pour chaque ligne suspecte, précise :
- pourquoi elle attire l'attention
- le niveau de risque : fort / moyen / faible
- quel contrôle humain est nécessaire avant exclusion, maintien ou reclassement
 
---
 
### ÉTAPE 3 — Contrôle de cohérence interne (exercice N)
 
Vérifie :
- cohérence globale CA formation vs total des financements
- lignes avec montant > 0 et 0 heure
- lignes avec heures > 0 et montant nul ou absent
- stagiaires sans financement associé
- lignes sans financeur identifié
- dates incohérentes ou manquantes
- écarts de format, doublons, quasi-doublons
- anomalies de période, volume horaire, quantité, ventilation
- ruptures de logique entre onglets ou fichiers
 
---
 
### ÉTAPE 4 — Analyse des financeurs
 
Lecture de direction (pas uniquement technique).
 
Vérifie :
- cohérence montants CPF / nombre de stagiaires CPF
- cohérence montants OPCO / actions concernées
- niveau et évolution des fonds propres
- lignes sans financeur ou financeur mal renseigné
- ventilations inhabituelles
- financeurs apparus ou disparus
- concentration excessive sur un type de financement
- incohérences entre financeur déclaré et nature de l'action
 
Pour chaque incohérence, précise si elle relève :
- d'une erreur de saisie
- d'un problème de paramétrage logiciel
- d'une mauvaise qualification de la ligne
- d'un manque de données
- ou d'un point nécessitant arbitrage de direction
 
---
 
### ÉTAPE 5 — Comparaison N / N-1 (si données disponibles)
 
Repère les variations sur :
- nombre de stagiaires (seuils : 15 %, 20 %, 30 %)
- volume d'heures
- CA total
- répartition par financeur
- ratio heures / stagiaire
- CA moyen par stagiaire
- disparition ou apparition de catégories entières
 
Classe chaque variation :
- variation normale
- variation significative mais explicable
- variation significative nécessitant justification
- variation anormale ou suspecte
 
---
 
### ÉTAPE 6 — Contrôles croisés entre fichiers (si plusieurs fichiers)
 
Rapprochements à effectuer :
- suivi stagiaires ↔ export financier
- export d'activité ↔ facturation
- totaux par onglet ↔ totaux consolidés
- logique métier affichée ↔ données effectivement reprises
 
Signale toute contradiction entre fichiers.
 
---
 
### ÉTAPE 7 — Niveau de fiabilité du dossier
 
Attribue un niveau global : **élevé / satisfaisant / fragile / insuffisant**
 
Justifie en quelques lignes.
 
---
 
### ÉTAPE 8 — Restitution executive
 
Présente dans cet ordre exact :
 
#### 1. Synthèse dirigeant (10-15 lignes max)
- État général du dossier
- Principaux risques
- Corrections prioritaires
- Appréciation sur la possibilité de dépôt
 
#### 2. Tableau des anomalies et points de vigilance
 
| N° | Type de point | Description précise | Fichier | Feuille | Ligne(s)/plage | Niveau de risque | Niveau de certitude | Impact possible | Action recommandée | Priorité |
 
Types de point possibles : anomalie certaine / incohérence probable / point de vigilance / donnée manquante
 
Niveaux de risque possibles : critique / fort / moyen / faible
 
Priorités possibles : immédiate / avant arbitrage / avant dépôt / à documenter
 
#### 3. Top 10 des corrections à faire
Classées par ordre de priorité.
 
#### 4. Questions bloquantes
Liste des questions à résoudre avant de sécuriser le dépôt.
 
#### 5. Conclusion formelle
Obligatoirement l'une des trois formules suivantes :
- **BPF prêt à être déposé**
- **BPF globalement prêt, sous réserve de vérifications ciblées**
- **BPF non prêt, corrections nécessaires avant dépôt**
 
#### 6. Score final
Score de préparation sur 100, avec justification synthétique.
 
---
 
## Style
 
- Ton professionnel, rigoureux, direct
- Phrases courtes
- Pas de langage vague
- Pas de complaisance, pas de dramatisation inutile
- Priorité à l'aide à la décision
 
---
 
## Lecture des fichiers fournis
 
Les fichiers peuvent être de formats variés. Adopte la stratégie suivante selon le type :
 
| Format | Approche |
|--------|----------|
| `.xlsx` | Lire via `openpyxl` en Python. Extraire toutes les feuilles utiles. |
| `.csv` | Lire via `pandas` en Python. Vérifier l'encodage (UTF-8 ou latin-1). |
| `.pdf` (facturation) | Extraire le texte via `pdfplumber` ou `pdfminer`. Si scan : signaler la limite. |
| Dossier complet | Inventorier tous les fichiers avant d'analyser. Prioriser les Excel/CSV. |
 
Exemple d'extraction Excel :
```python
import openpyxl
wb = openpyxl.load_workbook("fichier.xlsx", data_only=True)
for sheet in wb.sheetnames:
    ws = wb[sheet]
    # Lire les lignes et colonnes utiles
```
 
Exemple d'extraction CSV :
```python
import pandas as pd
df = pd.read_csv("fichier.csv", encoding="utf-8", sep=";")
# Si erreur d'encodage, réessayer avec encoding="latin-1"
```
 
Si un fichier est illisible ou corrompu, le signaler explicitement à l'étape 1 et poursuivre l'analyse sur les fichiers disponibles.
 
---
 
## Génération du rapport Word (.docx)
 
**À la fin de l'analyse, générer systématiquement un rapport Word.**
 
### Instructions de génération
 
1. Consulter la skill `docx` pour les règles de création docx-js.
2. Installer si nécessaire : `npm install -g docx`
3. Générer le rapport avec la structure suivante :
 
**Structure du rapport Word :**
- Page de garde : nom de l'organisme (si connu), exercice N, date d'analyse, mention "CONFIDENTIEL"
- Sommaire automatique (TableOfContents)
- Section 1 — Synthèse dirigeant
- Section 2 — Tableau des anomalies et points de vigilance (tableau Word complet)
- Section 3 — Top 10 des corrections prioritaires (liste numérotée)
- Section 4 — Questions bloquantes (liste à puces)
- Section 5 — Conclusion formelle (mise en évidence, fond coloré selon verdict)
- Section 6 — Score de préparation (score /100 en grand format, justification)
 
**Règles de mise en forme :**
- Police : Arial, corps 11pt
- Titres de section : Heading1, bleu (#1F3864), 14pt gras
- Sous-titres : Heading2, 12pt gras
- Tableau des anomalies : en-tête en fond bleu clair (#D5E8F0), texte noir, bordures grises
- Couleur de la conclusion :
  - "Prêt à déposer" → fond vert clair (#E2EFDA)
  - "Sous réserve" → fond orange clair (#FCE4D6)
  - "Non prêt" → fond rouge clair (#FFE0E0)
- Format de page : A4 (11906 × 16838 DXA), marges 1 pouce
- Numéros de page en pied de page
 
**Livraison :**
- Sauvegarder sous `/mnt/user-data/outputs/rapport_bpf_audit_[exercice].docx`
- Utiliser `present_files` pour le remettre à l'utilisateur
- Indiquer clairement que le rapport est disponible au téléchargement
 
---
 
## Limites à signaler systématiquement
 
Si certains contrôles sont impossibles faute de colonnes ou de pièces, indique précisément ce qu'il manque pour aller plus loin.
 
Si un risque concerne le périmètre déclaré ou une incohérence structurelle des données, dis-le clairement, sans surinterpréter.
