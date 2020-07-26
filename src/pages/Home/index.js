import React from "react";
import {makeStyles} from '@material-ui/styles';
import Tada from 'react-reveal/Tada';

import logo from "../../assets/rick-and-morty-logo.png"

const useStyles = makeStyles(theme => ({
    logo: {
        width: '20rem',
        display: 'block',
        margin: '0 auto',
        marginTop: '50px',
        [theme.breakpoints.down('sm')]:{
            width: '15rem'
        },
        [theme.breakpoints.down('xs')]:{
            width: '12rem'
        }
    }
}))

export default function Home(props){

    const classes = useStyles()

    return (
        
        <div>
            <Tada>
                <img alt="rick and morty logo" src={logo} className={classes.logo}/>
            </Tada>    
        </div>
        
      );
}
