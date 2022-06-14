// Enum action types.
import { AuthActionTypes as Types } from './auth-actions.enum';

// Interfaces.
import { IUser } from '@/interfaces/user';

// Actions definitions.
interface IAuthSetLoginLoading {
  type: typeof Types.auth_SET_LOGIN_LOADING;
  payload: boolean;
}
interface IAuthSetLoginStep {
  type: typeof Types.auth_SET_LOGIN_STEP;
  payload: number;
}
interface IAuthSetUser {
  type: typeof Types.auth_SET_USER;
  payload: IUser;
}
interface IAuthSetIsAuthenticated {
  type: typeof Types.auth_SET_IS_AUTHENTICATED;
  payload: boolean;
}

// Union actions type.
export type AuthActions = IAuthSetLoginLoading | IAuthSetLoginStep | IAuthSetUser | IAuthSetIsAuthenticated;

// Actions creator.
export const auth_setLoginLoading = (payload: boolean): IAuthSetLoginLoading => ({
  type: Types.auth_SET_LOGIN_LOADING,
  payload,
});
export const auth_setLoginStep = (payload: number): IAuthSetLoginStep => ({
  type: Types.auth_SET_LOGIN_STEP,
  payload,
});
export const auth_setUser = (payload: IUser): IAuthSetUser => ({
  type: Types.auth_SET_USER,
  payload,
});
export const auth_setIsAuthenticated = (payload: boolean): IAuthSetIsAuthenticated => ({
  type: Types.auth_SET_IS_AUTHENTICATED,
  payload,
});
