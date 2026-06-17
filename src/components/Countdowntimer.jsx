import React, { useState, useEffect } from "react";

const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    mins: "00",
    secs: "00",
  });

  useEffect(() => {
    const targetDate = deadline
      ? new Date(deadline)
      : new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const diff = targetDate - new Date();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff / 3600000) % 24);
      const mins = Math.floor((diff / 60000) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        mins: String(mins).padStart(2, "0"),
        secs: String(secs).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="flex items-center justify-center gap-1 mt-2">
      {Object.entries(timeLeft).map(([key, value], index) => (
        <React.Fragment key={key}>
          <div className="flex flex-col items-center">
            <span className="font-bold text-[#1A1A1A] text-[14px]">
              {value}
            </span>
            <span className="text-[#999] text-[10px] capitalize">
              {key}
            </span>
          </div>

          {index > 0 && (
            <span className="font-normal text-[#1A1A1A]">:</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountdownTimer;