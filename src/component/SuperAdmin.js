import React, { useEffect, useState } from 'react'
import UserModal from './UserModal'
import DeleteModal from './DeleteModal'
import axios from 'axios'
const SuperAdmin = () => {
  const [users, setUsers]= useState([])
  const [modalVisible, setModalVisible]= useState(false)
  const [deleteModal, setDeleteModal]= useState(false)
  const [id, setId]= useState()
  const [user, setUser]= useState("")
  useEffect(()=>{
    axios.get('http://localhost:8000/users').then((res)=>{
      console.log(res);
     setUsers(res.data)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  const openDeleteModal = (id)=>{
    setId(id)
    setDeleteModal(true)
  }
  const openEditModal = (item)=>{
   setUser({...item})
   setModalVisible(true)
  }
   const toggle = ()=>{
    setModalVisible(false)
    setUser('')
   }
  return (
    <div className='container'>
      <UserModal open={modalVisible} toggle={toggle} user={user}/>
      <DeleteModal open={deleteModal} toggle={()=>setDeleteModal(false)} user={user} id={id}/>
      <button className='btn btn-info' onClick={()=>setModalVisible(true)}>Add user</button>
      <div className='row'>
          <div className="col-md-8 offset-2">
          <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>T/R</th>
              <th>First Name</th>
              <th>Last name</th>
              <th>Phone</th>
              <th> Active</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map((item,index)=>{
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.phone}</td>
                <td>{item.is_diploma ? "true" : "false"}</td>
                <td>{item.age}</td>
                <td>
                  <button className='btn btn-info' onClick={()=>openEditModal(item)}>Edit</button>
                  <button className='btn btn-danger' onClick={()=>openDeleteModal(item.id)}>Delete</button>
                </td>
              </tr>
            })
           }
          </tbody>
        </table>
          </div>
      </div>
    </div>
  )
}

export default SuperAdmin
