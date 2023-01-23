const { render } = require('pug')
const Usuario=require('../models/Usuarios')
const bcrypt =require('bcrypt')
const {validationResult, sanitize}=require('express-validator')
const limpiartexto=require('../helpers/sanitizar')
exports.loginConsulta=async (req,res)=>{
    res.render('login',{
        pagina: 'Login'
    })
}

exports.loginPost=async(req,res)=>{
   const errores=validationResult(req);
   if(!errores.isEmpty()){
        const validaciones=errores.array();
        const {usuario,correo,password}=req.body
        res.render('login',{
            validaciones,
            pagina:"Login",
            usuario,
            correo,
            password

        })
   }else{
    try{
        let us=req.body.usuario
        let co=req.body.correo
        let user= await Usuario.findOne({
            where:{
                usuario: us,
                correo:co
            }
        }
        )
        if(user !== null){
            const match =await bcrypt.compare(req.body.password,user.password)
            if(match){
                req.session.user={
                    name:user.usuario,
                    correo:user.correo,
                    perfil:user.perfil
                }
                res.redirect('/admin')
                }else{
                    res.render('login',{
                        mensaje:'Usuario ,correo o Password incorrecto!'
                    })
                }
            }else{
                res.render('login',{
                    mensaje:'Usuario ,correo o Password incorrecto!'
                })
            }
        }
        catch(err){
            console.log(err)
        
        }
   }
   
}

exports.salir= async(req,res)=>{
    try{
        if(req.session.user){
            delete req.session.user
            res.redirect('/login')
        }else{
            res.redirect('/login')
        }
    }catch(err){
        console.log(err)
    }
}