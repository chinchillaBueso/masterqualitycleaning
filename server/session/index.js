const session=require('express-session');

exports.ValidacionSession =(req,res,next)=>{
    if(req.session.user){
        next();
    }else{
        res.redirect('/login')
    }
}
