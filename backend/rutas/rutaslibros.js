import express from 'express';
import { Libro } from '../modelo/modelolibro.js';

const router = express.Router();



// Ruta para guardar un libro
router.post('/', async (req, res) => {
    // Código para guardar un libro
    try {
        if (!req.body.titulo || !req.body.autor || !req.body.anhoPublicacion) {
            return res.status(400).send('Todos los campos son requeridos');
        }        
        // Crear un nuevo libro
        const nuevoLibro = ({
            titulo: req.body.titulo,
            autor: req.body.autor,
            anhoPublicacion: req.body.anhoPublicacion,
            editorial: req.body.editorial,
        });
        // Guardar el libro en la base de datos
        const libro = await Libro.create(nuevoLibro);
        return res.status(201).send(libro);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al guardar el libro');
    }
});
//Ruta que te permite obtener un libro por su id
router.get('/:id', async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        if (!libro) {
            return res.status(404).send('Libro no encontrado');
        }
        return res.status(200).send(libro);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener el libro');
    }
});


//Ruta que te permite actualizar un libro por su id
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.titulo || !req.body.autor || !req.body.anhoPublicacion) {
            return res.status(400).send('Todos los campos son requeridos');
        }
        const {id} = req.params;
        const resultado = await Libro.findByIdAndUpdate(id,req.body)
        return res.status(200).send('Libro actualizado correctamente');
        if (!resultado) {
            return res.status(404).send('Libro no encontrado');
        }
       
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al actualizar el libro');
    }
});
//Ruta que te permite eliminar un libro por su id
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const resultado = await Libro.findByIdAndDelete(id);
        if (!resultado) {
            return res.status(404).send('Libro no encontrado');
        }
        return res.status(200).send('Libro eliminado correctamente');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar el libro');
    }
});
export default router;

//Ruta que te permite obtener todos los libros
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.find({});
        return res.status(200).json({
            data: libros.length,
            libros,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener los libros');
    }
});

