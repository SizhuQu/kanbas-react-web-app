import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function QueryParameters() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");

    return (
        <div id="wd-query-parameters">
            <h3>Query Parameters</h3>

            <input
                id="wd-query-parameter-a"
                className="form-control mb-2"
                value={a} 
                type="number"
                placeholder="Enter value for A" 
                onChange={(e) => setA(e.target.value)}
            />

            <input
                id="wd-query-parameter-b"
                className="form-control mb-2"
                value={b} 
                type="number"
                placeholder="Enter value for B" 
                onChange={(e) => setB(e.target.value)}
            />

            <a
                id="wd-query-parameter-add"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
            >
                Add {a} + {b}
            </a>

            <a
                id="wd-query-parameter-subtract"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
            >
                Subtract {a} - {b}
            </a>

            <a
                id="wd-query-parameter-multiply"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
            >
                Multiply {a} * {b}
            </a>

            <a
                id="wd-query-parameter-divide"
                href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
            >
                Divide {a} / {b}
            </a>

            <hr />
        </div>
    );
}