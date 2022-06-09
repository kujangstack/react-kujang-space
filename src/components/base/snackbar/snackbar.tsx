import { app_resetAlert } from '@/store/app/app-action';
import { FC, SyntheticEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Alert from '@mui/material/Alert';
import MuiSnackbar from '@mui/material/Snackbar';
import { useAppSelector } from '@/store';

interface Props {
  to: string;
  messages: string;
}

const Snackbar: FC = () => {
  const dispatch = useDispatch();
  const { show, autoHideDuration, severity, messages, variant } = useAppSelector((state) => state.app.alert);

  const handleClose = (event?: SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(app_resetAlert());
  };

  useEffect(() => {
    return () => {
      setTimeout(handleClose, autoHideDuration);
    };
  }, [show]);

  // Render Snackbar only if show = true;
  return show ? (
    <MuiSnackbar open={show} autoHideDuration={autoHideDuration} onClose={handleClose}>
      <Alert variant={variant ?? 'filled'} onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {messages}
      </Alert>
    </MuiSnackbar>
  ) : null;
};

export default Snackbar;
