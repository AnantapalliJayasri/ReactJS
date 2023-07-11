import React from 'react';
import {Navigate} from 'react-router-dom'
class Sample extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            user:'',
        }
        //we need to include this when we are using normal functions.
        this.userData = this.userData.bind(this);
    }
    //Normal function.
    userData(event){
        //used to change the value
        this.setState({
            user : event.target.value,
        })
    }
    submitData = (event) =>{
        event.preventDefault();
        //alert(this.state.user);
        Navigate('/BasicWebpage')
    }
    //to display anything using class we need to use render function which returns html.
    render(){
    return(
       <form onSubmit={this.submitData}>
            <label>Username:&nbsp;&nbsp;</label> 
            <input type="text" value={this.state.user} onChange={this.userData}></input><br></br><br></br>
            <button type="submit">Submit</button>
            
            {/* this below data will be displayed whenever we start typing the particular field */}
            <h3>{this.state.user}</h3>
        </form>
    );
    }
}

export default Sample;