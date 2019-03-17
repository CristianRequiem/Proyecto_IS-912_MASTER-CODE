//Validar campos del modal de inicio de sesión
function registrarLogIn(){
	var campos = [
		{campo:'txt-email-li', validado:false, nombre:'Correo'},
		{campo:'txt-password-li', validado:false, nombre:'Contraseña'}
	];

	for (var i=0;i<campos.length;i++){
        campos[i].validado = validarCamposLogin(campos[i].campo, campos[i].nombre);
    }

    for(var i=0;i<campos.length;i++){
        if (!campos[i].validado)
            return;
    }
}

function validarCamposLogin(campo, nombre){
    if (document.getElementById(campo).value ==''){   
        //document.getElementById(campo).classList.add('input-error');
        //document.getElementById('div-error-'+campo).style.display = 'block';
        window.alert('El campo ' + nombre + ' está vacío, debe llenarlo');
        return false;
    }else{
        //document.getElementById(campo).classList.remove('input-error');
        //document.getElementById('div-error-'+campo).style.display = 'none';
        return true;
    }
}

//Validar campos del modal de registro
function registrarSignUp(){
	var campos2 = [
		{campo2:'txt-nombre-su', validado2:false, nombre2:'Nombre'},
		{campo2:'txt-apellido-su', validado2:false, nombre2:'Apellido'},
		{campo2:'txt-email-su', validado2:false, nombre2:'Correo'},
		{campo2:'txt-password-su', validado2:false, nombre2:'Contraseña'}
	];

	for (var i=0;i<campos2.length;i++){
        campos2[i].validado2 = validarCamposSignup(campos2[i].campo2, campos2[i].nombre2);
    }

    for(var i=0;i<campos2.length;i++){
        if (!campos2[i].validado2)
            return;
    }
}

function validarCamposSignup(campo2, nombre2){
    if (document.getElementById(campo2).value ==''){   
        //document.getElementById(campo).classList.add('input-error');
        //document.getElementById('div-error-'+campo).style.display = 'block';
        window.alert('El campo ' + nombre2 + ' está vacío, debe llenarlo');
        return false;
    }else{
        //document.getElementById(campo).classList.remove('input-error');
        //document.getElementById('div-error-'+campo).style.display = 'none';
        return true;
    }
}