# Projet Bouton Agent

## Description

Ce projet est une application web simple qui présente un bouton interactif. Lorsque l'utilisateur clique sur le bouton, celui-ci change de couleur pour devenir rouge.

## Structure du Projet

```
/vercel/sandbox/
├── hello.js        # Script JavaScript simple affichant "Hello, World!"
├── index.html      # Page HTML principale avec le bouton interactif
└── README.md       # Ce fichier
```

## Fonctionnalités

- **Bouton Interactif** : Un bouton centré sur la page qui change de couleur au clic
- **Design Responsive** : Interface adaptée à différentes tailles d'écran
- **Animations CSS** : Transitions fluides pour une meilleure expérience utilisateur

## Utilisation

### Ouvrir le Projet

1. Ouvrez le fichier `index.html` dans votre navigateur web préféré
2. Cliquez sur le bouton "Click Me!" pour voir le changement de couleur

### Exécuter le Script JavaScript

Pour exécuter le script `hello.js` :

```bash
node hello.js
```

Cela affichera "Hello, World!" dans la console.

## Technologies Utilisées

- **HTML5** : Structure de la page
- **CSS3** : Styles et animations
- **JavaScript** : Interactivité du bouton

## Détails Techniques

### Le Bouton

Le bouton est centré verticalement et horizontalement grâce à Flexbox. Il possède :
- Un padding de 15px (vertical) et 30px (horizontal)
- Une bordure de 2px solide
- Des coins arrondis (border-radius: 8px)
- Une transition de couleur de fond de 0.3s

### Comportement

Lorsque le bouton est cliqué, la classe CSS `red` est ajoutée, ce qui change la couleur de fond en rouge (#FF0000).

## Personnalisation

Vous pouvez facilement personnaliser :
- La couleur du bouton en modifiant la valeur dans `.red { background-color: #FF0000; }`
- Le texte du bouton en changeant "Click Me!" dans le HTML
- Les dimensions et le style en ajustant les propriétés CSS

## Licence

Ce projet est libre d'utilisation.

## Auteur

Projet créé dans l'environnement Vercel Sandbox.
