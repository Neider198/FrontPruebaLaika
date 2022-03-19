function validarEstudiantes(){
	if($("#identificacion").val().trim() == "" || $("#identificacion").val().trim() == null){
        alert('Ingrese la identificacion.');
      return false;
    }

    if($("#primer_nombre").val().trim() == "" || $("#primer_nombre").val().trim() == null){
  	    alert('Ingrese el primer_nombre.');
        return false;
    }
    else if (!sonLetrasSolamente($("#primer_nombre").val())) {
        alert('Ingrese solo letras en el campo primer_nombre');
        return false;
    }

    if ($("#segundo_nombre").val().trim() != "") {
         if (!sonLetrasSolamente($("#segundo_nombre").val())) {
        alert('Ingrese solo letras en el campo segundo_nombre');
        return false;
        }
    }

    if($("#primer_apellido").val().trim() == "" || $("#primer_apellido").val().trim() == null){
        alert('Ingrese el primer_apellido.');
      return false;
    }
    else if (!sonLetrasSolamente($("#primer_apellido").val())) {
         alert('Ingrese solo letras en el campo primer_apellido');
        return false;
    }


    if ($("#segundo_apellido").val().trim() != "") {
        if (!sonLetrasSolamente($("#segundo_apellido").val())) {
       alert('Ingrese solo letras en el campo segundo_apellido');
       return false;
       }
   }

    if($("#telefono").val().trim() == "" || $("#telefono").val().trim() == null){
        alert('Ingrese la telefono.');
      return false;
    }

    if($("#selectCursos").val().trim() == "" || $("#selectCursos").val().trim() == null){
        alert('selecione el curso.');
      return false;
    }

    if($("#direccion").val().trim() == "" || $("#direccion").val().trim() == null){
        alert('Ingrese el direccion.');
      return false;
    }
    

    if($("#correo").val().trim() == "" || $("#correo").val().trim() == null){
        alert('Ingrese el correo.');
      return false;
    }

  return true
}



function validarEstudiantesActualizar(){
	
    if($("#actualizarprimer_nombre").val().trim() == "" || $("#actualizarprimer_nombre").val().trim() == null){
  	    alert('Ingrese el primer_nombre.');
        return false;
    }
    else if (!sonLetrasSolamente($("#actualizarprimer_nombre").val())) {
        alert('Ingrese solo letras en el campo primer_nombre');
        return false;
    }

    if ($("#actualizarsegundo_nombre").val().trim() != "") {
         if (!sonLetrasSolamente($("#actualizarsegundo_nombre").val())) {
        alert('Ingrese solo letras en el campo segundo_nombre');
        return false;
        }
    }

    if($("#actualizarprimer_apellido").val().trim() == "" || $("#actualizarprimer_apellido").val().trim() == null){
        alert('Ingrese el primer_apellido.');
      return false;
    }
    else if (!sonLetrasSolamente($("#actualizarprimer_apellido").val())) {
         alert('Ingrese solo letras en el campo primer_apellido');
        return false;
    }


    if ($("#actualizarsegundo_apellido").val().trim() != "") {
        if (!sonLetrasSolamente($("#actualizarsegundo_apellido").val())) {
       alert('Ingrese solo letras en el campo segundo_apellido');
       return false;
       }
   }

    if($("#actualizartelefono").val().trim() == "" || $("#actualizartelefono").val().trim() == null){
        alert('Ingrese la telefono.');
      return false;
    }

    if($("#actualizarselectCursos").val().trim() == "" || $("#actualizarselectCursos").val().trim() == null){
        alert('selecione el curso.');
      return false;
    }

    if($("#actualizardireccion").val().trim() == "" || $("#actualizardireccion").val().trim() == null){
        alert('Ingrese el direccion.');
      return false;
    }
    

    if($("#actualizarcorreo").val().trim() == "" || $("#actualizarcorreo").val().trim() == null){
        alert('Ingrese el correo.');
      return false;
    }

  return true
}
