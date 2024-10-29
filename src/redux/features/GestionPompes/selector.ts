import { StoreState } from "../../store";

export const getReservoirs = (state: StoreState) => {
    return state.gestionPompes.reservoirs;
}