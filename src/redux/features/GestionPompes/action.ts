import { createAction } from '@reduxjs/toolkit';
import { UpdatePumpParam, UpdatePumpPayload } from "@types";

/**
 * @param reservoirID - The id of the reservoir that should be impacted
 * @param value - How much to reduce the fill value
 */
export const reduceRerservoirFillValue = createAction<{ reservoirID: string,  value: number }>('gestionPompe/reduceRerservoirFillValue');

export const setReservoirValue = createAction<{ reservoirID: string,  value: number }>('gestionPompe/setReservoirValue');

/**
 * Reset a resevoir back to 100
 * @param reservoirID - The id of the reservoir that should be impacted (if not provided, reset All)
 */
export const resetReservoir = createAction<{ reservoirID?: string }>('gestionPompe/resetReservoir');

export const updatePump = createAction<UpdatePumpPayload<UpdatePumpParam>>('gestionPompe/updatePump');

export const resetPumpByID = createAction<{ pumpID: string }>('gestionPompe/resetPumpByID');
