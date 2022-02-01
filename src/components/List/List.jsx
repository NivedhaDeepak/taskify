import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ListItem from '../listItem/ListItem';
import './list.css';

const List = () => {

    const [todos, setTodos] = useContext(GlobalContext);

    const toggleComplete = (id) => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if(index === id){
                todo.complete = !todo.complete;
            }
        })
        setTodos(newTodos);
        console.log({newTodos});
    }

    const handleEditValue = (editValue, id) => {
      // console.log({editValue, id});
      const newTodos = [...todos];
      newTodos.forEach((todo, index) => {
          if(index === id){
             todo.todoName = editValue;
          }
      })
      setTodos(newTodos);
    }

    const handleEditDateValue = (editDateValue, id) => {
        // console.log({editValue, id});
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if(index === id){
               todo.todoDate = editDateValue;
            }
        })
        setTodos(newTodos);
      }

    const handleEditPriorityValue = (newPriority, id) => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if(index === id){
               todo.todoPriority = newPriority;
            }
        })
        setTodos(newTodos);
    }

    return (
        
            <ul className='list-container'>
            {todos.map((todo, index) => (
                <ListItem todo={todo} key={index} id={index} todoName={todo.todoName} 
                toggleComplete={toggleComplete} 
                handleEditValue={handleEditValue} handleEditDateValue={handleEditDateValue} 
                handleEditPriorityValue={handleEditPriorityValue} todoDate={todo.todoDate}/> 
            ))}
            </ul>
       
    )
}

export default List

