import React from 'react';
import PropTypes from 'prop-types';


const TodoForm = (props) => {

    return (
     <form onSubmit = {props.addTask}>
        <input type="text"
         value = {props.currentTask}
         onChange = {props.updateTask}
        />
        <button type="submit">Submit</button>
        </form>
        )

}

TodoForm.propTypes = {
    addTask: PropTypes.func.isRequired,
    currentTask: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

export default TodoForm;