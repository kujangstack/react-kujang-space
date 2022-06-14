// Redux.
import { combineReducers } from 'redux';

// Reducers.
import appReducer, { IAppState } from './app/app-reducer';
import authReducer, { IAuthState } from './auth/auth-reducer';

// Interfaces.
export interface RootState {
  app: IAppState;
  auth: IAuthState;
}

// Root reducer.
export const rootReducer = combineReducers<RootState>({
  app: appReducer,
  auth: authReducer,
});
