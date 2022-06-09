import { FC } from 'react';

const LockScreen: FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: ' Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
      }}
    >
      <h1>Lock Screen</h1>
    </div>
  );
};

export default LockScreen;
