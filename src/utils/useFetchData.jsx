import { useState } from "react";
import axios from "axios";

export const useFetchData = (url, setCurrentScreenIdx) => {
	const [isLoading, setIsLoading] = useState(false);
	const [quizData, setQuizData] = useState(null);
	const [serverError, setServerError] = useState(null);

	const fetchData = async () => {
		setIsLoading(true);
        setServerError(null);

		//fetching data directly from localStorage that we saved on api call first
		if ("quizData" in localStorage) {
			const data = await JSON.parse(localStorage.getItem("quizData"));
			setQuizData(data);
			setTimeout(() => {
				setIsLoading(false);
				setCurrentScreenIdx(2);
			}, 1000);
		} else {
			try {
				const resp = await axios.get(url);
				const data = await resp?.data;

				setQuizData(data);
				localStorage.setItem("quizData", JSON.stringify(data));
				setIsLoading(false);
				setCurrentScreenIdx(2);
			} catch (error) {
				setServerError(error);
				setIsLoading(false);
			}
		}
	};

	return { isLoading, quizData, serverError, fetchData };
};
