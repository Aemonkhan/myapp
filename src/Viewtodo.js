import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {deletetodo, fetchPost} from './store/todoSlice'

function Viewtodo() {
    const [title, settitle] = useState('')
    const dispatch = useDispatch()
    const state= useSelector( state=>state.todos)
    const posts= useSelector(state=>state.posts)
    console.log('.....',posts)
    const handleDelete = (id)=>{
         dispatch(deletetodo(id))
    }
    return (
        
        <div className='Todos'>
            {
                state.map((item)=>(
                    <div key={item.id}>
                        {item.title}
                    <button onClick={()=>handleDelete(item.id)}>X</button><br/>
                
                     </div>
                ))            }

                <div className='posts'>  
                    { posts.map((post)=>( <div key={post.id}>{post.title}</div>))}
                   
                   
                </div>
                
               
        </div>
    )
}

export default Viewtodo