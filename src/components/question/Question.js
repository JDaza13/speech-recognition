import React from 'react';
import './Question.scss';

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
          answer: 'female',
          forward: false
        };
        this.forwardQuestion = this.forwardQuestion.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        
        if (this.state.forward) {
        this.endForwardQuestion = setTimeout(() => { 
            this.setState(() => ({forward: false}));
        }, 1000);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.endForwardQuestion);
    }
    
    forwardQuestion() {
        this.setState(state => ({forward: true}));
    }
    
    render() {
        return (
            <Paper className={this.state.forward ? 'container-forwarding' : ''}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" className="question-title">Please select your gender</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={this.state.answer} onChange={(event) => this.setState({ answer: event.target.value})}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                  </RadioGroup>
                </FormControl>
                <Button variant="contained" color="primary" className="button-next" onClick={this.forwardQuestion}>Next</Button>
            </Paper>
        );
    }
}

export default Question;