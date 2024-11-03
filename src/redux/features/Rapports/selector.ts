import { StoreState } from "../../store";

export const getUnpaidTransactionsData = (state: StoreState) => {
    return state.rapports.unpaidTransactionReport;
}

export const getAllTransactionsData = (state: StoreState) => {
    return state.rapports.allTransactions;
}

export const getTransactionsById = (transactionID: string) => (state: StoreState) => {
    return state.rapports.allTransactions.find(item => item.id === transactionID);
}

export const getUnpaidTransactionsById = (transactionID: string) => (state: StoreState) => {
    return state.rapports.unpaidTransactionReport.find(item => item.id === transactionID);
}