import { createMuiTheme } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: amber[500],
    },
  },
});

export default theme;
