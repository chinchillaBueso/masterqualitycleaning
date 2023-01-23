const Servicio = require('../models/Servicios');

exports.servicioConsultas=async (req,res)=>{
    const servicios=await  Servicio.findAll({
     where:{
         estado:'activo'
     }
    })
     res.render('servicios',{
         pagina: "Servicios Disponibles",
         servicios
     })
 }

 exports.serviciosdetalle=async (req,res)=>{
    const servicio=await Servicio.findByPk(req.params.id)
      res.render('servicio',{
         servicio
     });
 }