import React, { useState } from 'react'
import './App.css';

import QuizModal from './components/QuizModal/QuizModal'
import QuizData from './data/sample.json'
import Home from './components/Home/Home';
import Result from './components/Result/Result';

const App = () => {
  const [quesIndex, setQuesIndex] = useState(0);
  const [currentScreenIdx, setCurrentScreenIdx] = useState(1);

  const onNextClick = () => {
    if(currentScreenIdx === 1) {
      setCurrentScreenIdx(2)
    }
    if(currentScreenIdx === 2) {
      if(quesIndex === QuizData.length-1) {
        setCurrentScreenIdx(3)
      }
      setQuesIndex(prev => prev+1);   
    }
    if(currentScreenIdx === 3) {
      setCurrentScreenIdx(1)
    }
  }

  const CurrentScreen = () => {
    if(currentScreenIdx === 1) {
      return <Home onNextClick={onNextClick} />
    } else if (currentScreenIdx === 2) {
      return  <QuizModal QuizData={QuizData[quesIndex]} onNextClick={onNextClick} />
    }
    else if (currentScreenIdx === 3) {
      return <Result onNextClick={onNextClick} />
    } else {
      return
    }
  }

  return (
    <div className='App'>
      <CurrentScreen />
    </div>
  )
}

export default App