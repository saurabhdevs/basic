import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import TodoItem from './component/TodoItem';

class App  extends React.Component{
   constructor(props){
     super(props);
     this.state={
      todos:['learning ReactJS','Learning Node js']   
     }
   } 


render(){
    const {todos} = this.state;
    return(   
        <section>
            <form onSubmit = {(e) =>{
                const { todos } = this.state;
               // todos.push(this.refs.addTodo.value);
                e.preventDefault();
                this.setState({
                    todos:todos.concat(this.refs.addTodo.value)
                })

                this.refs.addTodo.value = '';
            }}>
            <input type="text" ref="addTodo" />
            <button type="submit">Add Todo </button>
            </form>
            <TodoItem todos={todos}/>
        </section>
       
    )
}
}
ReactDOM.render(<App/>,document.getElementById('root'))
