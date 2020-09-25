import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (key) => `@media (min-width:${values[key]}px)`,
  },
  palette: {
    primary: {
      main: '#123c69',
      light: '#bab2b5',
    },
    secondary: {
      main: '#ac3b61',
      light: '#edc7b7',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Open Sans, Roboto, sans serif',
    htmlFontSize: 10,
    h3: {
      fontSize: '3.6rem',
    },
    h4: {
      fontSize: '2.4rem',
    },
    body1: {
      fontSize: 17,
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {},
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '62.5%',
          WebkitFontSmoothing: 'auto',
        },
        body: {
          scrollBehavior: 'smooth',
        },
        '*, *:before, *:after': {
          boxSizing: 'border-box',
        },
      },
    },
  },
});

export default theme;
