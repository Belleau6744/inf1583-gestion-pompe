import { GestionPompe, ParametresType, RowPumpTransaction, RowPumpUnpaidTransaction } from "@types";

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
    { id: "1", pumpID: "1", date: '2024-05-08', amountUnpaid: 14, carPlate: "E82 KWV" },
    { id: "2", pumpID: "2", date: '2024-10-04', amountUnpaid: 31, carPlate: "A32 PDM" },
    { id: "3", pumpID: "3", date: '2023-03-03', amountUnpaid: 31, carPlate: "M23 QWJ" },
    { id: "4", pumpID: "4", date: '2023-07-02', amountUnpaid: 11, carPlate: "A24 WTY" },
    { id: "5", pumpID: "5", date: '2024-02-11', amountUnpaid: 23, carPlate: "E75 MIE" },
    { id: "6", pumpID: "5", date: "2024-09-02", amountUnpaid: 150, carPlate: "Y11 NEJ" },
    { id: "7", pumpID: "3", date: '2024-10-11', amountUnpaid: 44, carPlate: "E12 KOP" },
    { id: "8", pumpID: "1", date: '2023-01-02', amountUnpaid: 36, carPlate: "E12 KOP" },
]


export const INITIAL_ALL_DATA: RowPumpTransaction[] = [
    { id: "1", pumpID: "1", date: '2024-02-02', amount: 362, paid: 362, unpaid: 362 },
    { id: "2", pumpID: "3", date: '2024-09-02', amount: 102, paid: 102, unpaid: 102 },
    { id: "3", pumpID: "2", date: '2024-05-03', amount: 232, paid: 232, unpaid: 232 },
    { id: "4", pumpID: "5", date: '2024-13-02', amount: 127, paid: 127, unpaid: 127 },
    { id: "5", pumpID: "3", date: '2024-21-04', amount: 502, paid: 502, unpaid: 502 },
    { id: "6", pumpID: "2", date: '2024-12-06', amount: 132, paid: 132, unpaid: 132 },
]


export const INITIAL_Archive_DATA: RowPumpUnpaidTransaction[] = [
    { id: "1", pumpID: "1", date: '2024-02-02', amountUnpaid: 102, carPlate: "E82 KWV" },
    { id: "2", pumpID: "5", date: '2024-08-04', amountUnpaid: 65, carPlate: "A32 PDM" },
    { id: "3", pumpID: "3", date: '2024-09-03', amountUnpaid: 21, carPlate: "M23 QWJ" },
    { id: "4", pumpID: "4", date: '2024-07-02', amountUnpaid: 61, carPlate: "Y11 NEJ" },
    { id: "5", pumpID: "5", date: '2024-02-11', amountUnpaid: 43, carPlate: "A24 WTY" },
    { id: "6", pumpID: "2", date: "2024-06-02", amountUnpaid: 120, carPlate: "E62 URN" },
    { id: "7", pumpID: "4", date: '2024-02-02', amountUnpaid: 45, carPlate: "E75 MIE" },
    { id: "8", pumpID: "2", date: '2023-01-02', amountUnpaid: 16, carPlate: "E12 KOP" },
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