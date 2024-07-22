// src/component/home.jsx
import React, { useState, useEffect } from 'react';
import SecondsCounter from './SecondsCounter.jsx';

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStop = () => setIsRunning(false);
    const handleStart = () => setIsRunning(true);
    const handleReset = () => {
        setSeconds(0);
        setIsRunning(true);
    };

    return (
        <div className="App">
            <SecondsCounter seconds={seconds} />
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Home;
