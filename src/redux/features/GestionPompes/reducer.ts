import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { reduceRerservoirFillValue, resetReservoir } from "./action";
import { GestionPompe } from "./types";

const initialState: GestionPompe = { 
    pompes: {
        "1": {
            id: "1",
            etat: "ready",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "2": {
            id: "2",
            etat: "ready",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "3": {
            id: "3",
            etat: "ready",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "4": {
            id: "4",
            etat: "ready",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "5": {
            id: "5",
            etat: "ready",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        }
    },
    reservoirs: {
        "1": {
            id: "1",
            fillPercentage: 100
        },
        "2": {
            id: "2",
            fillPercentage: 100,
        }
    }
}

const handleReduceRerservoirFillValue = (state: GestionPompe, action: PayloadAction<{ reservoirID: string,  value: number}>) => {
    const prev = state.reservoirs[action.payload.reservoirID].fillPercentage;
    const newValue = prev - action.payload.value;
    const formatedValue = parseFloat(newValue.toFixed(2))
    // Ensure reservoir doesn't go below 0
    state.reservoirs[action.payload.reservoirID].fillPercentage = Math.max(0, formatedValue);
}

const handleResetReservoir = (state: GestionPompe, action: PayloadAction<{ reservoirID?: string}>) => {
    const reservoirID = action.payload.reservoirID;
    if (reservoirID) {
        state.reservoirs[reservoirID].fillPercentage = 100;
    } else {
        Object.keys(state.reservoirs).map(itemID => {
            state.reservoirs[itemID].fillPercentage = 100;
        })
    }
}


export const gestionPompesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(reduceRerservoirFillValue, handleReduceRerservoirFillValue)
        .addCase(resetReservoir, handleResetReservoir)
        
        
})