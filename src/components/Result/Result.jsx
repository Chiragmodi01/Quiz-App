import React from 'react'
import './Result.css'
import { NextButton } from '../QuizModal/styled-comps'
import confettiHeader from '../../assets/confettiHeader.svg'
import meterBg from '../../assets/meterBg.svg'

function Result({onNextClick}) {
  return (
    <div className='Result-wrapper'>
       <div className="modal-wrapper">
			<div className="modal-header">
            <img src={confettiHeader} alt="header-confetti" className="modal-header-image" />
			</div>
			<main className="modal-main">
				<section className="main-wrapper">
					<h2 className="title">Your result</h2>
                    <div className="result-indicator-wrapper">
                        <div>
                            <img src={meterBg} alt="meter-score" className="score-meter-bg" />
                        </div>
                    </div>
                    <div className="result-info-tabs">
                        <div className="result-info-tab correct">
                            <span className="info-indicator"></span>
                            <p className="info-digit">3</p>
                            <p className="info-message">Correct</p>
                        </div>
                        <div className="result-info-tab incorrect">
                            <span className="info-indicator"></span>
                            <p className="info-digit">2</p>
                            <p className="info-message">Incorrect</p>
                        </div>
                        <div className="result-info-tab info">
                            <span className="info-indicator"></span>
                            <p className="info-digit">04s</p>
                            <p className="info-message">Your Total Time</p>
                        </div>
                    </div>
				</section>
				<section className="btn-next-wrapper">
					<NextButton onClick={onNextClick}>
						<p className="btn-text">Start Again</p>
					</NextButton>
				</section>
			</main>
		</div>
    </div>
  )
}

export default Result