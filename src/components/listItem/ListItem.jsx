import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './listItem.css';

const ListItem = ({todo, todoName, handleEditValue, handleEditDateValue, handleEditPriorityValue, id, toggleComplete, todoDate}) => {
    const [edit, setEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.todoName);
    const [todos, setTodos] = useContext(GlobalContext); 
    const [newDate, setNewDate] = useState(todo.todoDate);
    const [newPriority, setNewPriority] = useState(todo.todoPriority);

    const editHandler = () => {
        setEdit(true);
    }

    const saveHandler = (id) => {
        setEdit(false);
        if(editValue || newDate || newPriority) {
            if(editValue) {
                handleEditValue(editValue, id);
            }
            if(newDate) {
                handleEditDateValue(newDate, id);
            }
            if(newPriority) {
                handleEditPriorityValue(newPriority, id);
            }
           // console.log({editValue, id});
        }else{
            setTodos(todos);
        }
    }

    if(edit) {
        return (
            <li className='list-items'>
                <label>
                    <input type="text" value={editValue} checked={todo.complete} onChange={(e) => {setEditValue(e.target.value)}} />
                    <input type="date" value={newDate} onChange={(e) => {setNewDate(e.target.value)}} />
                    <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                        <option value="first">Urgent And Important</option>
                        <option value="second">Not Urgent But Important</option>
                        <option value="third">Urgent But Not Important</option>
                        <option value="fourth">Not Urgent And Not Important</option>
                    </select>
                </label>
                <button type="submit" onClick={() => saveHandler(id)}>Save</button>
            </li>
            )
    } else {
        return(
        <li className='list-items'>
            <label htmlFor={id} className={todo.complete ? 'active' : ''}>
                <input id={id} type="checkbox" checked={todo.complete} onChange={() => {toggleComplete(id)}}/>
                {todoName}
            </label>
            <div>
                 <span className={todo.complete ? 'active' : ''}>{todoDate}</span>
            <button disabled={todo.complete} onClick={editHandler}>Edit</button>
            </div>
        </li>
        )
    }
    

}

export default ListItem
