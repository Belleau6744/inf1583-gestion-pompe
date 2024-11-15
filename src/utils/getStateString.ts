import { Pompe_State } from "@types";

export const getStateString = (currentState: Pompe_State) => {
    switch (currentState) {
        case "distribution":
            return "Distribution de l'essence";
        case "home":
            return "Pompe desactivee"
        case "selectMode":
            return "Selection du mode de distribution"
        case "selectAmount":
            return "Selection du montant"
        case "selectVolume":
            return "Selection du volume"
        case "selectGrade":
            return "Selection du type d'essence"
        case "selectPaymentMethod":
            return "Selection du mode paiement";
        case "carteCredit":
            return "Paiement par carte de credit";
        case "compteClient":
            return "Vue du compte client";
        case "review":
            return "Revue de la transaction";
        case "reviewCompteClient":
            return "Revue du compte client";
        default:
            return "";
    }

}