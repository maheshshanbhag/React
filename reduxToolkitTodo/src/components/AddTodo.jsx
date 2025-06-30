import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../feature/todo/todoSlice';

const AddTodo = ({editTodo, setEditTodo}) => {
    const [input, setInput] = React.useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.text);
        }
        else{
            setInput("");
        }
    },[editTodo])

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(editTodo){
            dispatch(updateTodo({ id: editTodo.id, text: input}));
            setEditTodo(null);
            setInput("");
        }
        else{
            dispatch(addTodo(input));
            setInput("");
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit} className='text-center'>
            <input type="text" 
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            className='bg-gray-200 border border-black-400 m-5'
            />
            <button type="submit">{editTodo ? "Update Todo" : "Add Todo"}</button>
        </form>
    </>
)
}

export default AddTodo