import React, { useState } from 'react';

const HelloWorld = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <div>
            <div>
                <label>First name:</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>First name:</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
            </div>
            <h1>{`Hello, ${firstName} ${lastName}!`}</h1>
        </div>
    )
}

export default HelloWorld;