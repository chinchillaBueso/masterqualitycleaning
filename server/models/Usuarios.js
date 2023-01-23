const Sequelice=require('sequelize')
const db=require('../config/database')

const Usuario=db.define('usuario',{
    usuario:{
        type:Sequelice.STRING,
        primaryKey:true
    },
    correo:{
        type:Sequelice.STRING
    },
    password:{
        type:Sequelice.STRING
    },
    perfil:{
        type:Sequelice.STRING
    }
   
})

module.exports=Usuario