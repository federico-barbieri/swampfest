import React, { useState, useEffect, useContext } from 'react';
import styles from "./Timer.module.css"
import TicketsContext from '../../context/ticketsContext';

function Timer() {

  const globalMoneyContext = useContext(TicketsContext);

  const [seconds, setSeconds] = useState(10);  // 10 minutes in seconds
  globalMoneyContext.setTimeLeft(seconds);


  useEffect(() => {
    // Decrease the timer every second
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
      const newSeconds = prevSeconds - 1;
      globalMoneyContext.setTimeLeft(newSeconds);
      console.log(globalMoneyContext.timeLeft);
      return newSeconds;
      });
    }, 1000);


    // Clean up the timer when the component is unmounted or seconds reach 0
    return () => clearInterval(timer);
  }, []);

  // Convert remaining seconds to minutes and seconds
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className={styles.timer} style={{display: globalMoneyContext.hideTimer ? "none" : "inline"}}>
   
     {minutes}:{remainingSeconds < 10 ? '0' : ''}
      {remainingSeconds} 
      
   
    </div>
  );
}

export default Timer;

// create a global variable and set it to false. when the ticket purchase is done, set it to true.
// if it is true, set the timer to display none