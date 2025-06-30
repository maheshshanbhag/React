import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App = () => {
  const [editTodo, setEditTodo] = React.useState(null);
  return (
    <>
    <AddTodo editTodo={editTodo} setEditTodo={setEditTodo} />
    <TodoList setEditTodo={setEditTodo} />
    </>
  )
}

export default App