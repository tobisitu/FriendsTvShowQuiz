import React from 'react';
import Button from 'react-bootstrap/Button';

const QuestionBank = [
    {
        question: ['What was the original name of the show?'],
        answers: ['Insomnia Cafe','Central Perk' ],
        correct: ['Insomnia Cafe'],
        questionId: '1'
    },
    {
        question: 'Where did Ross and Rachel get married on a whim?',
        answers: ['Atlantic City','Las Vegas'],
        correct: ['Las Vegas'],
        questionId: '2'
    }
]
let optionA ;
function Read() {
    for (let [key, value] of Object.entries(QuestionBank)) {
        for (let [key, values] of Object.entries(QuestionBank[key])) {
            for (let [key, option] of Object.entries(values)) {
            // optionA  = option;
            console.log({option});
            return(
                {option}
            );
            }
        }
    }  
}

function Example() {
    for (let [key, value] of Object.entries(QuestionBank)) {
        for (let [key, values] of Object.entries(QuestionBank[key])) {
            for (let [key, option] of Object.entries(values)) {
             optionA  = option;
             console.log({option});
            }
        }
    }
                return (
                        <div>
                            <div className="Question mt-3 pt-4 pb-4">
                                {/* <h2>Q: {questionValue}</h2> */}
                                {/* {console.log({questionValue})} */}
                            </div>
                            <div className="options">
                                <Button block className="option-A"><strong>A.  </strong></Button>
                                <br />
                                
                                <Button block className="option-B"><strong>B.  </strong>{optionA}</Button>
                            </div>
                        </div>
                );
};

// function Example() {
//     for (let [key, value] of Object.entries(QuestionBank)) {
//         for (let [key, questionValue] of Object.entries(value)) {
//             for (let [key, option] of Object.entries(questionValue)) {
//                 return (
//                         <div>
//                             <div className="Question mt-3 pt-4 pb-4">
//                                 <h2>Q: {questionValue}</h2>
//                                 {console.log({questionValue})}
//                             </div>
//                             <div className="options">
//                                 <Button block className="option-A"><strong>A.  </strong>{questionValue[key]}</Button>
//                                 <br />
//                                 <Button block className="option-B"><strong>B.  </strong>{questionValue[key]}</Button>
//                             </div>
//                         </div>
//                 );
//             }
//         }
//     }
// };


// function Example() {
//     for (let [key, value] of Object.entries(QuestionBank)) {
//         for (let [key, questionValue] of Object.entries(QuestionBank[key])) {
//             for (let [key, option] of Object.entries(questionValue)) {
//                 return (
//                         <div>
//                             <div className="Question mt-3 pt-4 pb-4">
//                                 <h2>Q: {questionValue}</h2>
//                                 {console.log({questionValue})}
//                             </div>
//                             <div className="options">
//                                 <Button block className="option-A"><strong>A.  </strong>{option}</Button>
//                                 <br />
//                                 <Button block className="option-B"><strong>B.  </strong>{questionValue}</Button>
//                             </div>
//                         </div>
//                 );
//             }
//         }
//     }
// };


// function QuestionBank (key,value){
//     return (
//         <div>
//             {QuestionBankList[key][value]}
//         </div>
//     );
// }

export default Example;
// export default (i = 2) =>
//     Promise.resolve(QuestionBank.sort(() => 0.02 - Math.random()).slice(0, i));