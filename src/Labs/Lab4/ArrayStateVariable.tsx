import React, { useState } from "react";
export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };
    return (
        <div id="wd-array-state-variables" style={{ textAlign: 'left' }}>
            <h2>Array State Variable</h2>
            <div style={{ display: 'inline-block' }}>
                <button onClick={addElement}
                    style={{
                        backgroundColor: 'green', color: 'white', padding: '10px',
                        borderRadius: '5px', marginBottom: '15px'
                    }}>
                    Add Element
                </button>

                <ul style={{ paddingLeft: 0 }}>
                    {array.map((item, index) => (
                        <li key={index}
                            style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                border: '1px solid #ddd', padding: '10px', width: '250px'
                            }}>
                            {item}
                            <button
                                onClick={() => deleteElement(index)}
                                style={{
                                    backgroundColor: 'red', color: 'white',
                                    border: 'none', padding: '5px 10px', borderRadius: '5px'
                                }}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <hr />
            </div>
        </div>
    );
}
