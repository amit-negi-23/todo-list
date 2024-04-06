import React from 'react'
import { useSelector } from 'react-redux'
import AddForm from './AddForm';
import {useDispatch} from 'react-redux'
import { deleteTodo, markAsDone } from '../features/todo/todoSlice';
export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    const dispatch = useDispatch();

    const handleDelete = (id)=>{
        dispatch(deleteTodo(id))
    }
    const handleMarkAsDone = (id)=>{
        dispatch(markAsDone(id))
    }
    return (
        <>
            <AddForm />
            <h2>Todo List App</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecoration: "line-through"}: {}}>{todo.task}</span>
                        <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                        <button onClick={()=>handleMarkAsDone(todo.id)}>Mark as done</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
