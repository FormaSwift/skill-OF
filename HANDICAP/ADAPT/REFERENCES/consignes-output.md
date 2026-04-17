# Consignes de mise en forme des outputs

> Ce fichier définit la charte graphique et les formats de sortie.
> À personnaliser avec votre identité visuelle avant utilisation.
> Charger systématiquement avant toute génération de document, fiche ou infographie.

---

## Identité visuelle

**Nom de l'organisme :** Formaswift
**Signature / baseline :** Conseil en organisation et qualité des organismes de formation

**Palette de couleurs**

| Rôle | Couleur | Hex |
|:---|:---|:---|
| Couleur principale | Teal Formaswift | `#15999A` |
| Couleur secondaire | Brique | `#C97C5D` |
| Neutre foncé | Gris anthracite | `#2D2D2D` |
| Neutre clair | Gris perle | `#F5F5F5` |
| Texte courant | Noir doux | `#1A1A1A` |
| Fond document | Blanc | `#FFFFFF` |

**Typographies**
- Titres : **Inter Bold** ou à défaut **Arial Bold**
- Corps de texte : Inter Regular ou Arial, taille 11-12pt, interligne 1,4
- Fiches formateur / notes internes : taille 11pt minimum (accessibilité)
- À éviter : serif, script, polices décoratives

**Logo**
- Nom textuel "Formaswift" en teal `#15999A`, poids Bold
- Pas d'image vectorielle disponible dans ce fichier — insérer manuellement si besoin

---

## Formats de documents

### Fiche formateur (A4 portrait)

```
┌─────────────────────────────────────────────────────┐
│ [Bandeau teal #15999A]  FICHE FORMATEUR             │
│ [Titre de la situation / thème]    [Date]           │
├─────────────────────────────────────────────────────┤
│ Sections en blocs distincts                         │
│ Titres de section : teal #15999A, Bold              │
│ Corps : noir #1A1A1A, 11pt                          │
│ Points d'alerte : brique #C97C5D                    │
├─────────────────────────────────────────────────────┤
│ [Pied de page gris perle]                           │
│ Formaswift — Document confidentiel — [Année]        │
└─────────────────────────────────────────────────────┘
```

### Note interne / coordination (A4 portrait)

```
┌─────────────────────────────────────────────────────┐
│ NOTE INTERNE                        [Date]          │
│ De : Référent Handicap                              │
│ À : [Destinataire]                                  │
│ Objet : [Objet court]                               │
├─────────────────────────────────────────────────────┤
│ Corps en prose courte, pas de murs de texte         │
│ Listes courtes (3-5 items max)                      │
│ Tableau "mesure / responsable / échéance" si besoin │
├─────────────────────────────────────────────────────┤
│ Formaswift — [Année]                                │
└─────────────────────────────────────────────────────┘
```

### Bilan de compensation (A4 portrait, 1-2 pages max)

Structure imposée :
1. Contexte de la situation (3-4 lignes)
2. Aménagements mis en oeuvre (tableau : mesure / date / acteur)
3. Effets observés
4. Difficultés persistantes
5. Recommandations pour la suite
6. Preuves conservées

### Infographie LinkedIn (1080×1080px, format carré)

- Fond : blanc `#FFFFFF` ou teal très clair `#E8F7F7`
- Titre : teal `#15999A`, Bold, 28-32px
- Corps : gris anthracite `#2D2D2D`, 16-18px
- Accent / chiffre clé : brique `#C97C5D`, Bold
- Icônes : style line, couleur teal
- Marge intérieure : 60px minimum sur tous les côtés
- Pas plus de 5 lignes de texte par visuel
- Logo "Formaswift" en bas à droite, taille discrète

### Check-list (format web ou imprimable)

- Cases à cocher visuelles (✅ / ❌ / 🟡)
- Regroupement par thème avec titre teal
- Niveau de risque indiqué en couleur : 🔴 Fort / 🟡 Moyen / 🟢 Faible
- Version imprimable : fond blanc, pas de couleur de fond de cellule

---

## Style rédactionnel Formaswift

**Ton général**
- Professionnel et bienveillant
- Direct, sans condescendance
- Orienté solutions, jamais culpabilisant

**Règles typographiques**
- Apostrophes droites ( ' ) — pas de guillemets typographiques sauf citation
- Tirets simples ( - ) pour les listes, pas de tirets longs
- Majuscule uniquement en début de phrase et noms propres
- Pas de point final après les items de liste courte
- Espaces insécables avant : et ; (règle française)

**Structure des phrases**
- Phrases courtes (15 mots max en moyenne)
- Listes courtes : 3 à 5 items, jamais plus de 7
- Un seul message par paragraphe
- Pas de jargon médical, pas d'acronymes sans explication au premier usage

**Ce qu'on évite**
- "Il convient de..." → "Faites..."
- "Dans le cadre de..." → couper
- "Force est de constater..." → jamais
- Listes à rallonge (> 7 items sans regroupement)
- Gras partout = gras nulle part

---

## Instructions pour Claude

Quand tu génères un document, une fiche ou une infographie pour Formaswift :

1. Appliquer la palette définie ci-dessus
2. Respecter le format approprié (fiche formateur, note interne, bilan, infographie)
3. Appliquer le style rédactionnel (phrases courtes, apostrophes droites, tirets simples)
4. Inclure toujours : nom "Formaswift" + année en pied de document
5. Pour les SVG/HTML inline : utiliser les hex exactes, pas de couleurs approchantes
6. Signaler si un format demandé n'est pas couvert dans ce fichier
