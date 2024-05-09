import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"


const BotonRetorno = ({destino='/'}) => {
  return (
    <div className="flex"> 
        <Link to={destino}
               className="bg-red-500 text-white px-4 py-1 rounded-lg w-fit" 
        >
        < BsArrowLeft className="text-2xl"/>
        </Link>
    </div>
  )
}

export default BotonRetorno