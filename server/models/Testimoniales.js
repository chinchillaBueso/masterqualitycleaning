const { Sequelize } = require('sequelize');
const Squelize=require('sequelize');
const dbconfig=require('../config/database')

const Testimonial=dbconfig.define('testimoniales',{
    nombre:{
        type:Sequelize.STRING
    },
    correo:{
        type:Sequelize.STRING
    },
    mensaje:{
        type:Sequelize.STRING
    },
    calificacion:{
        type:Sequelize.STRING
    },
    fecha:{
        type:Sequelize.DATE
    },
    estado:{
        type:Sequelize.STRING
    }

})

module.exports=Testimonial;