const Servicio = require('../models/Servicios');
const Testimonial=require('../models/Testimoniales')
const Carrousel=require('../models/Carrouseles')
const Contacto=require('../models/Contactos')
const {validationResult}=require('express-validator')
exports.inicioConsultas=async (req,res)=>{

    const carrouseles=await Carrousel.findAll({
        where:{
            tipo:'carousel'
        }
    })

    const servicios=await Servicio.findAll({
        limit:3
    })
    
   const testimonios= await Testimonial.findAll({
        limit:3,
        where:{
            calificacion:'5'
        }
    })

        res.render('inicio',{
            pagina:'Maste Quality Cleaning LLC',
            carrouseles,
            servicios,
            testimonios,
        });
}

exports.inicioPost= async (req,res)=>{
    try{
        const carrouseles=await Carrousel.findAll({
            where:{
                tipo:'carousel'
            }
        })

        const testimonios= await Testimonial.findAll({
            limit:3,
            where:{
                calificacion:'5'
            }
        })
        let {nombre , correo , telefono, mensaje}=req.body
        const errores=validationResult(req)
        const validaciones =errores.array()
        if(!errores.isEmpty()){
            res.render('inicio',{
                nombre,
                correo,
                telefono,
                mensaje,
                validaciones,
                carrouseles,
                testimonios
            })
            
        }else{
            Contacto.create({
                nombre,
                correo, 
                telefono, 
                mensaje
            })
            .then(contacto=>res.redirect('/'))
            .catch(error=>console.log(error))
        }
    }catch(e){
        console.log(e)
    }
    
}