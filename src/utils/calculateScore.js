export const calculateScore = (userSubmissions, totalQuestions) => {
    const {timeConsumed, isCorrect} = userSubmissions || {}

    const correctAnswers = isCorrect.reduce((count, isCorrect) => {
        return isCorrect ? count + 1 : count;
      }, 0);
      
      const incorrectAnswers = isCorrect.reduce((count, isCorrect) => {
        return !isCorrect ? count + 1 : count;
      }, 0);
      

      const timeTakenInSeconds = timeConsumed.reduce((count, time) => {
        return count + time;
      }, 0);

      const maxTimeLimitInSeconds = totalQuestions*100; // Assuming the maximum time allowed is 10 minutes
    // Define the number of correct answers, total questions, maximum time limit, and time taken
    // const correctAnswers = 3;
    // const timeTakenInSeconds = 300;

    // Calculate the score percentage
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    // Calculate the time percentage
    const timePercentage = ((maxTimeLimitInSeconds - timeTakenInSeconds) / maxTimeLimitInSeconds) * 100;

    // Calculate the final percentage by averaging the score and time percentages
    const finalPercentage = Math.round((scorePercentage + timePercentage) / 2);
    console.log(finalPercentage, correctAnswers, incorrectAnswers)
    

    return {finalPercentage, correctAnswers, incorrectAnswers}
}