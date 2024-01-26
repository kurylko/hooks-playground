import {useEffect, useState} from "react";
import Counter from "./components/counter";
import * as events from "events";

function App() {
    const [visible, setVisible] = useState(false);

    const handleClick = (event) => {
        const {clientX, clientY} = event;
        console.log(`Mouse is at ${clientX}, ${clientY}`);
    }

    window.addEventListener("click", handleClick);
    window.removeEventListener("click", handleClick);

    return (
        <div className="App">
            <button onClick={() => setVisible(!visible )}>
                {visible ? "Hide counter" : "Show counter"}</button>
            {visible && <Counter />}
        </div>
    );
}

export default App;
