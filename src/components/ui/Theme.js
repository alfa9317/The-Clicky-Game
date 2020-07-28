import { createMuiTheme } from '@material-ui/core/styles';

const black = '#000000';
const blue = '#0f4c75';

export default createMuiTheme({
    palette: {
        common: {
            black: `${black}`,
            blue: `${blue}`
        },
        primary: {
            main: `${black}`
        },
        secondary: {
            main: `${blue}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Mukta',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1.3rem'
        },
        score: {
            fontFamily: 'Orbitron',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1.3rem'
        },
        text: {
            fontFamily: 'Bungee Inline',
            textTransform: 'none',
            fontWeight: 300
        }
    }
});