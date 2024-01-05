import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { Store } from './Store'
import { Papeleria } from './Papeleria'
import { Piñateria } from './Piñateria'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path='Store' element={<Store/>}/>
      <Route path='Papeleria' element={<Papeleria/>}/>
      <Route path='Piñateria' element={<Piñateria/>}/>
      <Route path='/*' element={<Navigate to={'/Store'}/>}/>
    </Routes>
  )
}
