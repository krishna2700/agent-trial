# Introduction à React

## Qu'est-ce que React ?

React est une bibliothèque JavaScript créée par Facebook pour construire des interfaces utilisateur (UI) de manière **modulaire**, **rapide** et **maintenable**. Elle est principalement utilisée pour développer des applications web modernes basées sur des composants réutilisables.

## Pourquoi utiliser React ?

- **Composants réutilisables** : vous découpez l'interface en blocs indépendants, ce qui facilite la maintenance et la réutilisation du code.
- **Rendu efficace** : React utilise un DOM virtuel pour mettre à jour l'interface de façon optimisée, en ne modifiant que les parties qui ont réellement changé.
- **Écosystème riche** : une vaste communauté, de nombreux outils et bibliothèques complémentaires sont disponibles.
- **Bonne maintenabilité** : l'architecture orientée composants favorise un code clair et évolutif.

## Concepts clés

### 1. Les composants

Un composant est une fonction (ou une classe) qui retourne du JSX représentant une partie de l'interface.

- **Composant parent** : contient et orchestre d'autres composants.
- **Composant enfant** : reçoit des données du composant parent via les props.

### 2. JSX

JSX est une extension syntaxique de JavaScript qui ressemble à du HTML. Il permet d'écrire la structure de l'interface directement dans le code JavaScript.

Exemple :
```jsx
const element = <h1>Bonjour, React !</h1>;
```

### 3. Props

Les **props** (abréviation de *properties*) sont des données passées d'un composant parent vers un composant enfant. Elles sont en lecture seule dans le composant enfant.

```jsx
function Salutation({ nom }) {
  return <p>Bonjour, {nom} !</p>;
}

// Utilisation
<Salutation nom="Alice" />
```

### 4. State

Le **state** représente les données internes d'un composant qui peuvent évoluer dans le temps (suite à une interaction utilisateur, une réponse API, etc.). Lorsque le state change, React re-rend automatiquement le composant.

### 5. Flux de données unidirectionnel

En React, les données circulent du composant parent vers les composants enfants. Ce modèle rend le comportement de l'application prévisible et facilite le débogage.

## Hooks essentiels

### `useState`

Permet de déclarer et de gérer un état local dans un composant fonctionnel.

```jsx
const [count, setCount] = useState(0);
```

### `useEffect`

Permet d'exécuter des effets secondaires (appels API, abonnements, timers, etc.) après chaque rendu ou lorsqu'une dépendance change.

```jsx
useEffect(() => {
  document.title = `Compteur : ${count}`;
}, [count]);
```

### `useContext`

Permet d'accéder à un contexte global sans avoir à passer les props manuellement à chaque niveau de l'arbre de composants.

## Exemple complet

```jsx
import { useState } from 'react';

function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Valeur actuelle : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button onClick={() => setCount(count - 1)}>Décrémenter</button>
      <button onClick={() => setCount(0)}>Réinitialiser</button>
    </div>
  );
}

export default Compteur;
```

## Bonnes pratiques

- Garder les composants petits, lisibles et responsables d'une seule chose.
- Nommer clairement les composants, fonctions et variables.
- Éviter de placer trop de logique métier directement dans la couche UI.
- Factoriser les éléments réutilisables dans des composants ou des hooks personnalisés.
- Ajouter des tests unitaires et d'intégration au fur et à mesure que le projet grandit.

## Installation et démarrage rapide

```bash
# Créer un nouveau projet React avec Vite
npm create vite@latest mon-projet -- --template react
cd mon-projet
npm install
npm run dev
```

## Ressources utiles

- [Documentation officielle de React](https://react.dev/)
- [React sur GitHub](https://github.com/facebook/react)
- [Tutoriels et exemples](https://react.dev/learn)

## Conclusion

React est une excellente porte d'entrée pour construire des interfaces modernes et robustes. En maîtrisant les composants, les props, le state et les hooks, vous serez en mesure de développer des applications évolutives et professionnelles.
