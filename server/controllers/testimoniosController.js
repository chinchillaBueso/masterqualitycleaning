const Testimoniales = require('../models/Testimoniales')

exports.testimoniosConsulta= async (req,res)=>{
   const {v , w} =req.params;
   try{
    if(req.session.user){
        const desde=+v || 0;
        const registropp= +w || 10;
        const[testimonios,numerotes]=await Promise.all([
           Testimoniales.findAll({
            order:[[
                'id','DESC'
            ]],
            offset: (desde), limit: (registropp)
            }),
            Testimoniales.findAndCountAll()
        ])

        const jjson=({
            ok:true,
            testimonios,
            page:{
                desde,
                registropp,
                total:numerotes.count
            }
        })       
        console.log(jjson)

        res.render('comentarios',{
        pagina:'Administracion Comentarios',
        jjson,
        user:req.session.user
    })
    }else{
        res.redirect('/login')
    }
   }catch(err){
    console.log(err)
   }
    
}

exports.testimoniopost=async(req,res)=>{
    console.log(req.params.v)
    try{
        if(req.session.user){
            
            const llave=req.params.id
            const testimonio =await Testimoniales.findByPk(llave)

           if (testimonio.estado==='espera') {
             Testimoniales.update(
              {estado:"aprobado"},
              {where:{
               id:llave
              }
            })

            res.redirect(`/testimoniosad/${req.params.v}&${req.params.w}`)
        }else{
          Testimoniales.update(
            {estado:"espera"},
            {where:{
                id:llave
            }
           })
    
           res.redirect(`/testimoniosad/${req.params.v}&${req.params.w}`)
        }
        }
    }catch(err){
        console.log(err)
    }
    
}