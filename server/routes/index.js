//configuracion de rutas de la pagina 
const express=require('express');
const router = express.Router();


const nosotrosController=require('../controllers/nostrosControllers')
const inicioControllers=require('../controllers/inicioController')
const servicioController=require('../controllers/serviciosController')
const testtimonioController=require('../controllers/testimonioController')
const loginController=require('../controllers/loginController')
const adminController=require('../controllers/adminController')
const contactoController=require('../controllers/contactoController')
const testimoniosController=require('../controllers/testimoniosController')
const usuarioController=require('../controllers/usuarios.Controller')


const {ValidateCreate}=require('../validators/contacto')
const {ValidateContact}=require('../validators/login')
const {ValidateUsuario}=require('../validators/usuarios')
const {ValidateComentario}=require('../validators/comentarios')

const ValidacionSession=require('../session')
const Perfil=require('../session/perfil')
module.exports =function(){

    router.get('/',inicioControllers.inicioConsultas)
    
    router.post('/',ValidateCreate ,inicioControllers.inicioPost)

    router.get('/nosotros',nosotrosController.nostrosconsultas)

    router.get('/servicios',servicioController.servicioConsultas);

    router.get('/servicios/:id',servicioController.serviciosdetalle);

    router.get('/testimonios',testtimonioController.testimonioconsultas);

    router.post('/testimonios',ValidateComentario,testtimonioController.testimoniosPost);

    router.get('/login',loginController.loginConsulta)
    
    router.post('/login',ValidateContact,loginController.loginPost)
    
    router.get('/admin',ValidacionSession.ValidacionSession,adminController.adminConsulta)
    
    router.get('/contactos',ValidacionSession.ValidacionSession,contactoController.contactoConsulta)

    router.get('/testimoniosad/:v&:w',ValidacionSession.ValidacionSession,testimoniosController.testimoniosConsulta)
    
    router.get('/testimoniosad/:v&:w/:id',ValidacionSession.ValidacionSession,testimoniosController.testimoniopost)

    router.get('/usuarios',Perfil.Perfil,ValidacionSession.ValidacionSession,usuarioController.Usuarioconsultas)

    router.post('/usuarios',Perfil.Perfil,ValidacionSession.ValidacionSession,ValidateUsuario,usuarioController.UsuariosPost)

    router.get('/usuarios/:id',Perfil.Perfil,ValidacionSession.ValidacionSession,usuarioController.BorrarUsuario)

    router.get('/contactos/:v&:w',Perfil.Perfil,ValidacionSession.ValidacionSession,contactoController.consultapaginacion)

    router.get('/salir',loginController.salir)
    return router
}