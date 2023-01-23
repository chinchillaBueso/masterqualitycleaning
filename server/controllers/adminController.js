const Testimonial=require('../models/Testimoniales')
const Contacto=require('../models/Contactos')

exports.adminConsulta=async(req,res)=>{
    const[testimonios, numtes]= await Promise.all([
        Testimonial.findAndCountAll(),
        Contacto.findAndCountAll()
    ])
    if(!req.session.user){
        res.redirect('/login')
    }else{
        res.render('inicioadmin',{
            pagina:'administracion',
            testimonios: testimonios.count,
            numtes:numtes.count,
            user:req.session.user.usuario
    
     })
  }
}