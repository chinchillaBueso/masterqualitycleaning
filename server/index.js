//configuracion de express
const express=require('express');
const app= express();
const routes=require('./routes');
const path=require('path');
const configs=require('./config');
const bodyParser=require('body-parser')
const aos=require("aos")
const session=require('express-session');

require('dotenv').config({path:'variables.env'})
//const db=require('./config/database');

//configuracion de pug
app.set('view engine','pug')
app.set('views',path.join(__dirname,'./views'))

//crear directorio estatico
app.use(express.static('public'));

app.use((req,res,next)=>{
    //crear nueva fecha
    const fecha = new Date();
    res.locals.fechaActual=fecha.getFullYear();
    res.locals.ruta=req.path;
    return next();//utilizacion de mi

})
//inicializar de express-session
app.use(session({
    secret:'secret token',
    resave:false,
    saveUninitialized:true,
    unset:'destroy',
    name:'session cokie name'
}))


//validacion de conexion
//db.authenticate()
  //  .then(()=>console.log('db conectada'))
    //.catch(error=>console.log(error));

//confguracion de modo de ejecucion
const config =configs[app.get('env')];

    //crear variable
app.locals.titulo=config.nombredelsitio

//ejecutar body-parser
app.use(bodyParser.urlencoded({extended:true}));
//cargar rutas
app.use('/',routes())
//configuracion del puerto
//app.listen(3000);
const host=process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host,()=>{
    console.log('Servidor Funcioando!')
})