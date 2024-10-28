import { createAction } from '@reduxjs/toolkit';

export const setRervoirFillValue = createAction<{ reservoirID: string,  value: number}>('gestionPompe/setRervoirFillValue');