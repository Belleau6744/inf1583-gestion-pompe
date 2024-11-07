# System de gestion de pompes

> **ℹ️ Info:** Info de connexion de base
> - username: **admin**
> - password: **password**


## Architecture

#### Dossiers importants
- Types
  - Contient tous les types utilisé dans le projet
  
- Utils
  - Contient les fonctions utilitaires réutilisées au travers le projet
  
- Redux
  - Centralisation et gestion de l'état de l'application
  
- Data
  - Définition des données initiales
  
- Components
  - Tous les composants utilisés dans l'application

#### Structure Redux
- **Action** : Contient le nom des actions existantes sur la feature, ainsi que le type de l'objet fourni lorsqu'on appel l'action.

- **Reducer** : Contient les fonctions qui déterminent comment l'état de l'application doit changer en réponse à une action. Le reducer prend deux arguments : l'état actuel et l'action, et retourne un nouvel état mis à jour.
  
- Selector : Contient des fonctions pour extraire des données du store Redux.

#### Structure generale
```typescript
const Nom_Composant = () => {
  return (
    <div></div>
  )
}

export default Nom_Composant;
```