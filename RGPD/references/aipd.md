# AIPD - repères pratiques pour les organismes de formation

## 1. Quand une AIPD doit être envisagée

L'analyse d'impact relative à la protection des données (AIPD) est prévue par l'article 35 du RGPD. Elle s'impose lorsque le traitement est susceptible d'engendrer un risque élevé pour les droits et libertés des personnes.

Pour raisonner, il convient de mobiliser :
- les critères issus des lignes directrices européennes ;
- les listes CNIL des traitements pour lesquels une AIPD est requise ou non ;
- le contexte réel du traitement.

## 2. Situations OF où la vigilance doit être renforcée

Une AIPD peut devenir nécessaire, par exemple, en présence de :
- surveillance systématique à grande échelle ;
- traitement de données sensibles à grande échelle ;
- proctoring ou surveillance intrusive d'examens ;
- profilage ou scoring ayant des effets significatifs ;
- usage d'IA ou de biométrie dans des processus sensibles ;
- croisement de plusieurs sources pour évaluer des personnes vulnérables.

Ne pas écrire qu'une AIPD est automatiquement requise pour tout traitement RH ou tout traitement de handicap dans un organisme de formation. Il faut qualifier le niveau de risque, l'échelle, la systématicité et les garanties existantes.

## 3. Méthode attendue dans la skill

Quand l'utilisateur décrit un traitement potentiellement risqué :
1. décrire précisément le traitement ;
2. identifier les données, les personnes concernées, les outils et les destinataires ;
3. repérer les critères de risque élevé ;
4. conclure : AIPD manifestement requise / à analyser plus finement / a priori non requise ;
5. proposer un plan de travail ou une trame d'AIPD.

## 4. Points juridiques à ne pas déformer

- Le DPO doit être consulté s'il est désigné.
- L'absence d'AIPD obligatoire n'exonère pas d'une analyse de conformité.
- Une AIPD doit être préparée avant la mise en oeuvre du traitement risqué.

## 5. Trame courte d'analyse à produire

```text
Traitement concerné
Finalité
Personnes concernées
Catégories de données
Outils et flux
Critères de risque élevé repérés
Mesures existantes
Mesures complémentaires proposées
Conclusion sur la nécessité d'une AIPD
```

---

# Méthodologie d'évaluation des risques et détermination de l'obligation d'AIPD

L'analyse d'impact relative à la protection des données (AIPD) constitue une composante importante du principe d'accountability. Conformément aux cadres réglementaires européens, cette obligation impose au responsable de traitement de mettre en oeuvre des mécanismes internes et des procédures documentées pour démontrer, à tout moment, la conformité de ses opérations.

Cette étape de pré-évaluation permet d'ancrer la protection de la vie privée dès la conception et de prévenir des risques juridiques, organisationnels et financiers.

## 1. Fondements et cadre de référence de l'évaluation

L'évaluation repose sur la détection du risque élevé, pivot juridique déclenchant l'obligation issue de l'article 35 du RGPD.

### 1.1. Les piliers réglementaires

Le cadre s'appuie notamment sur :
- l'article 35 du RGPD ;
- les délibérations CNIL n° 2018-326 et 2018-327.

La méthodologie poursuit trois objectifs :
- identifier les caractéristiques intrinsèques du traitement susceptibles de porter atteinte aux libertés ;
- évaluer la gravité et la probabilité des risques pour les droits des personnes ;
- traiter les risques via des mesures techniques et organisationnelles proportionnées.

### 1.2. Identification des acteurs clés et responsabilités

La décision de lancer une AIPD n'est pas une simple appréciation technique. Elle engage la responsabilité juridique de l'entité.

| Acteur | Rôle et responsabilités |
|---|---|
| Responsable de traitement | Pilotage légal. Il assume la responsabilité ultime de la réalisation de l'analyse et du choix des mesures d'atténuation. |
| DPO | Rôle de conseil et de contrôle. Il conseille sur la nécessité de l'AIPD, vérifie sa qualité et doit être consulté s'il est désigné. |
| RSSI / sécurité IT | Évalue les menaces sur la disponibilité, l'intégrité et la confidentialité. Propose les solutions de sécurisation adaptées. |
| Sous-traitants | Ont une obligation de coopération. Ils fournissent la documentation technique sur les outils qu'ils opèrent pour le compte du responsable de traitement. |
| Instances représentatives du personnel | Peuvent être à consulter lorsque le traitement impacte les conditions de travail ou la surveillance des salariés. |
| Personnes concernées | Leur consultation peut être utile pour apprécier l'acceptabilité du dispositif et les attentes en matière de vie privée. |

### 1.3. Définition du risque élevé

Le risque élevé n'est pas une probabilité purement mathématique. Il s'agit d'une évaluation contextuelle de l'impact potentiel sur les droits fondamentaux. Il peut se manifester lorsque le traitement, par sa nature ou sa portée, est susceptible d'entraîner des dommages physiques, matériels ou moraux, par exemple :
- discrimination ;
- usurpation d'identité ;
- perte financière ;
- atteinte importante à la vie privée ;
- exclusion d'un droit ou d'un service.

Le renforcement de la sécurité informatique n'annule pas, à lui seul, l'obligation légale de réaliser une AIPD lorsque les critères de risque élevé sont réunis.

---

## 2. Premier filtre : listes de conformité de la CNIL

L'autorité de contrôle nationale fournit des repères pour sécuriser juridiquement l'analyse.

### 2.1. Analyse de la "blacklist" CNIL

La CNIL liste certains types d'opérations exigeant une AIPD systématique. Pour chaque type, le facteur de risque dominant justifie l'obligation.

1. Santé en établissements : données sensibles et personnes vulnérables.
2. Données génétiques : données sensibles et vulnérabilité.
3. Profilage RH : évaluation, scoring et vulnérabilité.
4. Surveillance constante de l'activité des employés : surveillance systématique et vulnérabilité.
5. Alertes sanitaires ou sociales : données sensibles et évaluation.
6. Dispositifs d'alerte professionnelle : évaluation et risque de représailles.
7. Entrepôts de données de santé : données sensibles et grande échelle.
8. Profilage avec exclusion contractuelle : décision automatisée et exclusion d'un droit.
9. Gestion mutualisée des manquements : décision automatisée et croisement de données.
10. Profilage à partir de sources externes : croisement de données et scoring.
11. Biométrie appliquée à des personnes vulnérables : données sensibles et vulnérabilité.
12. Logement social : évaluation et vulnérabilité économique.
13. Accompagnement médico-social : données sensibles et évaluation.
14. Géolocalisation à grande échelle : surveillance systématique et grande échelle.

### 2.2. Examen de la "whitelist"

Certaines délibérations CNIL identifient des traitements pour lesquels une AIPD n'est en principe pas requise.

Attention : un traitement n'est réellement dispensé d'AIPD que s'il ne présente pas de risque élevé au regard des critères applicables.

### 2.3. Synthèse de l'orientation immédiate

Règle de décision :
- si le traitement figure sur la liste des traitements nécessitant une AIPD, l'analyse doit être engagée ;
- s'il figure sur une liste de traitements dispensés, la conformité reste à documenter ;
- s'il ne figure dans aucune liste, il faut appliquer les critères d'évaluation du CEPD.

---

## 3. Second filtre : évaluation selon les 9 critères du CEPD

Pour les traitements non listés, les critères du CEPD permettent d'apprécier la probabilité d'un risque élevé selon la nature, la portée, le contexte et les finalités du traitement.

### 3.1. Grille d'analyse des critères de risque

| Critère | Analyse d'impact sur les libertés |
|---|---|
| 1. Évaluation / scoring | Profilage prédictif. Risque de discrimination ou d'exclusion. |
| 2. Décision automatisée | Effet juridique ou similaire sans intervention humaine suffisante. |
| 3. Surveillance systématique | Observation constante de personnes ou de comportements. |
| 4. Données sensibles | Santé, biométrie, opinions, etc. Risque d'atteinte grave à l'intimité. |
| 5. Grande échelle | Nombre élevé de personnes, volume important, durée longue ou large couverture géographique. |
| 6. Croisement de données | Ré-identification, enrichissement excessif ou dépassement des attentes raisonnables. |
| 7. Personnes vulnérables | Enfants, salariés, personnes dépendantes, publics fragilisés. |
| 8. Usage innovant | IA, IoT, biométrie, drones, technologies nouvelles ou peu stabilisées. |
| 9. Exclusion d'un droit | Blocage d'accès à un contrat, un service, une prestation ou un droit. |

### 3.2. Règle de cumul et seuil de déclenchement

La règle pratique couramment retenue est que le cumul de deux critères peut justifier la réalisation d'une AIPD.

Toutefois, un seul critère peut suffire selon le contexte, par exemple lorsqu'il existe un niveau d'atteinte particulièrement important ou une forte vulnérabilité des personnes concernées.

L'intelligence artificielle appelle une vigilance particulière car elle combine souvent :
- usage innovant ;
- scoring ou évaluation ;
- croisement de données ;
- vulnérabilité des personnes concernées.

---

## 4. Focus spécifique : intelligence artificielle et systèmes algorithmiques

Les outils d'IA doivent être analysés au regard des usages concrets, des données traitées, de leur provenance et des effets potentiels sur les personnes.

### 4.1. Qualification du risque IA et responsabilités

Il convient de distinguer :
- les concepteurs ou fournisseurs du modèle ;
- les intégrateurs ;
- les réutilisateurs dans un contexte métier donné.

Le responsable de traitement doit apprécier l'usage final, les données mobilisées, les flux, les risques de mémorisation, d'extraction, de ré-identification, de biais ou de décisions défavorables.

### 4.2. Critères d'AIPD appliqués à l'IA

Une AIPD doit être sérieusement envisagée lorsque le projet d'IA réunit plusieurs des critères suivants :
- innovation technologique ;
- scoring ou évaluation ;
- traitement de données sensibles ;
- traitement de données de personnes vulnérables ;
- décisions produisant des effets significatifs ;
- croisement de plusieurs jeux de données.

### 4.3. Recommandations sectorielles de vigilance

- Éducation : attention particulière aux mineurs, à l'évaluation automatisée et aux effets sur les parcours.
- Santé : vigilance renforcée en cas d'aide au diagnostic ou de traitement de données de santé.
- Travail : vigilance renforcée pour les outils affectant le recrutement, l'évaluation, la performance ou la surveillance des salariés.

---

## 5. Protocole de formalisation et outils d'aide à la décision

La qualité de la documentation constitue une preuve importante du sérieux de la démarche de conformité.

### 5.1. Structure type d'une AIPD

Une AIPD comporte en pratique quatre blocs :
1. description détaillée du traitement, des flux et des finalités ;
2. analyse de la nécessité et de la proportionnalité ;
3. appréciation des risques pour les droits et libertés ;
4. mesures techniques et organisationnelles de réduction du risque.

### 5.2. Outils utiles

- Logiciel PIA de la CNIL.
- Référentiels et lignes directrices du CEPD.
- Outils internes de cartographie des traitements, de gestion des risques et de documentation des mesures.

### 5.3. Issue de l'évaluation et consultation préalable

Deux situations doivent être distinguées :
- si le risque résiduel est maîtrisé, le traitement peut être mis en oeuvre sous réserve des garanties prévues ;
- si le risque résiduel demeure élevé malgré les mesures envisagées, une consultation préalable de la CNIL doit être envisagée conformément au RGPD.

Cette méthodologie doit être revue à chaque évolution substantielle du traitement, des finalités, des outils ou des risques.

---

## Références à privilégier

- RGPD, article 35.
- CNIL, analyses d'impact relatives à la protection des données.
- CNIL, listes des traitements pour lesquels une AIPD est requise ou non requise.
- CEPD, lignes directrices sur l'analyse d'impact et la notion de risque élevé.
- Outil PIA de la CNIL.
