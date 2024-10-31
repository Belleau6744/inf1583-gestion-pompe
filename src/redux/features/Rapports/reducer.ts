import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { addUnpaidTransaction } from "./action";
import { RapportOverview, RowPumpUnpaidTransaction } from "./types";

const initialState: RapportOverview = {
    unpaidTransactionReport: []
}

const handleAddUnpaidTransaction = (
    state: RapportOverview,
    action: PayloadAction<RowPumpUnpaidTransaction>
) => {
    state.unpaidTransactionReport.push(action.payload);
}

export const gestionPompesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addUnpaidTransaction, handleAddUnpaidTransaction)
})