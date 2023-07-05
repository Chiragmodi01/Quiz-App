import React from 'react'
import './Home.css'
import { NextButton } from '../QuizModal/styled-comps'
import brandlogo from '../../assets/brandlogo.svg'

function Home({onNextClick}) {
  return (
    <div className='Home-wrapper'>
        <header className="header">
            <img src={brandlogo} alt="brand-logo" className='brand-logo-image' />
        </header>
        <div className="app-info">Quiz</div>
        <div className="start-btn-wrapper">
            <NextButton onClick={onNextClick}>Start</NextButton>
        </div>
    </div>
  )
}

export default Home