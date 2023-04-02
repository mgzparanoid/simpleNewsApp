import { useEffect, useState } from "react";

export const CurrentTime: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentTime =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

  return <h5>{currentTime}</h5>;
};
