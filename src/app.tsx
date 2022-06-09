import { FC } from 'react';

// Router.
import { BrowserRouter } from 'react-router-dom';

// Context providers.
import { ThemeProvider, ReduxProvider } from '@/providers';

// App route switch.
import AppRoutes from '@/app-routes';

// Components.
import { Snackbar } from '@/components/base/snackbar';

const App: FC = () => {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <BrowserRouter>
          <AppRoutes />
          <Snackbar />
        </BrowserRouter>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default App;
