function validarCurso(){
	if($("#nombre").val().trim() == "" || $("#nombre").val().trim() == null){
  	    alert('Ingrese el nombre.');
        return false;
    }
    else if (!sonLetrasSolamente($("#nombre").val())) {
        alert('Ingrese solo letras en el campo nombre');
        return false;
    }

    if($("#grupo").val().trim() == '' ||$("#grupo").val().trim() == null){
        alert('Ingrese el grupo');
        return false;
    }
    else if (!sonLetrasSolamente($("#grupo").val())) {
        alert('Ingrese solo letras en el campo grupo');
        return false;
    }
  return true
}

function validarCursoActualizar(){
	if($("#actualizarNombre").val().trim() == "" || $("#actualizarNombre").val().trim() == null){
  	    alert('Ingrese en el campo nombre');
        return false;
    }
    else if (!sonLetrasSolamente($("#actualizarNombre").val())) {
        alert('Ingrese solo letras en el campo nombre');
        return false;
    }

    if($("#actualizarGrupo").val().trim() == '' ||$("#actualizarGrupo").val().trim() == null){
        alert('Ingrese el en el campo grupo');
        return false;
    }
    else if (!sonLetrasSolamente($("#actualizarGrupo").val())) {
        alert('Ingrese solo letras en el campo grupo');
        return false;
    }
  return true
}