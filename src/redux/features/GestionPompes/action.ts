import { createAction } from '@reduxjs/toolkit';

/**
 * @param reservoirID - The id of the reservoir that should be impacted
 * @param value - How much to reduce the fill value
 */
export const reduceRerservoirFillValue = createAction<{ reservoirID: string,  value: number}>('gestionPompe/reduceRerservoirFillValue');

/**
 * Reset a resevoir back to 100
 * @param reservoirID - The id of the reservoir that should be impacted (if not provided, reset All)
 */
export const resetReservoir = createAction<{reservoirID?: string}>('gestionPompe/resetReservoir');