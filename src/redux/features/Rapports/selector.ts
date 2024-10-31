import { StoreState } from "../../store";

export const getUnpaidTransactionsData = () => (state: StoreState) => {
    return state.rapports.unpaidTransactionReport;
}

export const getUnpaidTransactionsById = (transactionID: string) => (state: StoreState) => {
    return state.rapports.unpaidTransactionReport.find(item => item.id === transactionID);
}