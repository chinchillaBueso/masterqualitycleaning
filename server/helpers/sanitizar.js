const { compileClientWithDependenciesTracked } = require("pug");

exports.Sanitizar=(cadena)=>{
    String.prototype.replaceAt = function(index, replacement) {
        if (index >= this.length) {
            return this.valueOf();
        }
     
        return this.substring(0, index) + replacement + this.substring(index + 1);
    }

    while(cadena.search('=')!==-1){
        let posicion=(cadena.search('='))
        cadena=cadena.replaceAt(posicion,"")
    }
    
       
    return cadena
}