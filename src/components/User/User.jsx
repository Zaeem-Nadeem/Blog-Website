import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id}=useParams()
  return (
    <div className='text-center p-10 bg-slate-500 text-black font-serif font-bold text-lg'>
      <h1>User{id}</h1>
    </div>
  )
}

export default User
