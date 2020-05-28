import React from 'react';
import './Question.scss';

import questionList from '../questions.json';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Question extends React.Component {
    
    constructor(props) {
        
        super(props);
        this.state = {
            answer: null,
            forward: false,
            questionIndex: 0
        };
        this.forwardQuestion = this.forwardQuestion.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        
        if (this.state.forward) {
        this.endForwardQuestion = setTimeout(() => { 
            this.setState(() => ({forward: false}));
        }, 500);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.endForwardQuestion);
    }
    
    forwardQuestion() {
        this.setState(state => ({forward: true}));
        if(this.state.questionIndex < questionList.length - 1){
            this.setState(state => ({questionIndex: this.state.questionIndex + 1}));
        }
        else{
            this.setState(state => ({questionIndex: 0}));
        }
        
    }
    
    render() {
        return (
            <Paper className={this.state.forward ? 'container-forwarding' : ''}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className="question-title">{questionList[this.state.questionIndex].title} </FormLabel>
                  <RadioGroup aria-label="single-answer-question" name="single-answer-question" value={this.state.answer} onChange={(event) => this.setState({ answer: event.target.value})}>
                    {questionList[this.state.questionIndex].options.map(function(i) {
                        return (<FormControlLabel value={i.value} label={i.label} control={<Radio />} />);
                    })}
                  </RadioGroup>
                </FormControl>
                <Button variant="contained" color="primary" className="button-next" disabled={this.state.forward} onClick={this.forwardQuestion}>Next</Button>
            </Paper>
        );
    }
}

export default Question;