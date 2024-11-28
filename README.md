# System de gestion de pompes

## Lien du prototype live:
[PROTOTYPE](https://belleau6744.github.io/inf1583-gestion-pompe/)

# Instruction d'utilisations

### 1. Télécharge le projet / Ou directement le cloner
### 2. À l'aide d'un terminal, dirigez vous à la base du projet
### 3. Installer les dépendences du projet à l'aide de npm
   ```
   npm i
   ```
### 4. Démarrer l'application avec npm
   ```
   npm run dev
   ```
   Cela devrait lancer l'application localement à l'adresse
   > http://localhost:5173/inf1583-gestion-pompe
   
### 5. Connexion à l'application

#### - Compte Client

Pour le compte client, vous pouvez directement utiliser le bouton **connexion client** afin d'accéder à l'interface de pompes

#### - Compte Employé

Pour le compte client, il suffit d'utiliser les informations de connexion suivants :
> **ℹ️ Info Compte Admin:** Info de connexion de base
> - username: **admin**
> - password: **password**

#### - Compte Admin

Pour le compte admin, il suffit d'utiliser les informations de connexion suivants :
> **ℹ️ Info Compte Employee:** Info de connexion de base
> - username: **employee**
> - password: **password**

# Fonctionnalités

#### - Compte Client

- Un client peut choisir quelle pompe il veut se servir.
- Il peut ensuite suivre les étapes pour obetenir et payer pour l'essene

#### - Compte Admin

- Il a accès à une vue d'ensemble des pompes et réservoir
   - Il peut activer/déasctiver les pompes
   - (À des fins de prototypage) Il peut modifier le niveaux des réservoirs
- Il a accès à la vue de pompe individuelle comme un client
- Il peut voir l'ensemble des rapports
   - Transactions impayées
   - Archives
- Il a accès à voir/modifier les paramètres du système
   - Prix Premium
   - Prix Regulier
   - Vitesse de Distribution
   - Interval de Distribution
   - Compte Admin - (Username/Mot de passe)
- (Non-Implémenté) Il pourra voir les comptes d'employés et les modifier

#### - Compte Employé

- Il a accès à une vue d'ensemble des pompes et réservoir
   - Il peut activer/déasctiver les pompes
   - (À des fins de prototypage) Il peut modifier le niveaux des réservoirs
- Il a accès à la vue de pompe individuelle comme un client
- Il peut voir l'ensemble des rapports
   - Transactions impayées
   - Archives
