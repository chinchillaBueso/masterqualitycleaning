const Sequelize = require('sequelize');
const dbconfig=require('../config/database')

 const Servicio=dbconfig.define('servicio',{
    titulo:{
        type:Sequelize.STRING
    },
     descripcion:{
        type:Sequelize.STRING
     },
     imagen:{
        type:Sequelize.STRING
     },
     logo:{
         type:Sequelize.STRING
     },
     estado:{
        type:Sequelize.STRING
     },
     localidad:{
        type:Sequelize.STRING
     },
     fechaingreso:{
        type:Sequelize.DATE
     }
 })
 module.exports=Servicio;