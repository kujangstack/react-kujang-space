// Enum action types.
import { AppActionTypes as Types } from './app-actions.enum';

// Actions definitions.
interface IAppSetLoading {
  type: typeof Types.APP_SET_LOADING;
  payload: boolean;
}
interface IAppSetLock {
  type: typeof Types.APP_SET_LOCK;
  payload: boolean;
}

// Union actions type.
export type AppActions = IAppSetLoading | IAppSetLock;

// Actions creator.
export const appSetLoading = (payload: boolean): IAppSetLoading => ({
  type: Types.APP_SET_LOADING,
  payload,
});

export const appSetLock = (payload: boolean): IAppSetLock => ({
  type: Types.APP_SET_LOCK,
  payload,
});
