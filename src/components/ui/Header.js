import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';

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
         ...theme.mixins.toolbar
    } 
}))

export default function Header(props) {

    const classes = useStyles()

    return(
        <React.Fragment>
            <ElevationScroll>
                <Appbar position='fixed'>
                    <Toolbar>
                        The Clicky Game
                    </Toolbar>
                </Appbar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}
