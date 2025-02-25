import React, { useEffect, useState, useCallback } from 'react';

const TimeCountDown = () => {
  const [countdownDate] = useState(new Date('12/25/2024').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const setNewTime = useCallback(() => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      // Pad single-digit numbers with leading zero
      days = `${days}`;
      hours = numbersToAddZeroTo.includes(hours) ? `0${hours}` : `${hours}`;
      minutes = numbersToAddZeroTo.includes(minutes) ? `0${minutes}` : `${minutes}`;
      seconds = numbersToAddZeroTo.includes(seconds) ? `0${seconds}` : `${seconds}`;

      setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, [countdownDate]);
  
  useEffect(() => {
    const intervalId = setInterval(setNewTime, 1000);
    return () => clearInterval(intervalId);
  }, [setNewTime]);

  return (
    <div className="react-countdown">
      <div className='time-section'>
        <div className='time'>{state.days || '0'}</div>
        <small className="time-text">Days</small>
      </div>
      <div className='time-section'>
        <div className='time'>{state.hours || '00'}</div>
        <small className="time-text">Hours</small>
      </div>
      <div className='time-section'>
        <div className='time'>{state.minutes || '00'}</div>
        <small className="time-text">Min</small>
      </div>
      <div className='time-section'>
        <div className='time'>{state.seconds || '00'}</div>
        <small className="time-text">Sec</small>
      </div>
    </div>
  );
};

export default TimeCountDown;