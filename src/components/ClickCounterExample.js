import React, { useState, useEffect } from 'react';

const ClickCounterExample = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);
    const [hasClickedTooManyTimes, setHasClickedTooManyTimes] = useState(false);
    const registerClick = () => {
        setNumberOfClicks(pre => pre + 1);
    }
    const resetClicks = () => {
        setNumberOfClicks(0);
    }

    useEffect(() => {
        setHasClickedTooManyTimes(numberOfClicks < 3);
    }, [numberOfClicks])

    return (
        <div>
            <p>You've clicked {numberOfClicks} times</p>
            <button onClick={registerClick} disabled={!hasClickedTooManyTimes}>Click me</button>
            <div className={hasClickedTooManyTimes ? 'display-none' : 'display-block'}>
                <p>That's too many clicks! Please stop before you wear out your fingers.</p>
                <button onClick={resetClicks}>Reset clicks</button>
            </div>
        </div>
    )
}

export default ClickCounterExample;