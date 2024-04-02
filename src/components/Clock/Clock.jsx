import "./Clock.scss";
import React from 'react';
import { useState } from 'react';


const Clock = () =>{
        const [startTime, setStartTime] = useState(new Date().getTime());

        const getTimeDifference = () => {
            const currentTime = new Date().getTime();
            const difference = currentTime - startTime;
            const minutes = Math.floor(difference / 60000);
            const seconds = Math.floor((difference % 60000) / 1000);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        };
        return getTimeDifference();
  }
  export default Clock
  