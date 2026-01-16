import { useState } from 'react'
import './App.css'
import Userlist from './components/UserList.jsx'
import Postlist from './components/PostList.jsx'

function App() {
  // use effect we need to fetch user from an API https://jsonplaceholder.typicode.com/users
  return (
    <>
      <Userlist />
      <Postlist />
    </>
  )
}

export default App
