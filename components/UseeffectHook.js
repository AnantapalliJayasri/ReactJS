import {useState,useEffect} from 'react';

function UseeffectHook(){ 
    const [cnt,setCount] = useState(0);
    useEffect(()=>{
        alert(cnt);
    })
    return(
        <div>
            <button onClick = {() => setCount(cnt + 1)}>Count</button>
        </div>
    )
}

export default UseeffectHook;