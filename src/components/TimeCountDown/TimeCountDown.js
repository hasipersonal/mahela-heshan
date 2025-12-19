import React, { useState, useEffect } from 'react';

const TimeCountDown = () => {
  const [countdownDate] = useState(new Date('2026-01-23T00:00:00').getTime());
  
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setNewTime();

    const interval = setInterval(() => setNewTime(), 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      if (distanceToDate < 0) {
        setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      setState({ days, hours, minutes, seconds });
    }
  };
  const formatNumber = (num) => {
    return String(num).padStart(2, '0');
  };

  return (
    <div className="react-countdown">
      <div className='time-section'>
        <div className='time'>{formatNumber(state.days)}</div>
        <small className="time-text">Days</small>
      </div>
      <div className='time-section'>
        <div className='time'>{formatNumber(state.hours)}</div>
        <small className="time-text">Hours</small>
      </div>
      <div className='time-section'>
        <div className='time'>{formatNumber(state.minutes)}</div>
        <small className="time-text">Min</small>
      </div>
      <div className='time-section'>
        <div className='time'>{formatNumber(state.seconds)}</div>
        <small className="time-text">Sec</small>
      </div>
    </div>
  );
};

export default TimeCountDown;