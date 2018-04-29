import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './component/TodoItem.js';
import TodoForm from './component/TodoForm.js';
class TodoList  extends React.Component{
   constructor(){
       super();
       this.changeStatus = this.changeStatus.bind(this);
       this.updateTask = this.updateTask.bind(this);
       this.addTask = this.addTask.bind(this);
       this.deleteTask = this.deleteTask.bind(this);
       this.editTask = this.editTask.bind(this);

       this.state={
        tasks:[
            {
            name:'Buy Milk',
            completed: false,
            },
            {
            name:'Buy Cheese',
            completed: false,   
            },
            {
            name:'Buy Butter',
            completed: false, 
            }        
        ] ,
        currentTask : '' ,
       }

   } 
//updating task
updateTask(newValue){
this.setState({
    currentTask:newValue.target.value
})
}

//updating task
editTask(index,newValue){
    console.log(index,newValue);
    var tasks = this.state.tasks;
    var task = tasks[index];
    task['name'] = newValue;
    this.setState({
        tasks
    })
    }

//adding new task
addTask(evt){
    evt.preventDefault();
    let tasks = this.state.tasks;
    let currentTask = this.state.currentTask;
    tasks.push({
        name : currentTask,
        completed : false
    })
    this.setState({
        tasks,
        currentTask: ''
    })
}

//delete task
deleteTask(index){
console.log(index);
let tasks = this.state.tasks;
tasks.splice(index,1);
this.setState({
    tasks
})
}

changeStatus(index){
  console.log(this.state.tasks[index]);
  var tasks = this.state.tasks;
  var task = tasks[index];
  task.completed = !task.completed;
  this.setState({
      tasks:tasks
  });
  //console.log(this.state.tasks[index]);

}

render(){
    return(
        <section>
        <TodoForm
         currentTask = {this.state.currentTask}
         updateTask = {this.updateTask}
         addTask = {this.addTask}

         />    
        <ul>
            {this.state.tasks.map((task,index)=>{
            return <TodoItem 
            key={index} 
            detail={task} 
            index={index} 
            clickHandler={this.changeStatus}
            deleteTask = {this.deleteTask}
            editTask = {this.editTask}
            /> 
            })}
      
       </ul>
       </section>
    )
}
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
ReactDOM.render(<TodoList/>,document.getElementById('root'))
