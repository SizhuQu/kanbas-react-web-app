import React, { useState } from "react";
export default function Counter() {
    // let count = 7;
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div id="wd-counter-use-state">
            <h2>Counter: {count}</h2>
            <button
                onClick={() => setCount(count + 1)}
                id="wd-counter-up-click"
                style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginRight: '10px', borderRadius: '5px'}}>
                Up
            </button>
            <button
                onClick={() => setCount(count - 1)}
                id="wd-counter-down-click"
                style={{ backgroundColor: 'red', color: 'white', padding: '10px', marginRight: '10px', borderRadius: '5px'}}>
                Down
            </button>
            <hr /></div>
    );
}