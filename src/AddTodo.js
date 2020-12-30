import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Viewtodo from './Viewtodo'
import { addtodo, fetchPost } from './store/todoSlice'

function AddTodo() {
    const dispatch = useDispatch()
  
    const [title, settitle] = useState()
    const handleChange = (e) => {
        settitle(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addtodo(title))
        console.log('sdsd')

    }
    return (
        <div className='full'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>
         <button onClick={()=>dispatch(fetchPost())}> Post </button>
            <Viewtodo />
        </div>
    )
}

export default AddTodo