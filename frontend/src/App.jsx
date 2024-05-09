import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CrearLibro from './pages/CrearLibro'
import EliminarLibro from './pages/EliminarLibro'
import Home from './pages/Home'
import ModificarLibro from './pages/ModificarLibro'
import MostrarLibro from './pages/MostrarLibro'




const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/libro/crear-libro' element={<CrearLibro/>}/>
    <Route path='/libro/eliminar-libro' element={<EliminarLibro/>}/>
    <Route path='/libro/modificar-libro' element={<ModificarLibro/>}/>
    <Route path='/libro/mostrar-libro' element={<MostrarLibro/>}/>
    
   </Routes>
  )
}

export default App