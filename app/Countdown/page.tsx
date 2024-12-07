"use client";

import React, { useEffect, useState } from 'react';

const Countdown: React.FC = () => {
  // Set the target date (you can change it to your desired date)
  const targetDate = new Date('2024-12-31T03:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft('00:00:00:00'); // When the countdown ends
      } else {
        // Calculate time components
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Set the formatted time
        setTimeLeft(
          `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        );
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [targetDate]);

  return (
    <><center>
    <div className="flex flex-wrap justify-center gap-2 sm:gap-2 md:gap-6 md:pb-4">
      <div className="bg-gray-100 border-2 border-black py-1 px-2 sm:px-4 md:px-6 text-black rounded-2xl w-1/4 sm:w-auto">
        <p className="text-xs sm:text-sm">Hour</p>
        <b>{timeLeft.split(':')[1]}</b>
      </div>
      <div className="bg-gray-100 border-2 border-black py-2 px-2 sm:px-4 md:px-6 text-black rounded-2xl w-1/4 sm:w-auto">
        <p className="text-xs sm:text-sm">Mint</p>
        <b>{timeLeft.split(':')[2]}</b>
      </div>
      <div className="bg-gray-100 border-2 border-black py-1 px-2 sm:px-4 md:px-6 text-black rounded-2xl w-1/4 sm:w-auto">
        <p className="text-xs sm:text-sm">Sec</p>
        <b>{timeLeft.split(':')[3]}</b>
      </div>
    </div>
  </center>
  
  </>
  );
};

export default Countdown;
