import { FuelGrade, Pompe_State } from "@types";

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

