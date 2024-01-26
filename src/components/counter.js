import {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('salmon');

    const handleClickCounterIncrease = () => setCount((prevCount) => {
        return prevCount + 1;
    });

    const handleClickCounterDecrease = () => setCount((prevCount) => {
        return prevCount - 1;
    });

    const handleClickReset = () => setCount(0);
    function handleColorChange(){
        const nextColor = color ===  "salmon" ? "gold" : "salmon"
        setColor(nextColor);
    }

    useEffect(() => {
        console.log(`Inside useEffect. Only run upon component mounting. The current count is ${count}`);

        return () => {
            console.log(`Removing anything. last count = ${count}. Only run when component unmounted`);
        }
    }, [color]);

    return (
    <div style={{paddingTop: "30px"}}>
        <button
            onClick={handleClickCounterIncrease}>Increase
        </button>
        <h2 style={{color}}>{count}</h2>
        <button onClick={handleClickCounterDecrease}>Decrease</button>
        <button onClick={handleClickReset}>Reset counter</button>
        <button onClick={handleColorChange}>Change color</button>
    </div>
    )
}

export  default  Counter;