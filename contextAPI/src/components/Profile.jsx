import React, { useContext } from 'react'
import userContext from '../context/useContext.js'

const Profile = () => {
  const { user } = useContext(userContext)

  if (!user.username || !user.password) {
    return <h1>Please login</h1> 
  }

  return <h1>Welcome {user.username}</h1> 
}

export default Profile
