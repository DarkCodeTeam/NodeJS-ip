import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import UserInfo from './components/UserInfo';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000000' }}>
        <UserInfo />
      </div>
    </ThemeProvider>
  );
}

export default App;