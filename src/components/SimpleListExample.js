import React, { useState } from 'react';

const SimpleListExample = () => {
    const [items, setItem] = useState([]);
    const [itemToAdd, setItemToAdd] = useState('')

    const add = () => {
        setItem([...items, itemToAdd]);
    }

    const renderOptions = () => {
        return items.map((item) => {
            return <option key={item}>{item}</option>
        })
    }

    return (
        <div>
            <div>
                <label>New item:</label>
                <input value={itemToAdd} onChange={(e) => setItemToAdd(e.target.value)}></input>
                <button onClick={add} disabled={itemToAdd.length <= 0}>Add</button>
            </div>
            <p>Your items:</p>
            <select multiple="multiple" width="50">
                {renderOptions()}
            </select>
        </div>

    )
}

export default SimpleListExample;