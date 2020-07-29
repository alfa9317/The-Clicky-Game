import React from "react";
import {makeStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import gameTheme from '../../assets/gameTheme.png'

const useStyles = makeStyles( theme =>({
    mainContainer: {
        backgroundColor: 'black'
    },
    title: {
        ...theme.typography.text,
        fontSize: '4rem',
        marginTop: '50px',
        marginBottom: '5px',
        color: 'white',
        [theme.breakpoints.down('md')]:{
            fontSize: '3.5rem',
            margin: '40px'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '3rem',
            margin: '30px'
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '2.5rem',
            margin: '20px'
        }
    },
    image: {
        width: '35rem'
    },
    pad: {
        height: '600px'
    }
}))

export default function About(props){

    const classes = useStyles()

    return (
        
        <div className={classes.mainContainer}>
             <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <Grid item className={classes.title}>
                     About the game
                </Grid>
                <Grid item className={classes.image}>
                    <img alt='game theme image' src={gameTheme} className={classes.image} />
                 </Grid>
                 <Grid item className={classes.pad}/>
             </Grid>
            
        </div>
        
      );
}
