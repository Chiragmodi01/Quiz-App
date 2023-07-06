import React, { useState } from "react";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

import { NextButton, OptionTab, QuizCounter } from "../styled-comps";
import confettiHeader from "../../assets/confettiHeader.svg";
import "./QuizModal.css";

const QuizModal = ({ QuizData, onNextClick }) => {
	const {
		quesNumber = 0,
		totalQuesNumber = 0,
		question = "",
		image = "",
		answer,
		options = [],
	} = QuizData || {};

	const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
	const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
	const [isInvalidSubmit, setIsInvalidSubmit] = useState(false);
	const [userAnswer, setUserAnswer] = useState("");
	const [showImgSkeleton, setShowImgSkeleton] = useState(true);

	const handleOptionTabClick = (idx) => {
		setUserAnswer(options[idx]);
		setSelectedOptionIndex(idx);
		setIsSubmitEnabled(true);
	};

	const nextClickHandler = () => {
		setIsInvalidSubmit(true);
		setTimeout(() => {
			setIsInvalidSubmit(false);
		}, 300);
		if (isSubmitEnabled) {
			const isCorrect = userAnswer === answer;
			onNextClick(userAnswer, isCorrect);
			setIsSubmitEnabled(false);
		}
	};

	const CounterSvg = () => {
		return (
			<svg viewBox="0 0 36 36" class="circular-chart orange">
				<path
					class="circle-bg"
					d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
				<path
					class="circle"
					stroke-dasharray={`${(quesNumber / totalQuesNumber) * 100}, 100`}
					d="M18 2.0845
							a 15.9155 15.9155 0 0 1 0 31.831
							a 15.9155 15.9155 0 0 1 0 -31.831"
				/>
			</svg>
		);
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
					<QuizCounter
						quesNumber={quesNumber}
						className="flex-wrapper ques-count-container"
					>
						<div class="single-chart">
							<CounterSvg />
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
						{image && (
							<div className="ques-image-container">
								{showImgSkeleton && <div className="skeleton"></div>}
								<img
									onLoad={() => setShowImgSkeleton(false)}
									src={image}
									alt="question-img"
									className="ques-image"
								/>
							</div>
						)}
					</div>
					<div
						className={`quiz-options-wrapper ${
							!!image ? "height-min" : "height-max"
						}`}
					>
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
						<p className="btn-text">
							{totalQuesNumber === quesNumber ? "Submit" : "Next"}
						</p>
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
