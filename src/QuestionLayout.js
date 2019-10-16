import React from 'react';
import Button from 'react-bootstrap/Button';
// import QuestionBank from './QuestionBank';
import Example from './QuestionBank';

   

const QuestionLayout = props => {
    return(
        <div className="pb-4 QuestionContainer">
            <div className="Question mt-3 pt-4 pb-4">
                <h2>Q: Where did Ross and Rachel get married on a whim?</h2>
            </div>
            <div className="options">
                <Button block className="option-A"><strong>A.  </strong>Atlantic City</Button>
                <br />
                <Button block className="option-B"><strong>B.  </strong>Las Vegas</Button>
                 </div>
            <div className="mt-5">
                <Button className="End-quiz col-5" onClick ={props.EndIsClicked}> End</Button>
                <Button className="Next-question col-5" onClick ={props.NextIsClicked}> Next</Button>
                <Example />
            </div>
        </div>
    )
}

export default QuestionLayout;