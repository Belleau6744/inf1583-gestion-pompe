import { StoreState } from "../../store";

export const getReservoirFillPercentage = (reservoirID: string) => (state: StoreState) => {
    return state.gestionPompes.reservoirs[reservoirID].fillPercentage;
}

export const getPumpById = (pumpID: string) => (state: StoreState) => {
    return state.gestionPompes.pompes[pumpID];
}