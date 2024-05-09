import React from 'react'
import { Link } from 'react-router-dom'
import  {AiOutlineEdit } from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'

const LibroTabla = () => {
  return (
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
                ))
            }
        </tbody>

</table>
  )
}

export default LibroTabla