// src/component/SecondsCounter.jsx
import React from 'react';

function SecondsCounter(props) {
    return (
        <div className="big-counter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="six">{Math.floor(props.seconds / 100000) % 10}</div>
            <div className="five">{Math.floor(props.seconds / 10000) % 10}</div>
            <div className="four">{Math.floor(props.seconds / 1000) % 10}</div>
            <div className="three">{Math.floor(props.seconds / 100) % 10}</div>
            <div className="two">{Math.floor(props.seconds / 10) % 10}</div>
            <div className="one">{props.seconds % 10}</div>
        </div>
    );
}

export default SecondsCounter;
