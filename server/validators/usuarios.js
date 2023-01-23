const {body, validationResult }=require('express-validator');
const ValidateUsuario=[
    body('usuario','Ingresar nombre valido!').exists().not().isEmpty().isString(),
    body('correo','Ingresar correo Valido!').exists().not().isEmpty().isEmail(),
    body('password','Ingresar password!').exists().not().isEmpty().trim(),
]

module.exports={
    ValidateUsuario
}