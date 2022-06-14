// App action types.
import { AuthActionTypes as Types } from './auth-actions.enum';

// Union actions type.
import { AuthActions } from './auth-actions';

// Interfaces.
import { IUser } from '@/interfaces/user';

// Auth state definition.
export interface IAuthState {
  auth_loginLoading: boolean;
  auth_loginStep: number;
  auth_user?: IUser;
  auth_isAuthenticated: boolean;
}

// Auth init state.
const initialState: IAuthState = {
  auth_loginLoading: false,
  auth_loginStep: 1,
  auth_user: undefined,
  auth_isAuthenticated: false,
};

// App state reducer.
const authReducer = (state: IAuthState = initialState, { type, payload }: AuthActions): IAuthState => {
  switch (type) {
    case Types.auth_SET_LOGIN_LOADING:
      return {
        ...state,
        auth_loginLoading: payload,
      };

    case Types.auth_SET_LOGIN_STEP:
      return {
        ...state,
        auth_loginStep: payload,
      };

    case Types.auth_SET_USER:
      return {
        ...state,
        auth_user: payload,
      };

    case Types.auth_SET_IS_AUTHENTICATED:
      return {
        ...state,
        auth_isAuthenticated: payload,
      };

    default:
      return state;
  }
};

export default authReducer;
