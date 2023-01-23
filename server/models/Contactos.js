const Sequelice=require('sequelize')
const dbConexion=require('../config/database')

const Contacto= dbConexion.define('contacto',{
    nombre:{
        type:Sequelice.STRING
    },
    correo:{
        type:Sequelice.STRING
    },
    mensaje:{
        type:Sequelice.STRING
    
    },
    telefono:{
        type:Sequelice.STRING
    },
    fecha:{
        type:Sequelice.STRING
    }
})

module.exports=Contacto;