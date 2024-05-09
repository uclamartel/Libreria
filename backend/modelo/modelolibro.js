import mongoose from "mongoose";

const libroSchema = new mongoose.Schema(
    {
    titulo: {
        type: String,
        required: true,
        },
    
    autor:{ 
      type:  String,
      required: true,
    },
    
    anhoPublicacion: 
        {
        type:Number,
        required: true,
    },
    
    editorial: {
            type:String,
    },
},
    
    {    
        timestamps: true,
    }
);
//modelo de la base de datos
export const Libro = mongoose.model('Libro', libroSchema)