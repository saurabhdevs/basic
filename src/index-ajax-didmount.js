import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';

class App  extends React.Component{
   constructor(props){
     super(props);
     this.state={
      users:[]   
     }
   } 

componentDidMount(){
$.ajax({
   url:'http://jsonplaceholder.typicode.com/users',
   success:(data)=> {
    this.setState({
        users:data
    })
   }
})
}

render(){
    const {users} = this.state;
    return(   
        <ul>
            {
             users.map((user)=>{
              return <li key={user.id}>{user.name}</li>
             })   
            }
        </ul>
       
    )
}
}
ReactDOM.render(<App/>,document.getElementById('root'))
