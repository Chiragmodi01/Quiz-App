export const formatTime = (timeInSeconds) => {
    let finalValue;
    
    if (timeInSeconds < 60) {
      finalValue = `${timeInSeconds}s`;
    } else {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;
      finalValue = `${minutes}m ${seconds}s`;
    }
  
    return finalValue;
  };