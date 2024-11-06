import { createAction } from '@reduxjs/toolkit';
import { ParametresType } from '@types';

export const updateParameters = createAction<ParametresType>('parametresGeneraux/updateParameters');