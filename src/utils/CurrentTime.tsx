import { useEffect, useState } from "react";

export const CurrentTime: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h5>{time.toLocaleTimeString()}</h5>;
};
