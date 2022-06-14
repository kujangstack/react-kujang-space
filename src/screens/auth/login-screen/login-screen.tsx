import { AuthLayout } from '@/components/layouts';
import { FC } from 'react';
import { LoginForm } from './components';

const LoginScreen: FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginScreen;
