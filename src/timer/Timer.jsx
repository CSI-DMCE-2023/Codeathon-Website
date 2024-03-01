import React, { useState, useEffect } from 'react';
import './timer.css';

const Timer = () => {
    const deadline = new Date('March 10, 2024 00:00:00 GMT-05:00');
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(deadline));
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            const currentTime = new Date();
            if (currentTime < deadline) {
                setTimeRemaining(getTimeRemaining(deadline));
            } else {
                setShowTimer(false);
                clearInterval(timerInterval);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    function getTimeRemaining(endtime) {
        let t = endtime - new Date();
        var hundreth = Math.floor((t % 1000) / 10);
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    return (
        <section id="timer pb-4 md:mt-20 max-md:mt-12  ">
            {showTimer ? (
                <div className="timer md:text-3xl text-2xl">{timeRemaining.days + "D"}-{('0' + timeRemaining.hours).slice(-2) + "H"}-{('0' + timeRemaining.minutes).slice(-2) + "M"}-{('0' + timeRemaining.seconds).slice(-2)+"S"}</div>
            ) : (
                <div className="welcome-message timer text-4xl">Welcome To Hackethon</div>
            )}
        </section>
    );
}

export default Timer;
