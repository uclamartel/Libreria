import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import  {AiOutlineEdit } from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'



const Home = () => {
    const [libros, setLibros]= useState([])
const  [cargando, setCargando]= useState(false)

useEffect(()=>{
    setCargando(true)
    axios
    .get('http://localhost:3000/libros')
    .then((response)=>{ 
        setLibros(response.data)
        setCargando(false)
    })
    .catch((error)=>{
        console.log(error)
        setCargando(false)
    })

},[])

  return (
    <div className='p-4'> 
        <div className='flex justify-between items-center'> 
        <h1 className='text-3xl my-8'> Lista de Libros  </h1>
        <Link to='/libro/crear-libro'>
        <MdOutlineAddBox className='text-green-600 text-1xl'/> 
        {/* Etiqueta link para cambiar de ruta  */}
        </Link> 
        </div>
        {
                cargando ? (<Spinner/>): (
                    <table className='w-full border-separate border-spacing-2 '>
                        <thead>
                            <tr>
                                <th className='border border-slate-500 rounded-md'>
                                 N°  
                                </th>
                                <th className='border border-slate-500 rounded-md'>
                                 Titulo
                                </th>
                                <th className='border border-slate-500 rounded-md'>
                                 Autor
                                </th>
                                <th className='border border-slate-500 rounded-md'>
                                Año Publicacion
                                </th>
                                <th className='border border-slate-500 rounded-md'>
                                Editorial
                                </th>
                                
                            </tr>
                            </thead> 
                            
                            <tbody>
                                {
                                    libros && libros.length > 0 ? (
                                    libros.map((libro,indice)=>(
                                      
                                      <tr>
                                            <td className='border border-slate-500 rounded-md'>
                                                {
                                                  indice +1 
                                                }
                                            </td>
                                            <td className='border border-slate-500 rounded-md'>
                                                {
                                                  libro.titulo 
                                                }
                                            </td>
                                            <td className='border border-slate-500 rounded-md'>
                                                {
                                                  libro.autor 
                                                }
                                            </td>
                                            <td className='border border-slate-500 rounded-md'>
                                                {
                                                  libro.anhopublicacion
                                                }
                                            </td>
                                            <td className='border border-slate-500 rounded-md'>
                                                {
                                                  libro.editorial
                                                }
                                            </td>
                                            <td className='border border-slate-500 rounded-md text-center'>
                                                <div className='flex justify-center gap-x-4'>
                                                     <Link to= {`/libros/detalles/${libro._id}`}> 
                                                    <BsInfoCircle className='text-2xl text-green' />                                                    
                                                    </Link>
                                                    <Link to={`/libros/editar/${libro._id}`}>
                                                    <AiOutlineEdit className='text-2xl text-yellow ' />                                                    
                                                    </Link>
                                                    <Link to={`/libros/eliminar/${libro._id}`}>
                                                    <MdOutlineDelete className='text-2xl text-red' />                                                    
                                                    </Link>
                                                    </div>        
                                            </td>
                                        </tr>
                                        )
                                    )):(<h1>Libro no Encontrado </h1>)
                                }
                            </tbody>

                    </table>
                )
        }
        
    </div>
  )
}

export default Home