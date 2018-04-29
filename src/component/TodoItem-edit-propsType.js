import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        isEditing:false    
        }
        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);


    }

    toggleState(){
        const {isEditing} = this.state;
        this.setState({
            isEditing: !isEditing
        })
    }

    updateItem(evt){
     evt.preventDefault(); 
    // console.log(this.input.value);  
     this.props.editTask(this.props.index,this.input.value); 
     this.toggleState();
    } 
    renderForm(){
        return (
            <form onSubmit = {this.updateItem} >
            <input type="text" ref={(value)=> 
                { 
                    this.input = value
                
                }}  
                defaultValue = {this.props.detail.name}/>
            <button type="submit">Update Item</button>
            </form>
            )
    }

    renderItem(){
        return (
            <li onClick={()=>{
                this.props.clickHandler(this.props.index);
                    }} className={this.props.detail.completed?'completed':'aa'}>
                    {this.props.detail.name}   
                    <button 
                    onClick ={(evt)=>{
                        evt.stopPropagation();
                        this.props.deleteTask(this.props.index)
                    }}
                    >Delete</button>
                    <button 
                    onClick ={(evt)=>{
                        evt.stopPropagation();
                        this.toggleState()
                    }}
                    >Edit Item</button> 
                     

                    </li>
            )
    }

    render(){
        const {isEditing} = this.state;
        return(
            <section>
               {
                isEditing ?this.renderForm(): this.renderItem()
                
                    } 
            </section>
        )
    }
 
    
}

TodoItem.propTypes = {
    //detail: PropTypes.object.isRequired,
    //index: PropTypes.number.isRequired,

    clickHandler: PropTypes.func,
    index: PropTypes.number,
    deleteTask: PropTypes.func,
    editTask: PropTypes.func,
    detail: PropTypes.object
};
export default TodoItem;