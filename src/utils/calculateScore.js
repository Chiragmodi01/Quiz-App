export const calculateScore = () => {
    // Define the number of correct answers, total questions, maximum time limit, and time taken
    const correctAnswers = 3;
    const totalQuestions = 5;
    const maxTimeLimitInSeconds = 500; // Assuming the maximum time allowed is 10 minutes
    const timeTakenInSeconds = 300;

    // Calculate the score percentage
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    // Calculate the time percentage
    const timePercentage = ((maxTimeLimitInSeconds - timeTakenInSeconds) / maxTimeLimitInSeconds) * 100;

    // Calculate the final percentage by averaging the score and time percentages
    const finalPercentage = (scorePercentage + timePercentage) / 2;

    return Math.round(finalPercentage)
}