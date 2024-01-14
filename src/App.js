import {useState} from "react";

function App() {
    const [activated, setActivated] = useState(false);
    const [count, setCount] = useState(0);
    const [address, setAddress] = useState({
        city: '',
        country: '',
    });

    // as we are changing not the whole state, need to use spread operator: ...address
    function handleCityChange(event) {
        setAddress({...address, city: event.target.value});
    }

    function handleCountryChange(event) {
       setAddress({...address, country: event.target.value});
    }

    const buttonText = activated ? 'Active' : 'Inactive';

    //const onClick = () => setActivated(!activated);
    function onClick() {
        setActivated(!activated);
    }

    //function handleClickCounter() {
    //    setCount(count + 1);
    //}

    const handleClickCounter = () => setCount((prevCount) => {
        return prevCount + 1;
    });

    const handleClickCounterDecrease = () => setCount((prevCount) => {
        return prevCount - 1;
    });

    const handleClickReset = () => setCount(0);

    return (
        <div className="App"> Hello!
            <br/>
            <button onClick={onClick}>
                {buttonText}
            </button>
            <button
                onClick={handleClickCounter}>Increase
            </button>
            <h2>{count}</h2>
            <button onClick={handleClickCounterDecrease}>Decrease</button>
            <button onClick={handleClickReset}>Reset counter</button>
            <div>
                <input
                    type='text'
                    placeholder='Your city'
                    value={address.city}
                    onChange={handleCityChange}
                ></input>
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Your country'
                    value={address.country}
                    onChange={handleCountryChange}
                ></input>
            </div>
            <div>U live in {`${address.country}, ${address.country}`}</div>
        </div>
    );
}

export default App;
