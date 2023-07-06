import { formatTime } from "./formatTime";

export const calculateScore = (userSubmissions, totalQuestions) => {
	const { timeConsumed, isCorrect } = userSubmissions || {};

	const correctAnswers = isCorrect.reduce((count, isCorrect) => {
		return isCorrect ? count + 1 : count;
	}, 0);

	const incorrectAnswers = isCorrect.reduce((count, isCorrect) => {
		return !isCorrect ? count + 1 : count;
	}, 0);

	const timeTakenInSeconds = formatTime(timeConsumed);

	// Define the number of correct answers, total questions, maximum time limit, and time taken

	// Calculate the score percentage
	const scorePercentage = (correctAnswers / totalQuestions) * 100;

	// Calculate the final percentage by averaging the score and time percentages
	const finalPercentage = Math.round(scorePercentage);

	return {
		finalPercentage,
		correctAnswers,
		incorrectAnswers,
		timeTakenInSeconds,
	};
};
