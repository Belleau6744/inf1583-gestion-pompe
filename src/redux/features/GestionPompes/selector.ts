import { StoreState } from "../../store";

export const getReservoirFillValue = (state: StoreState, reservoirID: string) => {
    return state.gestionPompes.reservoirs[reservoirID];
}