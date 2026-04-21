

```markdown
# Fichier de référence : Analyse d'Impact relative à la Protection des Données (AIPD) 

**AIPD.md - Guide pratique pour les Organismes de Formation (OF) traitant des données à risque élevé**

L’Analyse d’Impact relative à la Protection des Données (AIPD), aussi appelée PIA (Privacy Impact Assessment), est un outil fondamental de responsabilisation prévu par l'article 35 du RGPD. Elle permet aux organismes de construire des traitements de données respectueux de la vie privée et de démontrer leur conformité. 

L'AIPD est **obligatoire** pour tout traitement susceptible d'engendrer un risque élevé pour les droits et libertés des personnes.

---

## 1. Quand une AIPD est-elle requise pour un Organisme de Formation ?

Pour savoir si un traitement nécessite une AIPD, il faut se référer aux lignes directrices du Comité Européen de la Protection des Données (CEPD, ancien G29) ainsi qu'à la liste officielle de la CNIL.

### A. Les 9 critères du CEPD (Lignes directrices)
Le CEPD a défini neuf critères permettant d'identifier un traitement à risque élevé. **La règle générale est que si un traitement remplit au moins deux de ces neuf critères, une AIPD est requise**. Dans certains cas exceptionnels, un seul critère peut suffire.

Pour un Organisme de Formation (OF), ces critères s'appliquent couramment de la manière suivante :

1. **Évaluation ou scoring (y compris le profilage)** : Évaluation des performances, des aptitudes ou du comportement des apprenants (ex: prédiction de la réussite, profilage comportemental).
2. **Décision automatisée avec effet légal ou similaire** : Refus d'une candidature à une formation ou d'une certification basé uniquement sur un algorithme.
3. **Surveillance systématique** : Télésurveillance des examens en ligne (proctoring), contrôle constant de l'activité des employés ou des stagiaires via des plateformes d'apprentissage.
4. **Données sensibles ou hautement personnelles** : Traitement de données de santé (ex: dossiers de reconnaissance de handicap/PMR pour aménagement des formations), ou données financières.
5. **Collecte à large échelle** : Traitement d'un volume massif de données de stagiaires, que ce soit au niveau national ou sur de longues durées.
6. **Croisement de données** : Combinaison de bases de données issues de différentes sources (ex: croisement des données d'apprentissage avec des données issues des réseaux sociaux ou de Pôle Emploi).
7. **Personnes vulnérables** : Les employés et les stagiaires/étudiants sont considérés comme vulnérables en raison du déséquilibre de pouvoir (lien de subordination ou dépendance vis-à-vis de l'OF pour l'obtention d'un diplôme).
8. **Usage innovant (nouvelles technologies)** : Utilisation de l'Intelligence Artificielle pour la correction de copies, l'analyse des émotions ou la biométrie (ex: reconnaissance faciale pour l'accès aux locaux ou aux examens).
9. **Exclusion du bénéfice d'un droit ou d'un contrat** : Traitements pouvant entraîner l'exclusion automatique d'un service.

### B. La liste CNIL des traitements avec AIPD obligatoire
La CNIL a également publié une liste de 14 types d'opérations pour lesquelles une AIPD est **automatiquement requise**. Pour les acteurs de la formation, il faut particulièrement surveiller :
* Les traitements établissant des **profils de personnes à des fins de gestion des ressources humaines**.
* Les traitements visant à **surveiller de manière constante l'activité des employés** (ou formateurs).
* L'utilisation de **données biométriques** pour la reconnaissance de personnes vulnérables (ex: contrôle d'accès biométrique des stagiaires).
* Les traitements gérant des alertes ou signalements (ex: dispositifs de signalement de harcèlement).

*Note : La CNIL a aussi publié une liste d'exemptions (traitements RH basiques pour <250 employés, gestion standard des clients), mais la moindre innovation technologique ou croisement de données annule cette exemption.*

---

## 2. Le logiciel PIA de la CNIL : l'outil open source pour conduire son AIPD

Conduire une AIPD est un processus complexe. Pour faciliter cette démarche et accompagner les responsables de traitement, la CNIL a développé et publié le **logiciel PIA** (Privacy Impact Assessment). 

Il s'agit d'un **outil gratuit et open source**, conçu pour construire et démontrer sa conformité au RGPD de façon structurée. 

### Les avantages du logiciel PIA pour votre OF :
* **Un parcours didactique pas à pas** : L'interface ergonomique déroule la méthodologie officielle de la CNIL. Elle garantit qu'aucune étape de l'analyse ne soit oubliée.
* **Une base de connaissances intégrée** : Le logiciel intègre des éléments juridiques (tirés du RGPD) et des conseils techniques issus du guide de sécurité de la CNIL. Le logiciel vous propose des solutions contextuelles pendant que vous rédigez.
* **Visualisation des risques (Risk Map)** : Le logiciel génère automatiquement des cartographies visuelles permettant d'estimer rapidement la gravité et la vraisemblance des risques pour la vie privée, avant et après l'application de mesures de sécurité.
* **Formats modulaires** : Disponible en 20 langues, l'outil peut être téléchargé et exécuté directement sur un poste de travail Windows, Mac ou Linux (version portable), ou bien déployé sur les serveurs web de l'OF (modes front-end et back-end) pour un travail collaboratif.

---

## 3. Méthodologie : Que contient une AIPD structurée ?

L'AIPD doit impérativement être menée **avant** la mise en œuvre du nouveau traitement. Si vous utilisez l'outil PIA de la CNIL, il vous guidera à travers ces 3 grandes phases légales :

### Phase 1 : Description détaillée du contexte et du traitement
* Description technique et opérationnelle : Quelles données des apprenants/formateurs sont collectées ? Pourquoi ? Qui y a accès ?.
* Cartographie du cycle de vie de la donnée (du recueil à la suppression).

### Phase 2 : Évaluation juridique (Nécessité et Proportionnalité)
* Vérification des principes fondamentaux non négociables : définition stricte de la base légale, durée de conservation justifiée, minimisation des données collectées.
* Garanties concernant l'information transparente des stagiaires et les moyens mis en place pour qu'ils puissent exercer leurs droits (accès, rectification, effacement).

### Phase 3 : Évaluation des risques et plan d'action (Mesures de sécurité)
* Identification des menaces pesant sur la sécurité des données : risques d'atteinte à la **confidentialité**, **l'intégrité** et la **disponibilité** des données.
* Mesure de l'impact potentiel sur les stagiaires ou les collaborateurs (gravité et vraisemblance).
* Description des mesures techniques (chiffrement, pseudonymisation, contrôle d'accès) et organisationnelles (formation de l'équipe pédagogique) mises en place pour réduire ces risques.

---

## 4. Points d'attention pour le DPO et la Direction de l'OF

* **Le rôle du Délégué à la Protection des Données (DPO)** : Le DPO de l'organisme de formation doit obligatoirement être impliqué. C'est le responsable de traitement (l'OF) qui est garant de l'AIPD, mais il doit demander conseil au DPO et consigner son avis formel dans le document final.
* **Consultation des personnes concernées** : Il est recommandé de demander l'avis des représentants du personnel (CSE) ou des apprenants lors de l'élaboration de l'AIPD.
* **Mise à jour régulière** : L'AIPD n'est pas un document figé. Il doit être mis à jour (idéalement tous les 2 à 3 ans) ou dès que le traitement de formation évolue techniquement.
* **Consultation préalable de la CNIL** : Si, à l'issue de l'AIPD, le risque pour les stagiaires ou employés reste "élevé" malgré vos mesures de sécurité, l'OF a l'obligation légale de consulter la CNIL avant de commencer le traitement des données.

> *"L'AIPD n'est pas qu'une simple contrainte : c'est un formidable outil pour instaurer un climat de confiance avec vos stagiaires et partenaires, en démontrant que votre OF place l'éthique et la sécurité de leurs données au centre de ses projets."*.
```
