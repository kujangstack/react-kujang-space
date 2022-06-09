import { app_setAlert } from '@/store/app/app-action';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface Props {
  to: string;
  messages: string;
}

const RedirectWithMessages: FC<Props> = ({ to, messages }) => {
  const dispatch = useDispatch();
  dispatch(app_setAlert({ show: true, messages, severity: 'error', variant: 'outlined', autoHideDuration: 3000 }));
  return <Navigate to={to} />;
};

export default RedirectWithMessages;
