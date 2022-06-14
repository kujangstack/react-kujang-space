// React
import { FC, Suspense } from 'react';

// Hooks router..
import { useRoutes } from 'react-router-dom';

// Routes object.
import { routes } from '@/routes';
import { useAppSelector } from './store';

const AppRoutes: FC = () => {
  const { auth_isAuthenticated } = useAppSelector((state) => state.auth);
  return <Suspense fallback={null}>{useRoutes(routes(auth_isAuthenticated))}</Suspense>;
};

export default AppRoutes;
