import React, { useState, useContext, useRef, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Subfooter from '../subfooter/Subfooter';
import './footer.css';

const Footer = () => {

    const [todos, setTodos] = useContext(GlobalContext);
    const [checkAll, setCheckAll] = useState(false);

    const deleteHandler = () => {
        const newTodos=[...todos];
        const filteredTodos = newTodos.filter(todo => todo.complete === false);
        setTodos(filteredTodos);
        setCheckAll(false); //this will uncheck the checked "All checkbox" after deleting some todos or after deleting all and adding new todo
        /* console.log({filteredTodos, newTodos});
        console.log('inside del handler');
        console.log({filteredTodos}); */
    }

    const handleAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(
            (todo) => todo.complete = !checkAll 
        )
        setTodos(newTodos);
        setCheckAll(!checkAll);
        console.log({newTodos});
    }

    const todosLength = () => {
        return todos.filter(todo => todo.complete === false)
    }

    const firstUpdate = useRef(true);
    useEffect(() => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        console.log(firstUpdate,'first opening');
        return;
      }
    });

    //console.log(todos.filter(todo => todo.complete === false));

    return (
        <>
        <div className='footer-container'>
        {todos.length === 0 ?
            <Subfooter />
               : 
               <>
               <label>
               <input type="checkbox" onChange={handleAll} checked={checkAll}/>
               Select All
           </label>
           <p>You have {todosLength().length} things to do!</p>
           <button type="submit" onClick={deleteHandler}>Delete</button>
           </>
            }
        </div>

        <div className='mobile-colors'>
            <div className='first-row-codes'>
                <h5 className="red-code">Urgent and Important </h5>
                <h5 className="green-code">Not Urgent But Important</h5>
            </div>
            <div className='second-row-codes'>
                <h5 className="violet-code">Urgent But Not Important</h5>
                <h5 className="yellow-code">Neither Urgent Nor Important</h5>
            </div>
        </div>
        </>
    )
}

export default Footer