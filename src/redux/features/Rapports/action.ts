import { createAction } from '@reduxjs/toolkit';
import { RowPumpTransaction, RowPumpUnpaidTransaction } from "@types";

export const addUnpaidTransaction = createAction<RowPumpUnpaidTransaction>('rapports/addUnpaidTransaction');

export const addTransaction = createAction<RowPumpTransaction>('rapports/addTransaction');