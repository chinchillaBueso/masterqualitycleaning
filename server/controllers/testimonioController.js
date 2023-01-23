const Testimonial=require('../models/Testimoniales')
const {body,validationResult}=require('express-validator')
exports.testimonioconsultas=async (req,res)=>{
    const testimonios = await Testimonial.findAll({
        where:{
            estado:"aprobado"
        }
    })
        res.render('testimonios',{
            pagina:'Testimonios',
            testimonios
        })
    
}

exports.testimoniosPost=async (req,res)=>{
    let {nombre, correo, mensaje, calificacion}=req.body
    let estado="aprobado";
    const errores=validationResult(req);
    
    if(!errores.isEmpty()){
        const testimonios=await Testimonial.findAll({
            where:{
                estado:"aprobado"
            }
        })

        const validaciones=errores.array();
        console.log(validaciones)
        res.render('testimonios',{
            testimonios,
                mensaje,
                nombre,
                correo,
                validaciones
        })
    }else{
        Testimonial.create({
            nombre,
            correo,
            mensaje,
            calificacion,
            estado
        })
        .then(testimonial=>res.redirect('/testimonios'))
        .catch(error=>console.log(error))
    }
}