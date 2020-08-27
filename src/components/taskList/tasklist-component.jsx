import React from 'react';
import './tasklist-style.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

const TaskList = props => {
    const tasks = props.taskList;    
    const listItems = tasks.map(task => {
        return(
            <div className='list' key={task.key} >
                <p>
                    <input type='text' id={task.key} value={task.text} onChange={ (e) => props.editTask(e.target.value,task.key)  }  />
                    <span className='list-span'>
                        <FontAwesomeIcon className='my-icon' icon='trash' onClick={ () => {props.deleteTask(task.key)} }  />
                    </span>
                </p>                
            </div>
        )
    })
    return(       
        <div>
            <FlipMove>{listItems}</FlipMove>
        </div>
    )
}

export default TaskList;