import { FC } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Link as RouterLink } from 'react-router-dom';

import img from '@/assets/images/404kitten.jpg';

const FourOFourScreen: FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: ' Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
      }}
    >
      <Box component="img" src={img} sx={{ width: 300, height: 'auto', borderRadius: 1, mb: 2 }} />
      <Button
        startIcon={<ArrowBackIcon />}
        component={RouterLink}
        to="/"
        variant="contained"
        color="primary"
        disableElevation
      >
        Go Back
      </Button>
    </div>
  );
};

export default FourOFourScreen;
