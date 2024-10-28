import { FuelGrade, Pompe_State } from "@types";

type Pompe = {
    id: string;
    etat: Pompe_State;
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