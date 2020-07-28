import React, {useState, useEffect} from "react";
import {makeStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tada from 'react-reveal/Tada';
import Character from '../../components/game/Character';

import logo from "../../assets/rick-and-morty-logo.png"
import characters from "../../characters.json"

function shuffle(array) {

    array.sort(function (a, b) { return 0.5 - Math.random() })
    return array;

  }

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
        background: '#ebecf1',
        height: '70%',
        display: 'flex',
        flexFlow: 'row wrap',
        padding: '20px',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        overflow: 'auto'
    }
}))

export default function Home(){
      
    const classes = useStyles()

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value,setValue] = useState(0);
    const [message, setMessage] = useState("Click an image to begin!!");
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [flag, setFlag] = useState(0);
    const [inCharacters, setInCharacters] = useState(characters);
    const [charactersList, setCharactersList] = useState(characters);
    

    const handleClick = id => {
        setCharactersList(shuffle(charactersList));
        setScore(score+1);
        console.log(id);
    }

    useEffect(() => {
        
        console.log(`Eso ${charactersList}`);

    })
    


    return (
        
        <React.Fragment>
            <Tada>
                <img alt="rick and morty logo" src={logo} className={classes.logo}/>
            </Tada>
            <div className={classes.gameContainer}>
            <Grid container justify='center' spacing={1}>

                <Grid item >
                    {`Score: ${score}`}
                </Grid>
                <Grid item>
                    <Grid container direction='row' justify="center" alignItems="center"spacing={1}>
                        {charactersList.map(character => (
                            <Grid item >
                                <Character
                                handleClick={handleClick}
                                id={character.id}
                                key={character.id}  
                                name={character.name}
                                image={character.image}
                                /> 
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
    
            </div>    
        </React.Fragment>
        
      );
}
