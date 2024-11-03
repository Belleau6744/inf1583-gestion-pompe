import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { RapportOverview, RowPumpTransaction, RowPumpUnpaidTransaction } from "@types";
import { addTransaction, addUnpaidTransaction } from "./action";

const initialState: RapportOverview = {
    unpaidTransactionReport: [],
    allTransactions: []
}

const handleAddUnpaidTransaction = (
    state: RapportOverview,
    action: PayloadAction<RowPumpUnpaidTransaction>
) => {
    state.unpaidTransactionReport.push(action.payload);
}

const handleAddTransaction = (
    state: RapportOverview,
    action: PayloadAction<RowPumpTransaction>
) => {
    state.allTransactions.push(action.payload);
}

export const gestionPompesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addUnpaidTransaction, handleAddUnpaidTransaction)
        .addCase(addTransaction, handleAddTransaction)
})