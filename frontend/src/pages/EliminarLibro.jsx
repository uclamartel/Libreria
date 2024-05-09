import React, {useState}  from 'react'
import BotonRetorno from '../components/BotonRetorno'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EliminarLibro = () => {
const [cargando, setCargando] = useState (false)
const navigate = useNavigate();
const {id} = useParams()
const handleBorrarLibro=()=>{

  setCargando(true)
  axios
  .delete(`http://localhost:3000/libros/${id}`)
  .then(()=>{
    setCargando(false)
    navigate('/')
  
    })
      .catch((error)=>{
        alert ('Error al ingresar los datos ')
         setCargando(false)
       
      })

}


  return (
    <div className='p-4'>
      <BotonRetorno/>
      <h1 className='text-3xl my-4'>
        Borrar Libro
      </h1>
      {!cargando ? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-blue-500 rounded-xl w-[600px] p-4 mx-auto'>
      <h3 className='text 2xl'>
      ¿Esta seguro de borrar el libro? 
      </h3>
      <button className='p-4 bg-red-600 text-white m-8' onClick={handleBorrarLibro}>
      Borrar
      </button>
      </div>

    </div>
  )}


export default EliminarLibro