// Interfaces.
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

// Screens.
import { DashboardScreen, FourOFourScreen, LockScreen, LoginScreen, RegisterScreen } from '@/screens';

import { ROUTES } from './routes.constants';
import { RedirectWithMessages } from '@/components/common/redirect-with-messages';

// Routes object.
export const routes = (isAuthenticated: boolean): Array<RouteObject> => [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: !isAuthenticated ? (
          <RedirectWithMessages to={ROUTES.signin} messages="Please Sign in" />
        ) : (
          <Navigate to={ROUTES.app} />
        ),
      },
      {
        path: ROUTES.signin,
        element: !isAuthenticated ? <LoginScreen /> : <Navigate to={ROUTES.app} />,
      },
      {
        path: ROUTES.signup,
        element: !isAuthenticated ? <RegisterScreen /> : <Navigate to={ROUTES.app} />,
      },
      {
        path: '*',
        element: <FourOFourScreen />,
      },
    ],
  },
  {
    path: ROUTES.app,
    element: !isAuthenticated ? <RedirectWithMessages to={ROUTES.signin} messages="Please Sign in" /> : <Outlet />,
    children: [
      {
        path: '',
        element: <DashboardScreen />,
      },
      {
        path: 'lockscreen',
        element: <LockScreen />,
      },
    ],
  },
];
