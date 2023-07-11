import {useState,useEffect} from 'react';
function HttpGetReq(){
    //creating an empty get array.
    const [get1,setGet1] = useState([]);
    useEffect(()=>{
        //trying to fetch this data using get request
        fetch("http://jsonplaceholder.typicode.com/posts")
        //converting the response to json
        .then(response => response.json())
        //fetching the data in data array.
        .then(data => setGet1(data))
        //displaying the error if any
        .catch( (err) => {
            console.log(err)
        },[])

    })
    return(
        <div>
            
            <ul>
                {get1.map(data1=>{return <li key={data1.id}>{data1.title}</li>})}
            </ul>
        </div>
    );
}

export default HttpGetReq;