import React from "react";
import "./Result.css";
import GaugeChart from "react-responsive-gauge-chart";
import { calculateScore } from "../../utils/calculateScore";

import { NextButton } from "../QuizModal/styled-comps";
import confettiHeader from "../../assets/confettiHeader.svg";
import meterBg from "../../assets/meterBg.svg";

function Result({ totalQuestions, userSubmissions, onNextClick }) {
	const meterBorderColors = [
		"#ff3e3e",
		"#ff5f3c",
		"#ff9638",
		"#fdb635",
		"#fdc933",
		"#c8c949",
		"#8ec15f",
		"#44b77b",
	];
	const {finalPercentage, correctAnswers, incorrectAnswers} = calculateScore(userSubmissions, totalQuestions);

	return (
		<div className="Result-wrapper">
			<div className="modal-wrapper">
				<div className="modal-header">
					<img
						src={confettiHeader}
						alt="header-confetti"
						className="modal-header-image"
					/>
				</div>
				<main className="modal-main">
					<section className="main-wrapper">
						<h2 className="title">Your result</h2>
						<div className="result-indicator-wrapper">
							<div className="meter-container">
								<img
									src={meterBg}
									alt="meter-score"
									className="score-meter-bg"
								/>
								<div className="meter-outer-circle">
									<div className="meter-inner-circle">
										<span className="meter-percentage">{finalPercentage}%</span>
									</div>
								</div>
								<GaugeChart
									hideText={true}
									needleColor="black"
									marginInPercent="0.07"
									nrOfLevels="30"
									percent={finalPercentage / 100}
									arcPadding="0"
									cornerRadius="0"
									arcWidth="0.1"
									colors={meterBorderColors}
									className="meter-chart"
									id="gauge-chart1"
								/>
							</div>
						</div>
						<div className="result-info-tabs">
							<div className="result-info-tab correct">
								<span className="info-indicator"></span>
								<p className="info-digit">{correctAnswers}</p>
								<p className="info-message">Correct</p>
							</div>
							<div className="result-info-tab incorrect">
								<span className="info-indicator"></span>
								<p className="info-digit">{incorrectAnswers}</p>
								<p className="info-message">Incorrect</p>
							</div>
							<div className="result-info-tab info">
								<span className="info-indicator"></span>
								<p className="info-digit">04s</p>
								<p className="info-message">Time Consumed</p>
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
	);
}

export default Result;
