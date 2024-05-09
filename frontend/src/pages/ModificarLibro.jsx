import React, {useState, useEffect}  from 'react'
import BotonRetorno from '../components/BotonRetorno'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'




const ModificarLibro = () => {
  const [cargando, setCargando] = useState (false)
  const [titulo, setTitulo] = useState('')                                  /* useState es el intermediario entre el usuario y la base de dato*/ 
  const [autor, setAutor] = useState('')                                     /* Declaramos un estado de react, permite agregar una variable al componente, puede que exista o no,   */
  const [anhopublicacion, setAnhopublicacion] = useState('')            
  const [editorial, setEditorial] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()
useEffect(() => {
  setCargando(true)
  axios
  .get (`http://localhost3000/libro/${id}`)
  .then((responsc)=>{ 
    setTitulo(response.data.titulo)
    setAutor(response.data.autor)
    setAnhopublicacion(response.data.anhopublicacion)
    setEditorial(response.data.editorial)

    setCargando(false)
})

.catch ((error)=>{ console.log(error)
  setCargando(false)
}) 

})

  const handleModificarLibro = ()=>{
  const data = {
    titulo,
    autor, 
    anhopublicacion, 
    editorial}

    setCargando (true)
    
    axios
    .put(`http://localhost:3000/libros/${id}`, data)
    .then(()=>{
      setCargando(false)
      navigate ('/')

      .catch((error)=>{

      alert ('Error al ingresar los datos ')

       setCargando(false)
    })

    })

     }

  return (
    <div className='p-4'>
       <BotonRetorno/>
       <h1 className='text-3xl my-4'>
        Modificar Libro
       </h1>
       {cargando ? <Spinner/> : ''}
       <div className='flex flex-col border-2 border-blue-500 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
       <label className="text-xl mr-4 text-gray-500">
        Titulo
       </label>
       <input type='text' value={titulo} onChange= {(e) => setTitulo(e.targetValue)} className="border border-gray-500 px-4 py-2 w-full"/>

        </div>
        <div className='my-4'>
       <label className="text-xl mr-4 text-gray-500">
        Autor
       </label>
       <input type='text' value={autor} onChange= {(e) => setAutor(e.targetValue)} className="border border-gray-500 px-4 py-2 w-full"/>

        </div>
        <div className='my-4'>
       <label className="text-xl mr-4 text-gray-500">
        Año Publicacion
       </label>
       <input type='text' value={anhopublicacion} onChange= {(e) => setAnhopublicacion(e.targetValue)} className="border border-gray-500 px-4 py-2 w-full"/>

        </div>
        <div className='my-4'>
       <label className="text-xl mr-4 text-gray-500">
        Editorial
       </label>
       <input type='text' value={editorial} onChange= {(e) => setEditorial(e.targetValue)} className="border border-gray-500 px-4 py-2 w-full"/>

        </div>
      <button className='p-2 blue-300 m-8' onClick={handleModificarLibro} >
        Guardar
      </button>
       </div>


    </div>



  )
}

export default ModificarLibro