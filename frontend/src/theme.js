import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#22c55e', // green
    },
    secondary: {
      main: '#38bdf8', // blue
    },

    background: {
      default: '#0f172a',
      paper: 'rgba(255,255,255,0.05)',
    },

    text: {
      primary: '#e5e7eb',
      secondary: '#9ca3af',
    },
  },

  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            radial-gradient(circle at 10% 20%, rgba(34, 197, 94, 0.15), transparent 25%),
            radial-gradient(circle at 90% 10%, rgba(56, 189, 248, 0.15), transparent 25%),
            linear-gradient(180deg, #0f172a 0%, #111827 100%)
          `,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(12px)',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
        },
        contained: {
          background: 'linear-gradient(135deg, #22c55e, #38bdf8)',
          color: '#fff',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 23, 42, 0.8)',
          backdropFilter: 'blur(10px)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(12px)',
        },
      },
    },

    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default theme;
