import React from "react";
import {makeStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tada from 'react-reveal/Tada';
import Character from '../../components/game/Character';

import logo from "../../assets/rick-and-morty-logo.png"
import characters from "../../characters.json"

const useStyles = makeStyles(theme => ({
    logo: {
        width: '20rem',
        display: 'block',
        margin: '0 auto',
        marginTop: '60px',
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]:{
            width: '15rem'
        },
        [theme.breakpoints.down('xs')]:{
            width: '12rem'
        }
    },
    gameContainer:{
        margin: '10%',
        padding: '20%',
        marginTop: '0%',
        background: theme.palette.common.blue,
        height: '70%',
        display: 'flex',
        flexFlow: 'row wrap',
        padding: '20px',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        overflow: 'auto'
    }
}))

export default function Home(props){

    const classes = useStyles()

    return (
        
        <div>
            <Tada>
                <img alt="rick and morty logo" src={logo} className={classes.logo}/>
            </Tada>
            <div className={classes.gameContainer}>
                {characters.map(character => (
                    <Character 
                    name={character.name}
                    image={character.image}
                    /> 
                ))}
                {console.log(characters)}
            </div>    
        </div>
        
      );
}
