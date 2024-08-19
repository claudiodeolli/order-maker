import { Progress } from '@radix-ui/themes';
import React, { useState, useEffect } from 'react';

const useProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return progress;
};

const ProgressBarComponent = () => {
  const progress = useProgressBar();

  return (
    <Progress value={progress} />
  );
};

export default ProgressBarComponent;