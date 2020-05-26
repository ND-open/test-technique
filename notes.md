# Notes

## Run with Docker

Simply run :

```sh
docker-compose up
```

http://localhost:3001 #Front
http://localhost:8800 #Back
http://localhost:8081 #MongoExpress

## Observations

- Inscription/connexion utilisateur fonctionnel
  - Utilisation JWT 
- Bon découpage Front/Back
  - Back, dossiers : controllers, schema, etc
  - Front, dossiers : compononents, etc
- Structures simples et commentées
- Anglais utilisé
- Documentation pour l'installation assez claire
- Probleme avec Schema User bdd (possiblement lié à MA version de Node), corrigé pour les bien de nos tests
- Probleme Coté front, lors de la navigation, il y parfois un rafraichissement de la page a la place de la navigation JS
- La partie gestion des licornes n'a pas été traité

## Questions

- Pourquoi le frontend est dans le dossier Front/clien/ et non Front/ ?
