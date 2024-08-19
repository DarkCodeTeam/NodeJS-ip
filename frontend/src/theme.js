
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FF88',  
    },
    secondary: {
      main: '#00C853',  
    },
    background: {
      default: '#0A0A0A', 
      paper: '#121212',  
    },
    text: {
      primary: '#E0E0E0', 
      secondary: '#B9F6CA',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h6: {
      color: '#B9F6CA', 
      fontWeight: 600,
    },
    body1: {
      color: '#E0E0E0',  
    },
    button: {
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #0A0A0A, #1A1A1A)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 255, 136, 0.2)',
          padding: '16px',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #00FF88, #00C853)',
          color: '#0A0A0A',
          borderRadius: '12px',
          padding: '12px 24px',
          '&:hover': {
            background: 'linear-gradient(145deg, #00C853, #00FF88)',
            boxShadow: '0 4px 20px rgba(0, 255, 136, 0.3)',
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#00FF88',
        },
      },
    },
  },
});

export default theme;
