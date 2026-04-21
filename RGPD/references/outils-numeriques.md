---
# Outils Numériques et Conformité RGPD pour les Organismes de Formation

## Introduction
En tant qu'organisme de formation (OF), vous agissez en qualité de **Responsable de Traitement** pour les données de vos apprenants, clients et formateurs. Les outils numériques que vous utilisez (LMS, visioconférence, signature électronique) agissent généralement en tant que **Sous-traitants**. 

À ce titre, vous avez l'obligation de s'assurer que ces outils présentent des garanties suffisantes quant à la mise en œuvre de mesures techniques et organisationnelles appropriées répondant aux exigences du RGPD.

---

## 1. Cartographie des outils métiers de la formation

### A. Plateformes LMS et Gestion de formation (ERP)
Ces plateformes traitent des données d'identification, de vie professionnelle et des données de connexion.

*   **Formdev** : Formdev est un logiciel ERP tout-en-un en mode SaaS dédié aux organismes de formation. Il agit en tant que sous-traitant et s'engage à ne pas vendre ou louer les données. Il présente de fortes garanties de conformité :
    *   **Hébergement localisé :** Les données sont hébergées 100 % en France sur des serveurs répartis dans plusieurs datacenters, avec des sauvegardes quotidiennes et un Plan de Reprise d'Activité (PRA).
    *   **Fonctionnalités RGPD intégrées :** L'outil permet d'anonymiser en un clic les fiches des apprenants inactifs depuis une durée définie. Les données d'identification sont masquées, mais les informations restent conservées de manière anonyme pour vos statistiques et l'édition de votre Bilan Pédagogique et Financier (BPF).
    *   **Sécurité et conformité :** Formdev est également certifié NF203 pour la facturation informatisée.
*   **Digiforma** : Agit en tant que sous-traitant. Les données sont hébergées dans l'Union Européenne. Digiforma fait appel à des sous-traitants ultérieurs comme AWS (Irlande), Heroku (Irlande) et Brevo (Europe). Le client OF reste seul responsable du respect des obligations d'information et de la tenue du registre des traitements.
*   **Teachizy** : Plateforme de création et de vente de formations. Elle agit comme sous-traitant pour les données des apprenants et exige des formateurs qu'ils recueillent le consentement adéquat. Les données sont hébergées en France chez O2switch et les paiements sont gérés par Stripe (avec des données bancaires chiffrées).

### B. Outils de Visioconférence
*   **Zoom** : Outil largement utilisé pour les classes virtuelles. Zoom s'engage sur la conformité RGPD et propose un Addenda mondial sur le traitement des données (DPA). L'outil met également à disposition des fiches de données de confidentialité pour ses différents services.

### C. Outils de Signature Électronique
*   **Yousign** : Utilisé pour la signature de devis, conventions ou feuilles d'émargement. Yousign agit en tant que sous-traitant. Les données sont hébergées en Europe et Yousign met en place un "Accord de traitement des données" (DPA) intégré à son contrat. L'OF est responsable de la licéité des traitements et des instructions données à Yousign.

### D. Outils de Bureautique et Communication
*   **Google Workspace** (Drive, Meet, Gmail, Docs) : Google agit comme sous-traitant pour les données clients. Google propose un amendement relatif au traitement des données ("Data Processing Amendment") et s'engage à maintenir des certifications de sécurité (ISO 27001, SOC 2, SOC 3).
*   **Brevo (ex-Sendinblue)** : Outil d'emailing (également sous-traitant de Digiforma). Son accord de traitement des données (DPA) est accessible à la fin de ses Conditions générales d'utilisation.

---

## 2. Les Obligations Contractuelles : Le DPA (Data Processing Agreement)

Pour chaque outil numérique utilisé, l'organisme de formation doit impérativement signer ou accepter un **Accord de traitement des données (DPA)**.

**Que doit contenir ce DPA ?**
*   Les instructions documentées de l'organisme de formation (Responsable de traitement).
*   Les obligations de sécurité et de confidentialité du sous-traitant.
*   La gestion des sous-traitants ultérieurs (l'outil doit vous informer de tout changement et vous laisser la possibilité de vous y opposer).
*   Le sort des données à la fin du contrat (suppression ou restitution des données).
*   L'obligation d'assistance en cas de demande d'exercice des droits par un apprenant (droit d'accès, rectification, etc.).

---

## 3. Gestion des Transferts Internationaux (Hors UE)

L'utilisation d'outils numériques implique souvent des transferts de données en dehors de l'Espace Économique Européen (EEE). Le RGPD impose un encadrement strict pour garantir que les données conservent un niveau de protection "substantiellement équivalent" à celui de l'UE.

### A. Décisions d'adéquation
Certains pays bénéficient d'une "décision d'adéquation" de la Commission Européenne (ex: Japon, Canada, Suisse, Royaume-Uni, Argentine). Le transfert vers des outils hébergés dans ces pays est autorisé sans restriction particulière.

### B. Le cas des États-Unis et le Data Privacy Framework (DPF)
Suite à l'invalidation du *Privacy Shield* (arrêt Schrems II), un nouveau cadre est entré en vigueur en juillet 2023 : le **Data Privacy Framework (DPF)**. 
*   **Principe** : Si un outil américain (ex: Google, Zoom, AWS, Microsoft) est auto-certifié et inscrit sur la liste active du DPF (département du commerce américain), le transfert est considéré comme légal, comme s'il restait dans l'UE.
*   **Action requise** : L'organisme de formation doit vérifier que l'outil est bien certifié "Actif" sur le site du DPF.

### C. Outils hors pays adéquats (Clauses Contractuelles Types - CCT)
Si l'outil n'est pas dans un pays adéquat et n'est pas certifié DPF, l'OF doit s'appuyer sur l'article 46 du RGPD, généralement en signant des **Clauses Contractuelles Types (CCT/SCC)**.
Toutefois, le Comité Européen de la Protection des Données (CEPD) rappelle que ces clauses ne lient pas les autorités publiques du pays tiers. L'OF doit alors :
1.  Évaluer la législation du pays tiers.
2.  Mettre en place des **mesures supplémentaires** si la législation locale permet un accès disproportionné aux données par les gouvernements. 
3.  **Exemples de mesures techniques efficaces** : Le chiffrement de bout en bout des données (où l'OF conserve les clés) ou la pseudonymisation stricte.
```
