# agent-trial

Un dépôt de test simple pour expérimenter avec des agents automatisés et des scripts JavaScript.

## Description

Ce projet est un environnement d'essai léger contenant des scripts JavaScript de base et une page web d'exemple. Il sert principalement à tester et valider le comportement des agents de code automatisés.

## Contenu du projet

| Fichier       | Description                                      |
|---------------|--------------------------------------------------|
| `hello.js`    | Script JavaScript affichant "Hello, World!"      |
| `index.html`  | Page web d'exemple                               |
| `README.md`   | Documentation du projet (ce fichier)             |

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- Un navigateur web moderne (pour `index.html`)

## Utilisation

### Exécuter le script Hello World

```bash
node hello.js
```

Résultat attendu :

```
Hello, World!
```

### Ouvrir la page web

Ouvrez simplement le fichier `index.html` dans votre navigateur, ou lancez un serveur local :

```bash
npx serve .
```

Puis rendez-vous sur `http://localhost:3000`.

## Objectif

Ce dépôt est utilisé comme terrain de test pour les agents automatisés (par exemple, pour valider la création de fichiers, les commits, les branches et les push vers GitHub). Il n'est pas destiné à être utilisé en production.

## Licence

Ce projet est distribué sous licence MIT. Consultez le fichier `LICENSE` pour plus de détails.
