import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/todo/todoSlice';

const TodoList = ({setEditTodo}) => {
    // Accessing the todos from the Redux store
    const todos  = useSelector((state) =>state.todos)
    const dispatch = useDispatch();
  return (
    <>
      <div className='w-full h-screen bg-pink-200 flex flex-col items-center '>
        {todos.map((todo)=>{
            return(
                <div className='flex gap-3 w-fit bg-gray-300 p-2 m-2'>
                  <li key={todo.id}>{todo.text}</li>
                  <button onClick={()=> dispatch(removeTodo(todo.id))} className='p-1 bg-green-400'>Delete</button>
                  <button onClick={()=> setEditTodo(todo)} className='p-1 bg-blue-400'>Update</button>
                </div>
            )
        })}
      </div>
  </>
  )
}

export default TodoList