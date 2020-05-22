import React, {useState} from 'react';
import './CounterApp.css';


const generateColor = () => {
    return(
        '#' + (Math.floor(Math.random()* 0xffffff)).toString(16)
    )
}
function App(){
    const [count, setCount] = useState(0)

    const Increment = () => {
       setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }
    
    return(
        <div className="counter-app">
            <h1 className="value" style={{background: generateColor()}} >{count}</h1>
            <button onClick={Increment}>Add</button>
            <button onClick={Decrement}>Minus</button>
        </div>
    )
}

export default App;