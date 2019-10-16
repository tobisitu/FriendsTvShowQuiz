import React from 'react';
import Button from 'react-bootstrap/Button';

const Intro = props => {
    return(
        <div className="App-intro">
        <p className="pt-3">
              How well do you know the gang? 
            <br /> Let's find out!</p>
            <Button className="Begin-button" block onClick ={props.BeginIsClicked}>Begin</Button>
      </div>
    )
}

export default Intro;