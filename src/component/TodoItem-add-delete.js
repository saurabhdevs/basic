import React from 'react';

const TodoItem = (props) =>{
    return(
        <li onClick={()=>{
         props.clickHandler(props.index);
        }} className={props.detail.completed?'completed':'aa'}>
         {props.detail.name}   
         <button 
         onClick ={(evt)=>{
             evt.stopPropagation();
             props.deleteTask(props.index)
        }}
         >Delete</button>
        </li>
    )
}

/*
class TodoItem extends React.Component{

    render(){
        return(
            <li onClick={()=>{
             this.props.clickHandler(this.props.index);
            }} className={this.props.detail.completed?'completed':'aa'}>
             {this.props.detail.name}   
            </li>
        )
    }
}
*/
export default TodoItem;