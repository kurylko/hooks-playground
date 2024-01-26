import {useEffect, useState} from "react";
import Counter from "./components/counter";

function App() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setVisible(!visible )}>
                {visible ? "Hide counter" : "Show counter"}</button>
            {visible && <Counter />}
        </div>
    );
}

export default App;
