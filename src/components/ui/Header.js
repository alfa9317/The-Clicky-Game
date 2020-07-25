import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';

import logo from '../../assets/logo2CG.png'

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 20 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
         ...theme.mixins.toolbar,
         marginBottom: '35px',
    },
    logo: {
        height: '90px',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            textAlign: 'center',
            maxWidth: '100%',
            maxHeight: '70%'
        }
        } 
}))

export default function Header(props) {

    const classes = useStyles()

    return(
        <React.Fragment>
            <ElevationScroll>
                <Appbar position='fixed'>
                    <Toolbar disableGutters>
                        <img alt='logo' src={logo} className={classes.logo}/>
                    </Toolbar>
                </Appbar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}
