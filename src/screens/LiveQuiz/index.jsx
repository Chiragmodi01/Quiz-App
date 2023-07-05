import React from 'react'
import QuizModal from '../../components/QuizModal/QuizModal'
import QuizData from '../../data/sample.json'

const LiveQuiz = () => {
  return (
    <div>
      {
        QuizData.map((quiz)=> {
          return (
            <QuizModal key={quiz.id} QuizData={quiz} />
          )
        })
      }
    </div>
  )
}

export default LiveQuiz