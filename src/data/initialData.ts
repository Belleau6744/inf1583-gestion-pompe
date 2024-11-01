import { GestionPompe, RowPumpUnpaidTransaction } from "@types";

export const INITIAL_GESTION_POMPE_DATA: GestionPompe = { 
    pompes: {
        "1": {
            id: "1",
            state: "ready",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "2": {
            id: "2",
            state: "ready",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "3": {
            id: "3",
            state: "ready",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "4": {
            id: "4",
            state: "ready",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "5": {
            id: "5",
            state: "ready",
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

export const INITIAL_UNPAID_TRANSACTIONS_DATA: RowPumpUnpaidTransaction[] = [
    { id: 1, pumpNumber: 0, date: new Date('2024-02-02'), amountUnpaid: 14 },
    { id: 2, pumpNumber: 4, date: new Date('2024-08-04'), amountUnpaid: 31 },
    { id: 3, pumpNumber: 2, date: new Date('2024-03-03'), amountUnpaid: 31 },
    { id: 4, pumpNumber: 1, date: new Date('2024-07-02'), amountUnpaid: 11 },
    { id: 5, pumpNumber: 1, date: new Date('2024-02-11'), amountUnpaid: 23 },
    { id: 6, pumpNumber: 3, date: new Date("2024-06-02"), amountUnpaid: 150 },
    { id: 7, pumpNumber: 5, date: new Date('2024-02-02'), amountUnpaid: 44 },
    { id: 8, pumpNumber: 2, date: new Date('2023-01-02'), amountUnpaid: 36 },
]