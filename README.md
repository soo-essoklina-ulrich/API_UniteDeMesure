# API Measure

## Description

Ce projet est une API pour la gestion des unités de mesure. Elle permet de créer, lire, mettre à jour et supprimer des unités de mesure.

## Endpoints

### 0. Base URL

- **URL**: `/api/`

### 1. Créer une unité de mesure

- **URL**: `/unite`
- **Méthode**: `POST`
- **Données à envoyer**:
  ```json
  {
    "category": "category_name",
    "mainUnit": "principal_unite",
    "units": ["list of unite"]
  }
  ```
- **Données reçues**:
  ```json
  {
    "id": "category_id",
    "category": "category_name",
    "mainUnit": "principal_unite",
    "createdAt": "date",
    "updatedAt": "date"
  }
  ```

### 2. Lire toutes les unités de mesure

- **URL**: `/unite`
- **Méthode**: `GET`
- **Données reçues**:
  ```json
  [
    {
      "id": "category_id",
      "category": "category_name",
      "mainUnit": "principal_unite",
      "createdAt": "date",
      "updatedAt": "date"
    }
  ]
  ```

### 3. Lire une unité de mesure par ID

- **URL**: `/unite/{id}`
- **Méthode**: `GET`
- **Données reçues**:
  ```json
  {
    "id": "category_id",
    "category": "category_name",
    "mainUnit": "principal_unite",
    "createdAt": "date",
    "updatedAt": "date"
  }
  ```

### 4. Mettre à jour une unité de mesure

- **URL**: `/unite/{id}`
- **Méthode**: `PUT`
- **Données à envoyer**:
  ```json
  {
    "category": "category_name",
    "mainUnit": "principal_unite"
  }
  ```
- **Données reçues**:
  ```json
  {
    "id": "category_id",
    "category": "category_name",
    "mainUnit": "principal_unite",
    "createdAt": "date",
    "updatedAt": "date"
  }
  ```

### 5. Supprimer une unité de mesure

- **URL**: `/units/{id}`
- **Méthode**: `DELETE`
- **Données reçues**:
  ```json
  {
    "message": "Unit deleted successfully"
  }
  ```

## Installation

Clonez le dépôt et installez les dépendances:

```bash
git clone <URL_DU_DEPOT>
cd api_measure
npm install
```

## Démarrage

Pour démarrer le serveur:

```bash
npm run start
```

## Develeppoment Server

Pour démarrer le serveur dans un environement de dev:

```bash
npm run dev
```

<!-- ## Tests

Pour exécuter les tests:

```bash
npm test
``` -->

## Contribuer

Les contributions sont les bienvenues. Veuillez soumettre une pull request pour toute modification.

## Base de Données MySQL

Pour configurer la base de données MySQL avec Prisma, suivez les étapes ci-dessous :

1. **Installation de MySQL**:

   - Téléchargez et installez MySQL depuis [le site officiel](https://dev.mysql.com/downloads/).
   - Assurez-vous que le service MySQL est en cours d'exécution.

2. **Création de la base de données**:

   - Connectez-vous à MySQL en utilisant `mysql` ou un autre client MySQL.
   - Exécutez la commande suivante pour créer une nouvelle base de données :
     ```sql
     CREATE DATABASE `nom de la base de donnée`;
     ```

3. **Configuration des variables d'environnement**:

   - Créez un fichier `.env` à la racine du projet.
   - Ajoutez les variables d'environnement suivantes :
     ```
     DATABASE_URL="mysql://your_mysql_user:your_mysql_password@localhost:3306/api_measure"
     ```
   - ou copie de fichier .env.example et renommer le `.env`

4. **Configuration de Prisma**:

   - Modifiez le fichier `prisma/schema.prisma` pour utiliser MySQL :

     ```prisma
     datasource db {
       provider = "mysql"
       url      = env("DATABASE_URL")
     }

     generator client {
       provider = "prisma-client-js"
     }

     // Ajoutez vos modèles ici
     ```

5. **Migration de la base de données**:
   - Utilisez Prisma pour créer les tables nécessaires :
     ```bash
     npx prisma migrate dev --name init
     ```

Votre base de données MySQL est maintenant configurée et prête à être utilisée avec l'API.

- Pour configurer Prisma avec un autre type de base de données,

- veuillez consulter la documentation officielle de Prisma : [prisma sqlite doc](https://www.prisma.io/docs/getting-started/quickstart-sqlite)

## Deploie

L'API est déployée sur Render: [API_mesureunite](https://api-unitedemesure.onrender.com)

## Licence

Ce projet est sous licence MIT.
