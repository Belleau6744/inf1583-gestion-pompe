import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setRervoirFillValue } from "./action";
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

const handleSetRervoirFillValue = (state: GestionPompe, action: PayloadAction<{ reservoirID: string,  value: number}>) => {
    state.reservoirs[action.payload.reservoirID].fillPercentage = action.payload.value;
}


export const gestionPompesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setRervoirFillValue, handleSetRervoirFillValue)
        
})