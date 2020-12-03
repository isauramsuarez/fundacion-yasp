function validarforma(forma){
    console.log(" ");
    console.log("validando la forma");
    var usuario=forma.usuario;
    console.log("el usuario es "+usuario.value);
    //validamos el nombre de usuario
    if(usuario.value==""||usuario.value=="Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false;
    }
    //validando asunto
    if(asunto.value==""||asunto.value=="Escribir asunto"){
        alert("Debe proporcionar un asunto");
        asunto.focus();
        asunto.select();
        return false;
    }
    //validando correo
    var correo=forma.email;
    if(correo.value==""||correo.value=="Escribir correo"){
        alert("Debe proporcionar un correo electronico");
        correo.focus();
        correo.select();
        return false;
    }
    //validando celular
    var celular = (forma.cellphone.value);
    console.log("Celular: "+celular)
    if(forma.cellphone.value == "" || (!(celular > 3000000000 && celular < 3600000000))){
        alert("Debe digitar un número correcto de celular");
        return false;
    }

      
    //formulario validado
    alert("formulario validado, enviando datos...");
    return true;
}