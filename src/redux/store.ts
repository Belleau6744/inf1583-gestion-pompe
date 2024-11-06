import { Features } from "@features";
import { configureStore } from '@reduxjs/toolkit';
import { GestionPompe, ParametresType, RapportOverview, UserState } from "@types";

export type StoreState = {
    user: UserState;
    gestionPompes: GestionPompe;
    rapports: RapportOverview;
    parametres: ParametresType;
}

export const reducer = {
    user: Features.UserFeature.reducer.userReducer,
    gestionPompes: Features.GestionPompesFeature.reducer.gestionPompesReducer,
    rapports: Features.RapportsFeature.reducer.gestionPompesReducer,
    parametres: Features.ParametresGenerauxFeature.reducer.parametresGenerauxReducer
}

export const store = configureStore({
    reducer,
    // TODO Uncomment next line to hide actions from devTool
    // devTools: false
})