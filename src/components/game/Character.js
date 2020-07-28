import React from "react";
import {makeStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(2),
          width: theme.spacing(20),
          height: theme.spacing(20)
        },
        '&:hover':{
            transform: 'scale(1.1)'
        },
        [theme.breakpoints.down('sm')]:{
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(12),
                height: theme.spacing(12)
              }
        },
        [theme.breakpoints.down('xs')]:{
            '& > *': {
                margin: '5px',
                width: theme.spacing(10),
                height: theme.spacing(10)
              },
              '&:hover':{
                transform: 'scale(0)'
            }
        }
      },
      image:{
          width:'100%'
      }
}))

export default function Character(props){
    // <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Paper elevation={7} >
                <img alt={props.name} src={`${process.env.PUBLIC_URL}/${props.image}`} className={classes.image} onClick={() => props.handleClick(props.id)}/>
            </Paper>
        </div>
    )
}