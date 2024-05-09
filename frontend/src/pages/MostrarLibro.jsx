import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BotonRetorno from '../components/BotonRetorno'
import Spinner from '../components/Spinner'







const MostrarLibro = () => {
  const [libro, setLibro] = useState({})
  const[cargando,setCargando] = useState(false)
  const {id} = useParams() 
  useEffect(() => {
    setCargando(true)
    axios
    .get ('http://localhost:3000/libros/$')
    .then((responsc)=>{ 
      setLibro(responsc.data.data)
      setCargando(false)
  })

  .catch ((error)=>{ console.log(error)
    setCargando(false)
  }) 

  })
  return (
    <div className='p-4'>
      <BotonRetorno/>
      <h1 className='text-3xl my-4'>
      MostrarLibro
      </h1>
      {cargando ? (<Spinner/>): (
        <div className='flex flex-col border-2 border-blue 600 rounded-xl w-fit p-4'>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray 500 '>
              Id
            </span>
            <span >
             {libro._id}
            </span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray 500 '>
             Titulo
            </span>
            <span >
            {libro.titulo}
            </span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray 500 '>
              Autor
            </span>
            <span>
            {libro.autor}
            </span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray 500 '>
              Año de Publicacion
            </span>
            <span >
            {libro.anhopublicacion}
            </span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray 500 '>
              Editorial
            </span>
            <span>
            {libro.editorial}
            </span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray 500 '>
              Fecha de elaboracion
            </span>
            <span>
              {new Date(libro.createdAt).toString()}
            </span>
            
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray 500 '>
             Fecha de ultima actualizacion 
            </span>
            <span >
            {new Date(libro.updatedAt).toString()}
            </span>
          </div>
        </div>
      )
      
      }  
    </div>
  )
}

export default MostrarLibro
