export type BasePropsType = {
    className?: string;
}

export type PumpIDProp = {
    pumpID: string;
}

export type Pompe_State = 
    "ready"               |
    "home"                |
    "selectAmount"        |
    "selectVolume"        |
    "selectGrade"         |
    "selectPaymentMethod" |
    "carteCredit"         |
    "compteClient"        |
    "review"              
;
export type FuelGrade = "regulier"|"premium";
export type UserRole = "admin" | "employee";

/******************************************************************/
/**
 * Rapport Feature Types
 */
export type RowPumpUnpaidTransaction = {
    id: number;
    pumpNumber: number;
    date: Date;
    amountUnpaid: number;   
}
export type UnpaidTransactionsData = RowPumpUnpaidTransaction[];
export type RapportOverview = {
    unpaidTransactionReport: UnpaidTransactionsData
}
/******************************************************************/
/**
 * Gestion Pompe Feature
 */
export type Pompe = {
    id: string;
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