import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { ConnectUserType, UserState } from "@types";
import { connectUser } from './action';

const initialState: UserState = { 
    isSignedIn: false,     
    userRole: undefined,
}

const handleConnectUser = (_state: UserState, action: PayloadAction<ConnectUserType>) => {
    return { isSignedIn: action.payload.authStatus , userRole: action.payload.role}
}

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(connectUser, handleConnectUser)
})