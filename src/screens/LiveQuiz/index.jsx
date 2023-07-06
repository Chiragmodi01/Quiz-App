import React, { useState } from 'react'
import QuizModal from '../../components/QuizModal/QuizModal'
import QuizData from '../../data/sample.json'

const LiveQuiz = () => {
  const [quesIndex, setQuesIndex] = useState(0);

  const onNextClick = () => {
    if(quesIndex === QuizData.length-1) {
      alert('show result')
    }
    setQuesIndex(prev => prev+1);
  }

  return (
    <div>
      <QuizModal onNextClick={onNextClick} QuizData={QuizData[quesIndex]} />
    </div>
  )
}

export default LiveQuiz