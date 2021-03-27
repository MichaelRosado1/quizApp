import React from 'react';

const Quizquestions = (props) => {
    const questions = props.questions;
    
    return (
        <div>
            <h3>
                {console.log(questions)}
                {questions.question}
            </h3>

            <p>{questions.answerChoiceA}</p>
            <p>{questions.answerChoidB}</p>
            <p>{questions.answerChoiceB}</p>
            <p>{questions.answerChoiceC}</p>
            <p>{questions.answerChoiceD}</p>

        </div>
    )
}
export default Quizquestions;