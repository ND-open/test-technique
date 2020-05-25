# test-technique

## So ?

- Login : :x: => 401 unauthorized
- Signup : :heavy_check_mark:
- Dashboard : :x: :heavy_check_mark: Possibilité d'y accès uniquement via l'inscription, pas de possibilité de modifier les licornes

## How to run ?

### All
- Vérifier son installation Node.js : lancer la commande node -v

### Back
- cd Back/
- Lancer mongodb : C:\Program Files\MongoDB\Server\4.2\bin\ directory and double-click on mongo.exe || Lancer la commande 'mongod' (https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- yarn
- yarn start

### Front
- cd Front/client/
- yarn
- yarn start

## Techs : 
MERN : {
Mongo,
Express,
React,
Node
}

## Contexte :
Nous avons notre mascotte : Nextie 🦄. Chaque collaborateurs possède sa propre licorne.

Chaque licorne a ses spécificités : un sexe, un type et une couleur.

Ces licornes sont distribuées par un membre de l'administration à un collaborateur, lorsqu'il le souhaite.

## Besoin :
L'administration souhaiterais superviser les licornes depuis une plateforme accessible depuis leurs navigateurs. Le navigateur utilisé est Chrome dans sa version la plus récente.

## Réalisable :
Cette application devra permettre de gérer l'inventaire de licorne et d'en ajouter des nouvelles.

La gestion des licornes attribuées par collaborateurs est nécessaire.

Chaque collaborateur doit également avoir accès à la plateforme afin de pouvoir visualiser les informations sur sa licorne, et également changer son nom.

Les collaborateurs ne faisant pas partie de l'administration ne doivent pas avoir accès aux stocks de licornes et à l'attribution des licornes.

## Contraintes :
Back : libre à toi de choisir le langage
Front : react JS
Vous êtes libre d'utiliser les librairies complémentaires que vous souhaitez.

## Bonus :
Le design du Front se veut simple, cependant toutes améliorations pertinentes (UI/UX).

Dockeriser le projet est un bonus

La démonstration de l'application sur l'environnement de développement est suffisant, une mise en production est un bonus.

Toutes mesure anticipées sur le RGPD sont en bonus.

