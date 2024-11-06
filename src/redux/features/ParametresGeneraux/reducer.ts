import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ParametresType } from "@types";
import { PARAMETRES_INITIAUX } from "../../../data/initialData";
import { updateParameters } from "./action";

const initialState: ParametresType = PARAMETRES_INITIAUX;

const handleUpdateParameters = (
    _state: ParametresType,
    action: PayloadAction<ParametresType>
) => {
    return action.payload;
}

export const parametresGenerauxReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateParameters, handleUpdateParameters)
})