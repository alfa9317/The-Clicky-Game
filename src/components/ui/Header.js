import React, { useState, useEffect } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab  from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    logoContainer: {
        padding: '0',
        '&:hover': {
            backgroundColor: 'transparent'
        },
        margin: '3px 10px 3px 150px',
        [theme.breakpoints.down('sm')]: {
            margin: '3px 0px 3px 0px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
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
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
        borderRadius: '0px'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover':{
            opacity: 1
        }
    },
    drawerIcon: {
        color: 'orange',
        height:'50px',
        width:'50px'
    },
    drawerIconContainer: {
        marginLeft: 'auto'
    },
    drawer: {
        backgroundColor: theme.palette.common.black,
        width: '40vw'
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.black
    },
    drawerItemSelected: {
        '& .MuiListItemText-root': {
            opacity: 1
        }
        
    } 
}))

export default function Header(props) {

    const classes = useStyles()
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value,setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const routes = [{name: 'Home', link: '/',activeIndex: 0},
    {name: 'About The Game', link: '/about',activeIndex: 1}]

    useEffect(() => {

        routes.forEach(route => {
            switch (window.location.hash) {
                case `#${route.link}`:
                    if(value !== route.activeIndex) {
                        setValue(route.activeIndex)
                    }
                    break;
                default:
                    break;
            }
        })

    }, [value, routes])

    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} indicatorColor='secondary' className={classes.tabContainer}>
                {routes.map((route,index) => (
                    <Tab key={`${route}${index}`} className={classes.tab} component={Link} disableRipple to={route.link} label={route.name} />
                ))}
            </Tabs>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)} classes={{paper: classes.drawer}}>
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem divider key={`${route}${route.activeIndex}`} button component={Link} to={route.link} selected={value === route.activeIndex} classes={{selected: classes.drawerItemSelected}} onClick={() => {setOpenDrawer(false);setValue(route.activeIndex)}}>
                            <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    );


    return(
        <React.Fragment>
            <ElevationScroll>
                <Appbar position='fixed'>
                    <Toolbar disableGutters>
                    <Button component={Link} to='#/' disableRipple className={classes.logoContainer} onClick={()=>setValue(0)}>
                        <img alt='logo' src={logo} className={classes.logo}/>
                    </Button>
                    {matches ? drawer : tabs}   
                    </Toolbar>
                </Appbar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}
