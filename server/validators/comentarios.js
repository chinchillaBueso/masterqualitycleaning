const {body, validationResult }=require('express-validator');
const ValidateComentario=[
    body('nombre','Ingresar nombre valido!').exists().not().isEmpty().isString(),
    body('correo','Ingresar correo Valido!').exists().not().isEmpty().isEmail(),
    body('mensaje','Ingresar Comentario Valido!').exists().not().isEmpty().isString(),
    body('calificacion','Seleccionar Calificacion!').exists().not().isEmpty().trim()
]

module.exports={
    ValidateComentario}