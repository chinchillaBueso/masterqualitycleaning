const Usuario=require('../models/Usuarios')
const bcrytp=require('bcrypt')
const {validationResult}=require('express-validator')

exports.Usuarioconsultas=async (req,res)=>{
    try{
        const usuarios= await Usuario.findAll({
            where:{
                perfil:'usuario'
            }
        })
        res.render('usuarios',{
            usuarios,
             pagin:'Control de Usuarios'
        })         
    }catch(err){
        console.log(err)
    }
    
}

exports.BorrarUsuario=async(req,res)=>{
    try{
        Usuario.destroy({
            where:{
                usuario:req.params.id,
                perfil:"usuario"
            }
        })
        .then(usuario=>res.redirect('/usuarios'))
        .catch(error=>console.log(error))
    }catch(e){
        console.log(e)
    }
}
exports.UsuariosPost=async(req,res)=>{
    const errores=validationResult(req);
    if(!errores.isEmpty()){
        const{usuario,correo,password}=req.body;
        const validaciones=errores.array();
        const usuarios= await Usuario.findAll({
            where:{
                perfil:'usuario'
            }
        }
           
        )
        
        res.render('usuarios',{
            validaciones,
            usuario,
            correo,
            password,
            usuarios
        })
    }else{
        try{
            if(req.session.user){
                const usuario=req.body.usuario;
                const correo=req.body.correo
                let password="";
                const perfil='usuario'
                bcrytp.hash(req.body.password,12)
                    .then(hash=>{
                        password=hash
                        Usuario.create({
                            usuario,
                            correo,
                            password,
                            perfil
                        })
                        .then(usuario=>res.redirect('/usuarios'))
                        .catch(error=>console.log(error))
                    })
                
            }
        }catch(err){
            console.log(err)
        }
    }
    
}
