import {useState} from 'react';

function Hooks_Webpage(){
    const [data,setData] = useState({username: '',password:''});
    const setPassword = (e) => {
        setData({...data,password: e.target.value})
    }
    function submitData(){
        document.write("Username : " + data.username + " Password : " + data.password)
    }
    return(
        <div>
            {/* spread operator will merge or update the data. */}
            <form>
                <label>Username:&nbsp;&nbsp;</label> 
                <input type="text" placeholder = "Username" value={data.username} onChange={(e)=>setData({...data,username: e.target.value})}></input><br></br><br></br>
                <label>Password:&nbsp;&nbsp;</label>
                <input type="password" placeholder = "password" value={data.password} onChange={setPassword}></input><br></br><br></br>
                <button onClick = {submitData}>Submit</button>
                <h4>username : {data.username}</h4>
                <h4>password : {data.password}</h4>
            </form> 

            {/* without spread operator.Here typing the username effects the password field
            <form>
                <label>Username:&nbsp;&nbsp;</label> 
                <input type="text" placeholder = "Username" value={data.username} onChange={(e)=>setData({username: e.target.value})}></input><br></br><br></br>
                <label>Password:&nbsp;&nbsp;</label>
                <input type="password" placeholder = "password" value={data.password} onChange={(e)=>setData({password: e.target.value})}></input><br></br><br></br>

                <h1>username : {data.username}</h1>
                <h1>password : {data.password}</h1>
            </form> 
            */}
        </div>
    );

}

export default Hooks_Webpage;