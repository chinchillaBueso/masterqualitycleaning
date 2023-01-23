const Contactos=require('../models/Contactos')

exports.contactoConsulta= async (req,res)=>{
   
   try{
        const desde=0;
        const registropp=5;
        const[contactos,numerocontacto]=await Promise.all([
           Contactos.findAll({
            order:[[
                'id','DESC'
            ]],
            offset: (desde), limit: (registropp)
            //}),
            //Contactos.findAll({
             //   order:[[
             //       'id','DESC'
             //   ]]
            }),
            Contactos.findAndCountAll()
        ])
        
        const jjson=({
            ok:true,
            contactos,
            page:{
                desde,
                registropp,
                total:numerocontacto.count
            }
        })       
        
        res.render('contactos',{
         jjson,
         //contactos,
         pagina:'Contactos'
        })
  
   }catch(err){
    console.log(err)
   }

   
}

exports.consultapaginacion=async(req,res)=>{
    const {v , w} =req.params;
    try{
        
            const desde=+v || 0;
            const registropp= +w || 5;
            const[contactos,numerocontacto]=await Promise.all([
               Contactos.findAll({
                order:[[
                    'id','DESC'
                ]],
                offset: (desde), limit: (registropp)
                //}),
                //Contactos.findAll({
                 //   order:[[
                 //       'id','DESC'
                 //   ]]
                }),
                Contactos.findAndCountAll()
            ])
            
            const jjson=({
                ok:true,
                contactos,
                page:{
                    desde,
                    registropp,
                    total:numerocontacto.count,
                }
            })       
            console.log(jjson)
            res.render('contactos/paginacion',{
             jjson,
             //contactos,
             pagina:'Contactos'
            })
      
       }catch(err){
        console.log(err)
       }
}