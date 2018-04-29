import React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';


class TodoItem extends React.Component{
  /*  constructor(props){
        super(props);
    }*/
    componentWillReceiveProps(nextProps){
      console.log(nextProps.todos);
      console.log(this.props.todos);
    }
    render(){
        return(
            <ul>{
               this.props.todos.map((todo,index)=>{
               return <li key = {index}>{todo}</li>
               })
            }
            </ul>
        )
    }
 
    
}

export default TodoItem;