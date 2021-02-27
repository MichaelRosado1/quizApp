import React from 'react';
import data from './data.json';
import QuizTopic from './QuizTopic';
import Quizquestions from './Quizquestions';
function App() {

  return (
    <div className="App">
      <QuizTopic data={data.quiztopic}/>      
      <Quizquestions questions={data.QuizQs} />
    </div>
  );
}

export default App;
