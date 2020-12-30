import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
export const fetchPost = createAsyncThunk(
    'fetchposts',
    async (data, thunkApi) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return response.json()
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{ title: 'buy milk', id: 1 }],
        posts: []
    },
    reducers: {
        addtodo: {
            reducer(state, action) {
                console.log(action.payload)
                let newObj = action.payload
                let newState = [...state.todos, newObj]
                state.todos=newState

                // return newState
            },
            prepare(title) {
                return { payload: { title: title, id: uuidv4() } }
            }
        },
        deletetodo: {
            reducer(state, action) {
                console.log(action.payload.id)
                let newState1 = state.todos.filter(item => item.id != action.payload.id)
               state.todos=newState1

            },
            prepare(id) {
                return { payload: { id } }
            }
        }
    },
    extraReducers: {
        [fetchPost.fulfilled]: (state, action) => {
            // state.value += action.payload;
            state.posts = action.payload.slice(0, 10)
        },
    }
})
export const { addtodo, deletetodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer