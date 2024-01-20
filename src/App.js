import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SuperAdmin from './component/SuperAdmin';
import Crud from './pages/Crud';

export default function App() {
  
  return (
    <>
     <Routes>
      <Route path='dkj' element={<Crud/>}/>
      <Route path='/' element={<SuperAdmin/>}/>
     </Routes>
    </>
  )
}