const {body, validationResult }=require('express-validator');
const ValidateCreate=[
    body('nombre','Ingresar nombre valido!').exists().not().isEmpty().isString(),
    body('correo','Ingresar correo Valido!').exists().not().isEmpty().isEmail(),
    body('telefono','Ingresar telefono valido!').exists().not().isEmpty().trim(),
    body('mensaje','Ingresar mensaje valido!').exists().not().isEmpty()
]

module.exports={
    ValidateCreate
}