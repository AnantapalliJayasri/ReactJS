import {useState} from 'react';
function Search(){
    const names=['Jayasri','Renuka','Lakshmi','Harshitha','Deepthi','Mohitha','Jyosthna'];
    const [data,getData] = useState();
    const handler = (event) => {
        getData(event.target.value)
    }
    const filNames = names.filter(item => {
        return item.includes(data);
    })

    return(
        <div>
            <input type="text" value={data} onChange={handler}></input><br></br>
            {/* <h1>{filNames}</h1> */}
            {filNames.map((item) => {return <h3 key={item}>{item}</h3>})}
        </div>
    );
}

export default Search;