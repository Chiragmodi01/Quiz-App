import React, { useState } from "react";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

import { NextButton, OptionTab, QuizCounter } from "./styled-comps";
import confettiHeader from "../../assets/confettiHeader.svg";
import "./QuizModal.css";

const QuizModal = ({ QuizData, onNextClick }) => {
	const {
		quesNumber = 0,
		totalQuesNumber = 0,
		question = "",
		image = "",
		options = [],
	} = QuizData || {};

	const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
	const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
	const [isInvalidSubmit, setIsInvalidSubmit] = useState(false);

	const handleOptionTabClick = (idx) => {
		setSelectedOptionIndex(idx);
		setIsSubmitEnabled(true);
	};

	const nextClickHandler = () => {
		setIsInvalidSubmit(true);
		setTimeout(() => {
			setIsInvalidSubmit(false);
		}, 300);
		if (isSubmitEnabled) {
			onNextClick();
			setIsSubmitEnabled(false);
		}
	};

	return (
		<div className="modal-wrapper">
			<div className="modal-header">
				<img
					src={confettiHeader}
					alt="header-confetti"
					className="modal-header-image"
				/>
			</div>
			<main className="modal-main">
				<section className="ques-count-wrapper">
					<QuizCounter className="ques-count-container">
						<div className="insideCounter">
							<span className="ques-count-border"></span>
							<div className="ques-count">
								<span className="curren-ques-count">{quesNumber}</span>
								<span className="total-ques-count">/{totalQuesNumber}</span>
							</div>
						</div>
					</QuizCounter>
				</section>
				<section className="quiz-main-wrapper">
					<div className="ques-container">
						<h2 className="question-text">{question}</h2>
						<div className="ques-image-container">
							<img src={image} alt="question-img" className="ques-image" />
						</div>
					</div>
					<div className="quiz-options-wrapper">
						{options.map((option, idx) => {
							return (
								<OptionTab
									isSelected={selectedOptionIndex === idx ? true : false}
									onClick={(e) => handleOptionTabClick(idx)}
									key={idx}
									className="quiz-option-wrapper"
								>
									<div className="inputbox-container">
										<input
											type="checkbox"
											name="option"
											id={`option-${idx}`}
											value={option}
											className="quiz-option-input"
											checked={selectedOptionIndex === idx ? true : false}
											onChange={() => {}}
										/>
										<label htmlFor={`option-${idx}`}></label>
									</div>
									<p className="option-text">{option}</p>
								</OptionTab>
							);
						})}
					</div>
				</section>
				<section className="btn-next-wrapper">
					<NextButton
						onClick={nextClickHandler}
						isInvalidSubmit={isInvalidSubmit}
					>
						<p className="btn-text">Next</p>
						<span className="icon-arrow">
							<ArrowRight size="20" />
						</span>
					</NextButton>
				</section>
			</main>
		</div>
	);
};

export default QuizModal;
