import axios from 'axios'
import React, { useEffect } from 'react'
export default function Crud() {
    useEffect(()=>{
        axios.get('http://localhost:8000/users').then(res=>{
            console.log(res);
        })
    },[])
    const addUsers =(e)=>{
        e.preventDefault()
        let name = e.target[0].value
        let last_name = e.target[1].value
        let age = +e.target[2].value
        let payload={
            name,
            last_name,
            age
        }
        axios.post('http://localhost:8000/users',{...payload}).then(res=>{
            console.log(res);
        })
    }
  return (
    <div className='container'>
         <form id='users' onSubmit={addUsers}>
         <input type="text" placeholder='name' className='form-control my-2' />
            <input type="text"   placeholder='last name' className='form-control my-2' />
            <input type="number" placeholder='age' className='form-control my-2' />
            <button type='submit' form='users' className='btn btn-primary'>Add User</button>
        </form>
    </div>
  )
}
