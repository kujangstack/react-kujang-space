import { FC, MouseEvent, ReactElement, useEffect, useRef } from 'react';
import { Paper, Box, TextField, Button, Typography, Link, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import AppLogo from '@/assets/icons/ms-icon-310x310.png';
import { useAppSelector } from '@/store';
import { batch, useDispatch } from 'react-redux';
import {
  auth_setLoginStep,
  auth_setLoginLoading,
  auth_setUser,
  auth_setIsAuthenticated,
} from '@/store/auth/auth-actions';

import { ROUTES } from '@/routes';

// Images assets.
import DefaultAvatar from '@/assets/images/default-avatar.jpg';
import { ArrowBack } from '@mui/icons-material';

const LoginForm: FC = () => {
  const { auth_loginStep, auth_user } = useAppSelector((state) => state.auth);
  const nodeRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement | HTMLDivElement>(null);
  const inputUsernameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleClickBack = (e: MouseEvent<HTMLButtonElement>): void | undefined => {
    if (auth_loginStep === 2) {
      dispatch(auth_setLoginStep(auth_loginStep - 1));
    } else return;
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (auth_loginStep === 1) {
      e.preventDefault();
      dispatch(auth_setLoginLoading(true));
      dispatch(auth_setLoginStep(auth_loginStep + 1));
    } else {
      batch(() => {
        dispatch(auth_setLoginLoading(false));

        // Hardcoded.
        dispatch(
          auth_setUser({
            name: 'Nguyễn Hà Linh',
            userName: 'linh',
            email: 'email@email.com',
            photo_url: null,
          }),
        );

        dispatch(auth_setIsAuthenticated(true));
      });
    }
  };

  useEffect(() => {
    if (auth_loginStep === 1 && inputUsernameRef.current !== null) {
      inputUsernameRef.current.focus();
    } else if (auth_loginStep === 2 && inputPasswordRef.current !== null) {
      inputPasswordRef.current.focus();
    }
  }, [auth_loginStep, inputUsernameRef, inputPasswordRef]);

  return (
    <Paper
      sx={{ width: { xs: '90%', md: 500, overflow: 'hidden', position: 'relative', minHeight: 460 } }}
      elevation={2}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          px: 8,
          py: 6,
        }}
      >
        {auth_loginStep !== 1 && (
          <IconButton onClick={handleClickBack} sx={{ zIndex: 2, position: 'absolute', top: 20, left: 20 }}>
            <ArrowBack />
          </IconButton>
        )}
        <Box
          sx={{
            mb: 3,
            width: 85,
            height: 85,
            mx: 'auto',
            overflow: 'hidden',
            borderRadius: '50%',
            textAlign: 'center',
            userSelect: 'none',
            '& img': { width: 85, height: 'auto' },
          }}
        >
          {auth_loginStep === 1 && <img src={AppLogo} alt={'App logo'} />}
          {auth_loginStep === 2 && <img src={DefaultAvatar} alt={'Avatar user'} />}
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 0.6 }}>
            {auth_loginStep === 1 && 'Welcome Back 👋'}
            {auth_loginStep === 2 && 'Are You Nguyễn Hà Linh ?'}
          </Typography>
          <Typography>
            {auth_loginStep === 1 && 'Please enter your email or username to login'}
            {auth_loginStep === 2 && 'Confirm you by your password'}
          </Typography>
        </Box>

        {auth_loginStep === 1 && (
          <TextField
            ref={inputUsernameRef}
            fullWidth
            margin="none"
            size="small"
            name="username"
            label="Username or Email"
            placeholder="Enter your username or email"
            sx={{ mb: 2 }}
          />
        )}
        {auth_loginStep === 2 && (
          <TextField
            ref={inputPasswordRef}
            fullWidth
            margin="none"
            size="small"
            name="password"
            label="Password"
            placeholder="Enter your password"
            sx={{ mb: 2 }}
          />
        )}
        <Button sx={{ mb: 3 }} onClick={handleClick} size="large" variant="contained" disableElevation fullWidth>
          Next
        </Button>
        <Box sx={{ mb: 2 }}>
          <Typography>Don't have an account ?</Typography>
          <Link component={RouterLink} to={ROUTES.signup} underline="hover">
            Register
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginForm;
