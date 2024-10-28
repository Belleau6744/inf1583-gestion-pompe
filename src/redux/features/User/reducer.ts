import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { UserRole } from "@types";
import { setUserAuthStatus, setUserRole } from './action';
import { UserState } from "./types";

const initialState: UserState = { 
    isSignedIn: false,     
    userRole: undefined,
}

const handleSetUserAuthStatus = (state: UserState, action: PayloadAction<boolean>) => {
    state.isSignedIn = action.payload;
}

const handleSetUserRole = (state: UserState, action: PayloadAction<UserRole>) => {
    state.userRole = action.payload;
}

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUserAuthStatus, handleSetUserAuthStatus)
        .addCase(setUserRole, handleSetUserRole)
})