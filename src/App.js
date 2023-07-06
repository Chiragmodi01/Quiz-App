import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

import QuizModal from "./components/QuizModal/QuizModal";
import Home from "./components/Home/Home";
import Result from "./components/Result/Result";
import { useFetchData } from "./utils/useFetchData.jsx";

const App = () => {
  const initialUIserSubmissions = {
		userAnswers: [],
		timeConsumed: [],
		isCorrect: [],
	}
	const [quesIndex, setQuesIndex] = useState(0);
	const [currentScreenIdx, setCurrentScreenIdx] = useState(1);
	const [timeConsumedInSeconds, setTimeConsumedInSeconds] = useState(0);
	const [userSubmissions, setUserSubmissions] = useState(initialUIserSubmissions);

	const API_URL =
		"https://62a14523-2209-44c0-be13-3649b6840ef5.mock.pstmn.io/getQuizData";

	const { isLoading, quizData, serverError, fetchData } = useFetchData(
		API_URL,
		setCurrentScreenIdx
	);

	//? screen 1: home, screen 2: live quiz, screen 3:result report
	//logic to change screen, call fetch func, and start countdown
	const onNextClick = (answer, isQuesCorrect) => {
		let intervalId;
		let counterValue = 0;
		if (currentScreenIdx !== 3) {
			intervalId = setInterval(() => {
				counterValue++;
				// console.log(counterValue);
			}, 800);
		}

		if (currentScreenIdx === 1) {
			setQuesIndex(0);
			!isLoading && fetchData();
		}
		if (currentScreenIdx === 3) {
			setCurrentScreenIdx(1);
      setUserSubmissions(initialUIserSubmissions)
		}

		if (currentScreenIdx === 2) {
			setUserSubmissions((prevState) => ({
				...prevState,
				userAnswers: [...prevState.userAnswers, answer],
				isCorrect: [...prevState.isCorrect, isQuesCorrect],
			}));

			if (quesIndex === quizData.length - 1) {
				setCurrentScreenIdx(3);
				alert(counterValue);
				if (intervalId) {
					setTimeConsumedInSeconds(counterValue);
					clearInterval(intervalId);
					intervalId = null;
				}
			}
			setQuesIndex((prev) => prev + 1);
		}
	};



	const CurrentScreen = () => {
		if (currentScreenIdx === 1) {
			return (
				<Home
					onNextClick={onNextClick}
					isLoading={isLoading}
					serverError={serverError}
				/>
			);
		} else if (currentScreenIdx === 2) {
			return (
				<QuizModal QuizData={quizData[quesIndex]} onNextClick={onNextClick} />
			);
		} else if (currentScreenIdx === 3) {
			return <Result totalQuestions={quizData.length} userSubmissions={userSubmissions} onNextClick={onNextClick} />;
		} else{ 
			return 
		}
	};

	return (
		<div className="App">
			<CurrentScreen />
		</div>
	);
};

export default App;
