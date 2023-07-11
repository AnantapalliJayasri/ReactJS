import {useState} from 'react';

function HooksCounter(){
    //initializing the var and function
    const [count,setCount] = useState(0);
    //updating the setcount function.
    function reset(){
        setCount(0);
    }
    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        setCount(count - 1);
    }
    // function prevcount(){
    //     //instaed of using count variable we are giving a fun as an arg to setCount.
    //     setCount(prevcount => prevcount + 2)
    // }
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {/* <button onClick={prevcount}>count</button> */}
        </div>
    );
}

export default HooksCounter;