import { Features } from "@features";
import { configureStore } from '@reduxjs/toolkit';
import { GestionPompe } from './features/GestionPompes/types';
import { UserState } from './features/User/types';

export type StoreState = {
    user: UserState;
    gestionPompes: GestionPompe;
}

export const reducer = {
    user: Features.UserFeature.reducer.userReducer,
    gestionPompes: Features.GestionPompesFeature.reducer.gestionPompesReducer
}

export const store = configureStore({
    reducer,
    // TODO Uncomment next line to hide actions from devTool
    // devTools: false
})