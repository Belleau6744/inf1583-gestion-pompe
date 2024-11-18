import { Pompe_State } from "@types";

export const getStateString = (currentState: Pompe_State) => {
    switch (currentState) {
        case "inactive":
            return "Pompe desactivee";
        case "distribution":
            return "Distribution d'essence";
        case "home":
        case "selectMode":
            return "Selection mode de distribution"
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