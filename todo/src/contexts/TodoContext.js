// import {createContext, useContext} from "react"

import { createContext, useContext } from "react";

// import { createContext } from "react";

// export const TodoContext = createContext({
//     todos: [
//         {
//             id: 1,
//             todo: " Todo msg",
//             completed: false,
//         }
//     ],
//     addTodo: (todo) => {},
//     updateTodo: (id, todo) => {},
//     deleteTodo: (id) => {},
//     toggleComplete: (id) => {}
// })


// export const useTodo = () => {
//     return useContext(TodoContext)
// }

// export const TodoProvider = TodoContext.Provider



export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todoMsg:"Todo msg",
            completed: false,
        }
    ],
    addTodo :(id,todo)=>{},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete:(id)=>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo =() =>{
    return useContext(TodoContext)
} 
