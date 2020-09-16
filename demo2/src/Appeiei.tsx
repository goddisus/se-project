import React, { useState } from 'react';
import './App.css';

type App2Props = {
  message?: string;
};

const Appbyhook = (props : App2Props) => {
    const [counter, setCounter] = useState<number>(0); //return value and func for set state

    const incCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            {props.message ? props.message : "Nothing Here"}
            <br />
            Counter = {counter}
            <br />
            <button onClick={incCounter}>Increment</button>
        </div>
    );
};

export default Appbyhook;