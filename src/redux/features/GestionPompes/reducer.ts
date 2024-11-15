import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { GestionPompe, UpdatePumpParam, UpdatePumpPayload } from "@types";
import { INITIAL_GESTION_POMPE_DATA } from "../../../data/initialData";
import { reduceRerservoirFillValue, resetPumpByID, resetReservoir, setReservoirValue, updatePump } from "./action";

const initialState: GestionPompe = INITIAL_GESTION_POMPE_DATA;

const handleReduceRerservoirFillValue = (
    state: GestionPompe,
    action: PayloadAction<{
        reservoirID: string,
        value: number
    }>
) => {
    const prev = state.reservoirs[action.payload.reservoirID].fillPercentage;
    const newValue = prev - action.payload.value;
    const formatedValue = parseFloat(newValue.toFixed(2))
    // Ensure reservoir doesn't go below 0
    state.reservoirs[action.payload.reservoirID].fillPercentage = Math.max(0, formatedValue);
}

const handleSetReservoirValue = (
    state: GestionPompe,
    action: PayloadAction<{
        reservoirID: string,
        value: number
    }>
) => {
    state.reservoirs[action.payload.reservoirID].fillPercentage = action.payload.value;
}

const handleResetReservoir = (
    state: GestionPompe,
    action: PayloadAction<{ reservoirID?: string}>
) => {
    const reservoirID = action.payload.reservoirID;
    if (reservoirID) {
        state.reservoirs[reservoirID].fillPercentage = 100;
    } else {
        Object.keys(state.reservoirs).map(itemID => {
            state.reservoirs[itemID].fillPercentage = 100;
        })
    }
}

// Update the reducer function
const handleUpdatePump = <K extends UpdatePumpParam>(
    state: GestionPompe,
    action: PayloadAction<UpdatePumpPayload<K>>
) => {
    const { pumpID, parameter, value } = action.payload;

    if (pumpID && state.pompes[pumpID]) {
        state.pompes[pumpID][parameter] = value;
    }
};

const handleResetPumpByID = (
    state: GestionPompe,
    action: PayloadAction<{ pumpID: string }>
) => {
    state.pompes[action.payload.pumpID] = {
        id: action.payload.pumpID,
        isActive: false,
        state: "home",
        pumpType: state.pompes[action.payload.pumpID].pumpType,
        volumeDispensed: 0,
        amountDispensed: 0,
        isDispensing: false,
        fuelGrade: undefined,
        selectedAmount: undefined,
        selectedVolume: undefined
    }
}



export const gestionPompesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(reduceRerservoirFillValue, handleReduceRerservoirFillValue)
        .addCase(setReservoirValue, handleSetReservoirValue)
        .addCase(resetReservoir, handleResetReservoir)
        .addCase(updatePump, handleUpdatePump)
        .addCase(resetPumpByID ,handleResetPumpByID)
        
        
})