import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UseContextProvider from './context/UseContextProvider.jsx'

const App = () => {
  return (
    <UseContextProvider>
      <Login />
      <Profile />
    </UseContextProvider>
  )
}

export default App