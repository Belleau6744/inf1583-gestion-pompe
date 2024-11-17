export type BasePropsType = {
    className?: string;
}

export type PumpIDProp = {
    pumpID: string;
}

export type Pompe_State = 
    "distribution"             |
    "home"                     |
    "selectMode"               | 
    "selectAmount"             |
    "selectVolume"             |
    "selectGrade"              |
    "selectPaymentMethod"      |
    "carteCredit"              |
    "compteClient"             |
    "review"                   |
    "reviewCompteClient"  
;
export type FuelGrade = "regulier"|"premium";
export type UserRole = "admin" | "employee" | "client";

/******************************************************************/
/**
 * Rapport Feature Types
 */
export type RowPumpUnpaidTransaction = {
    id: string;
    pumpID: string;
    date: string;
    amountUnpaid: number;   
}

export type RowPumpTransaction = {
    id: string;
    pumpID: string;
    date: string;
    amount: number;
    paid: number;
    unpaid: number;
}



export type UnpaidTransactionsData = RowPumpUnpaidTransaction[];
export type AllTransactionsData = RowPumpTransaction[];
export type RapportOverview = {
    allTransactions: AllTransactionsData;
    unpaidTransactionReport: UnpaidTransactionsData
}
/******************************************************************/
/**
 * Gestion Pompe Feature
 */
export type Pompe = {
    id: string;
    pumpType: "normal" | "sophistiquee"
    isActive: boolean;
    state: Pompe_State;
    volumeDispensed: number;
    amountDispensed: number;
    isDispensing: boolean;
    fuelGrade?: FuelGrade;
    selectedAmount?: number;
    selectedVolume?: number;
}

type Pompes = {
    [id: string]: Pompe;
}

type Reservoir = {
    id: string;
    fillPercentage: number;
}

type Reservoirs = {
    [id: string]: Reservoir;
}

export type GestionPompe = {
    pompes: Pompes;
    reservoirs: Reservoirs;
}

export type UpdatePumpParam =
    "state"           |
    "isActive"        |
    "volumeDispensed" |
    "amountDispensed" |
    "isDispensing"    |
    "fuelGrade"       |
    "selectedAmount"  |
    "selectedVolume";

// Define the action payload using mapped types to enforce type constraints
export type UpdatePumpPayload<K extends keyof Pompe> = {
    pumpID?: string;
    parameter: K;
    value: Pompe[K];
};
/******************************************************************/
/**
 * User Feature
 */
export type UserState = {
    isSignedIn: boolean;
    userRole: UserRole | undefined;
}

/******************************************************************/
/**
 * Parametres Generaux
 */
export type ParametresType = {
    /** Prix de l'essence reguliere ($/L) */
    prixRegulier: number;
    /** Prix de l'essence premium ($/L) */
    prixPremium: number;
    /** Taxe Provinciale (c$/L) */
    taxe: number;
    /** Nombre d'unite de volume dipense par interval */
    vitesseDistribution: number;
    /** Interval de temps pour la distribution (ms)  */
    intervalDistribution: number;
    /* Information de connexion pour le compte admin */
    utilisateurAdmin: {
       username: string;
        motDePasse: string;
    }
    utilisateurEmployee: {
        username: string;
         motDePasse: string;
     }
}