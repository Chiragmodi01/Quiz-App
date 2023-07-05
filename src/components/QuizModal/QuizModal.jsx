import React from "react";
import { NextButton, OptionTab, QuizCounter } from "../styled-comps";

const QuizModal = ({ QuizData }) => {
	const {
		quesNumber = 0,
		totalQuesNumber = 0,
		question = "",
		image = "",
		options = [],
	} = QuizData || {};

	return (
		<div className="modal-wrapper">
			<div className="modal-header">
				<img src="/" alt="header-confetti" className="modal-header-image" />
			</div>
			<main className="modal-main">
				<section className="ques-count-wrapper">
					<QuizCounter className="ques-count-container">
						<span className="ques-count-border"></span>
						<div className="ques-count">
							<span className="curren-ques-count">{quesNumber}</span>
							<span className="total-ques-count">{totalQuesNumber}</span>
						</div>
					</QuizCounter>
				</section>
				<section className="quiz-main-wrapper">
					<div className="ques-container">
						<h2 className="question">{question}</h2>
						<div className="ques-image-container">
							<img src={image} alt="question-img" className="ques-image" />
						</div>
					</div>
					<div className="quiz-options-wrapper">
						{options.map((option, idx) => {
							return (
								<OptionTab key={idx} className="quiz-option-wrapper">
									<input
										type="checkbox"
										name="option"
										id="option"
										className="quiz-option"
									/>
									<p className="option-text">{option}</p>
								</OptionTab>
							);
						})}
					</div>
				</section>
				<section className="btn-next-wrapper">
					<NextButton>
						<p className="btn-next">Next</p>
						<span className="icon-next">-</span>
					</NextButton>
				</section>
			</main>
		</div>
	);
};

export default QuizModal;
