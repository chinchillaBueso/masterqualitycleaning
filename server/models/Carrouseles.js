const Sequelice = require('sequelize');
const dbconfig=require('../config/database');

const Carrousel= dbconfig.define('carrousel',{
    imagen:{
        type:Sequelice.STRING
    },
    h5:{
        type:Sequelice.STRING
    },
    p:{
        type:Sequelice.STRING
    },
    clase:{
        type:Sequelice.STRING
    },
    tipo:{
        type:Sequelice.STRING
    }
})

module.exports=Carrousel