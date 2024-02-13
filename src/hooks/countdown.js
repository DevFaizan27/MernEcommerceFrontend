import { useState, useEffect } from 'react';

const useCountdown = (initialTime = 90) => {
  const [seconds, setSeconds] = useState(initialTime);

  useEffect(() => {
    let interval;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  return seconds;
};

export default useCountdown;
