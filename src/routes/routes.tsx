// Interfaces.
import type { RouteObject } from 'react-router-dom';

// Screens.
import { DashboardScreen, LockScreen } from '@/screens';

// Routes object.
export const routes = (): Array<RouteObject> => [
  {
    path: '/',
    element: <DashboardScreen />,
  },
  {
    path: '/lockscreen',
    element: <LockScreen />,
  },
];
