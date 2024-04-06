import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';
export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }

    const handleInput=(e)=>{
        setTask(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='task' onChange={handleInput} value={task}/>
                <button>Add </button>
            </form>
        </>
    )
}
