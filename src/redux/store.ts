import { Features } from "@features";
import { configureStore } from '@reduxjs/toolkit';
import { GestionPompe, RapportOverview, UserState } from "@types";

export type StoreState = {
    user: UserState;
    gestionPompes: GestionPompe;
    rapports: RapportOverview;
}

export const reducer = {
    user: Features.UserFeature.reducer.userReducer,
    gestionPompes: Features.GestionPompesFeature.reducer.gestionPompesReducer,
    rapports: Features.RapportsFeature.reducer.gestionPompesReducer
}

export const store = configureStore({
    reducer,
    // TODO Uncomment next line to hide actions from devTool
    // devTools: false
})