import { createMuiTheme } from '@material-ui/core/styles';

const jBlue = '#3282b8';
const jDarkBlue = '#0f4c75';

export default createMuiTheme({
    palette: {
        common: {
            blue: `${jBlue}`,
            darkBlue: `${jDarkBlue}`
        },
        primary: {
            main: `${jBlue}`
        },
        secondary: {
            main: `${jDarkBlue}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Mukta',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1.3rem'
        }
    }
});