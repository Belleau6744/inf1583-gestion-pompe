import { createAction } from '@reduxjs/toolkit';
import { ConnectUserType } from '@types';

export const connectUser = createAction<ConnectUserType>('user/connectUser');