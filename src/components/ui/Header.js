import React, { useState, useEffect } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

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
    },
    tabContainer: {
        marginLeft: 'auto',
        marginRight: '60px'
    },
    tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'  
    } 
}))

export default function Header(props) {

    const classes = useStyles()
    // const theme = useTheme();
    // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    // const matches = useMediaQuery(theme.breakpoints.down('md'));

    // const [openDrawer, setOpenDrawer] = useState(false);
    // const [value,setValue] = useState(0);

    // const handleChange = (e, newValue) => {
    //     setValue(newValue)
    // }

    // const routes = [{name: 'Home', link: '/',activeIndex: 0},
    // {name: 'About The Game', link: '/about',activeIndex: 1}]


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
