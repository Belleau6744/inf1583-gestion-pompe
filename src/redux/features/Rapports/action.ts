import { createAction } from '@reduxjs/toolkit';
import { RowPumpUnpaidTransaction } from './types';

export const addUnpaidTransaction = createAction<RowPumpUnpaidTransaction>('rapports/addUnpaidTransaction');