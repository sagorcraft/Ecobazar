import React, { useState, useEffect } from "react";

const CountdownTimer = ({ 
    deadline, 
    textColor = "text-[#1A1A1A]",
    labelColor="text-gray"
   }) => {
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

  const entries = Object.entries(timeLeft);

  return (
    <div className="flex items-start justify-center gap-2 mt-2">
      {entries.map(([key, value], index) => (
        <React.Fragment key={key}>
          <div className="flex flex-col items-center min-w-[32px]">
            <span className={`font-semibold ${textColor} text-[18px] leading-none`}>
              {value}
            </span>
            <span className={`${labelColor} text-[10px] uppercase font-medium mt-1`}>
              {key}
            </span>
          </div>
          
          {index < entries.length - 1 && (
            <span className={`text-[16px] leading-none mt-0.5 font-light ${textColor}`}>
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountdownTimer;