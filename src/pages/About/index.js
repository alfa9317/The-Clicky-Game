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
        marginTop: '60px',
        marginBottom: '30px',
        color: 'white',
        [theme.breakpoints.down('md')]:{
            fontSize: '3.5rem',
            marginTop: '40px',
            marginBottom: '30px'
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '2rem',
            marginTop: '40px',
            marginBottom: '20px'
        }
    },
    image: {
        width: '35rem',
        [theme.breakpoints.down('sm')]:{
            width: '25rem'
        },
        [theme.breakpoints.down('xs')]:{
            width: '20rem'
        }
    },
    text: {
        color: 'white',
        fontFamily: 'Orbitron',
        marginLeft: '25rem',
        marginRight: '25rem',
        marginTop: '40px',
        textAlign:'center',
        [theme.breakpoints.down('md')]:{
            marginLeft: '15rem',
            marginRight: '15rem'
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft: '10rem',
            marginRight: '10rem'
        },
        [theme.breakpoints.down('xs')]:{
            marginLeft: '5rem',
            marginRight: '5rem'
        }
    },
    pad: {
        height: '400px'
    },divider: {
        color: 'orange',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]:{
            fontSize:'22px'
        }
    },
    description: {
        fontSize:'0.7rem',
        color: 'white',
        fontFamily: 'Orbitron'
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
                 <Grid item className={classes.text}>
                    Welcome to Rick and Morty The Infinite Fracture! 
                 </Grid>
                 <Grid item className={classes.text}>
                    The universe has been fractured into infinite copies of the same dimension. Only Rick can fix it, but this time he will need your help.
                    <br/>
                    <br/>
                    Your role will be to choose only one copy of each character, otherwise you will have to do it all over again.
                    <br/>
                    <br/> 
                    Good luck and remember that the future of the universe is in your hands (literaly).
                 </Grid>
                 <Grid item className={classes.text}>
                    Wubba Lubba Dub Dub!!! 
                 </Grid>
             </Grid>
             <h1 className={classes.divider}>--------------------------------</h1>
             <Grid container direction="column" justify="center" alignItems="center">
                <Grid item className={classes.description}>
                    This is a memory game done with ReactJS and Material UI.  
                 </Grid>
                 <Grid item className={classes.pad}/>
             </Grid>
            
        </div>
        
      );
}
