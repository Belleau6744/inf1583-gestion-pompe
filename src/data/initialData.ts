import { GestionPompe, ParametresType, RowPumpUnpaidTransaction } from "@types";

export const INITIAL_GESTION_POMPE_DATA: GestionPompe = { 
    pompes: {
        "1": {
            id: "1",
            state: "inactive",
            volumeDispensed: 0,
            pumpType: "normal",
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "2": {
            id: "2",
            state: "inactive",
            pumpType: "normal",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "3": {
            id: "3",
            state: "inactive",
            pumpType: "normal",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "4": {
            id: "4",
            state: "inactive",
            pumpType: "sophistiquee",
            volumeDispensed: 0,
            amountDispensed: 0,
            isDispensing: false,
            fuelGrade: undefined,
            selectedAmount: undefined,
            selectedVolume: undefined,
        },
        "5": {
            id: "5",
            state: "inactive",
            pumpType: "sophistiquee",
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
            fillPercentage: 80
        },
        "2": {
            id: "2",
            fillPercentage: 35,
        }
    }
}

export const INITIAL_UNPAID_TRANSACTIONS_DATA: RowPumpUnpaidTransaction[] = [
    { id: "1", pumpID: "1", date: '2024-05-08', amountUnpaid: 14 },
    { id: "2", pumpID: "2", date: '2024-10-04', amountUnpaid: 31 },
    { id: "3", pumpID: "3", date: '2023-03-03', amountUnpaid: 31 },
    { id: "4", pumpID: "4", date: '2023-07-02', amountUnpaid: 11 },
    { id: "5", pumpID: "5", date: '2024-02-11', amountUnpaid: 23 },
    { id: "6", pumpID: "5", date: "2024-09-02", amountUnpaid: 150 },
    { id: "7", pumpID: "3", date: '2024-10-11', amountUnpaid: 44 },
    { id: "8", pumpID: "1", date: '2023-01-02', amountUnpaid: 36 },
]



export const INITIAL_Archive_DATA: RowPumpUnpaidTransaction[] = [
    { id: "1", pumpID: "1", date: '2024-02-02', amountUnpaid: 102 },
    { id: "2", pumpID: "5", date: '2024-08-04', amountUnpaid: 65 },
    { id: "3", pumpID: "3", date: '2024-09-03', amountUnpaid: 21 },
    { id: "4", pumpID: "4", date: '2024-07-02', amountUnpaid: 61 },
    { id: "5", pumpID: "5", date: '2024-02-11', amountUnpaid: 43 },
    { id: "6", pumpID: "2", date: "2024-06-02", amountUnpaid: 120 },
    { id: "7", pumpID: "4", date: '2024-02-02', amountUnpaid: 45 },
    { id: "8", pumpID: "2", date: '2023-01-02', amountUnpaid: 16 },
]
export const PARAMETRES_INITIAUX: ParametresType = {
    prixRegulier: 1.45,
    prixPremium: 1.68,
    vitesseDistribution: 0.01,
    taxe: 0.1920,
    intervalDistribution: 25,
    utilisateurAdmin: {
        username: "admin",
        motDePasse: "password"
    },
    utilisateurEmployee: {
        username: "employee",
        motDePasse: "password"
},}