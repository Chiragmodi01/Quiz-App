import React, { useRef, useState } from "react";
import "./App.css";

import QuizModal from "./components/QuizModal/QuizModal";
import Home from "./components/Home/Home";
import Result from "./components/Result/Result";
import { useFetchData } from "./utils/useFetchData.jsx";

const App = () => {
  const initialUIserSubmissions = {
		userAnswers: [],
		timeConsumed: 0,
		isCorrect: [],
	}

  const intervalIdRef = useRef(null);
  const counterValueRef = useRef(0);

	const [quesIndex, setQuesIndex] = useState(0);
	const [currentScreenIdx, setCurrentScreenIdx] = useState(1);
	const [userSubmissions, setUserSubmissions] = useState(initialUIserSubmissions);

	const API_URL =
		"https://quizapp-backend-chirag.onrender.com/getQuizData";

	const { isLoading, quizData, serverError, fetchData } = useFetchData(
		API_URL,
		setCurrentScreenIdx
	);

	//? screen 1: home, screen 2: live quiz, screen 3:result report
	//logic to change screen, call fetch func, and start countdown
	const onNextClick = (answer, isQuesCorrect) => {
		if (currentScreenIdx !== 3 && !intervalIdRef.current) {
			intervalIdRef.current = setInterval(() => {
				counterValueRef.current++;
			}, 1000);
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
        timeConsumed:  counterValueRef.current,
			}));

			if (quesIndex === quizData.length - 1) {
				setCurrentScreenIdx(3);
				if (intervalIdRef) {
					clearInterval(intervalIdRef.current);
					intervalIdRef.current = null;
          counterValueRef.current = 0
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
