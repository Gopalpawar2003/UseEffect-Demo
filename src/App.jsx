import { useState } from 'react'
import './App.css'
import Userlist from './components/UserList.jsx'

function App() {
  // use effect we need to fetch user from an API https://jsonplaceholder.typicode.com/users
  return (
    <>
      <Userlist />
    </>
  )
}

export default App
