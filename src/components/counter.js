import {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleClickCounterIncrease = () => setCount((prevCount) => {
        return prevCount + 1;
    });

    const handleClickCounterDecrease = () => setCount((prevCount) => {
        return prevCount - 1;
    });

    const handleClickReset = () => setCount(0);

    useEffect(() => {
        console.log(`Inside useEffect. The current count is ${count}`);

        return () => {
            console.log(`Removing. last count = ${count}`);
        }
    });

    return (
    <div style={{paddingTop: "30px"}}>
        <button
            onClick={handleClickCounterIncrease}>Increase
        </button>
        <h2>{count}</h2>
        <button onClick={handleClickCounterDecrease}>Decrease</button>
        <button onClick={handleClickReset}>Reset counter</button>
    </div>
    )
}

export  default  Counter;