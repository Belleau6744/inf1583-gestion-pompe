import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addUnpaidTransactionAndResetPump } from "@sharedActions";
import { AddUnpaidTransactionAndResetPump, RapportOverview, RowPumpTransaction, RowPumpUnpaidTransaction } from "@types";
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

const handleAddUnpaidTransactionShared = (
    state: RapportOverview,
    action: PayloadAction<AddUnpaidTransactionAndResetPump>
) => {
    state.unpaidTransactionReport.push(action.payload.transaction);
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
        .addCase(addUnpaidTransactionAndResetPump, handleAddUnpaidTransactionShared)
})