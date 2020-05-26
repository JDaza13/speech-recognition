import React from 'react';
import './App.scss';

import Question from './components/question/Question.js';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function App() {
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));
  
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} className="question-wrapper">
              <Question></Question>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
