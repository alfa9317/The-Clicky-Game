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
        marginBottom: '25px',
        [theme.breakpoints.down('sm')]:{
            marginBottom: '10px',
            width: '15rem'
        },
        [theme.breakpoints.down('xs')]:{
            width: '12rem'
        }
    },
    gameContainer:{
        margin: '10%',
        padding: '2%',
        marginTop: '0%',
        background: 'white',
        height: '70%',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        overflow: 'auto',
        [theme.breakpoints.down('xs')]:{
            margin: '2%',
            paddingTop: '5%',
            paddingBottom: '10%'
        }
    },
    messageText:{
        ...theme.typography.tab,
        textAlign: 'left',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '1.3rem',
        [theme.breakpoints.down('sm')]:{
            marginTop: '0px',
            marginBottom: '5px',
            marginLeft: '25px'
        }
    },
    statusTextContainer:{
        ...theme.typography.tab,
        fontSize: '1rem',
        textAlign: 'center',
        marginTop: '28px',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]:{
            textAlign: 'left',
            marginTop: '2px',
            marginBottom: '20px',
            marginLeft: '30px'
        }
    },
    score:{
        marginRight:'18px'
    }
}))

export default function Home(){
      
    const classes = useStyles()

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
                    <Grid item xs={12} sm={12} md={6} lg={7}className={classes.messageText}>
                        {`${message}`}
                    </Grid>
                    <Grid container xs={12} sm={12} md={3} lg={2} className={classes.statusTextContainer}>
                        <Grid item className={classes.score}>
                            {`Score: ${score}`}
                        </Grid>
                        <Grid item>
                            {`High score: ${highScore}`}
                        </Grid>
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
