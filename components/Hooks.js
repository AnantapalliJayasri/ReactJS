import {useState} from 'react';

function Hooks(){
    
    const [state,setState] = useState("hii");
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={() => setState("hello")}>Click</button>
        </div>
    );
}

export default Hooks;