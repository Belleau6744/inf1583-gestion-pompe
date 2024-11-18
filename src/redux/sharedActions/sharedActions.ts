import { createAction } from '@reduxjs/toolkit';
import { AddUnpaidTransactionAndResetPump } from '@types';

export const addUnpaidTransactionAndResetPump = createAction<AddUnpaidTransactionAndResetPump>('shared/addUnpaidTransactionAndResetPump');