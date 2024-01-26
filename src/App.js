import {useEffect, useState} from "react";
import Counter from "./components/counter";
import * as events from "events";

function App() {
    const [visible, setVisible] = useState(false);
    const [userText, setUserText] = useState("");

    const handleClick = (event) => {
        const {clientX, clientY} = event;
        console.log(`Mouse is at ${clientX}, ${clientY}`);
    }

    window.addEventListener("click", handleClick);
    window.removeEventListener("click", handleClick);

    function handleUserKeyPress(event) {
        const {key, keyCode} = event;
        if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
            setUserText(`${userText} ${key}`);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        }

    })

    return (
        <div className="App">
            <h1>Your text goes here</h1>
            <blockquote>{userText}</blockquote>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Hide counter" : "Show counter"}</button>
            {visible && <Counter/>}
        </div>
    );
}

export default App;
