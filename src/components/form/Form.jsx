import React, { useState, useContext, useEffect, useRef } from 'react';
import {GlobalContext} from '../../context/GlobalState';
import './form.css';
import formatDate from '../../utils/formatDate';

const Form = () => {
    const [todoName, setTodoName] = useState('');
    const [todos, setTodos] = useContext(GlobalContext);
    const [todoPriority, setTodoPriority] = useState('first');
    const [todoDate, setTodoDate] = useState(formatDate(new Date()));
    const todoInput = useRef();
 
    const submitHandler = (e) => {
        e.preventDefault();
        const newTodos = [...todos, {todoName, complete: false, todoPriority, todoDate}];
        setTodos(newTodos);
        setTodoName('');
        setTodoPriority('first'); 
        setTodoDate(todoDate);
        todoInput.current.focus();
    }
    
    useEffect(() => {
        setTodoName('');
        setTodoPriority('first'); 
        setTodoDate(todoDate);
        todoInput.current.focus();
    },[])

    return (
        <form onSubmit={submitHandler} className='form'>
            <input type="text" value={todoName} ref={todoInput} placeholder='What needs to be done?' onChange={(e) => setTodoName(e.target.value)} required/>
            <div className='form-options'>
                <select value={todoPriority} onChange={(e) => setTodoPriority(e.target.value)}>
                    <option value="first">Urgent And Important</option>
                    <option value="second">Not Urgent But Important</option>
                    <option value="third">Urgent But Not Important</option>
                    <option value="fourth">Not Urgent And Not Important</option>
                </select>
                <div className='date-and-create'>
                <input type="date" className="date" value={todoDate} onChange={(e) => setTodoDate(e.target.value)}/>
                <button>Create</button>
                </div>
            </div>
        </form>
    )
}

export default Form
