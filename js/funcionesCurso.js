const URL= "http://127.0.0.1:8000/api/";

function cargarCursos() {  
    $.ajax({
        headers: {
            'Authorization':'api-key-laika'
        },
        type: "GET",
        url: URL + "cursos",
        data: "data",
        dataType: "json",
        success: function (datos) {    
            let respuesta = document.querySelector("#respuesta");
            respuesta.innerHTML = "";
            for (let dato of datos) {
                respuesta.innerHTML += `
                <tr>
                <td >${dato.id} </td>
                <td>${dato.nombre}</td>
                <td>${dato.grupo}</td>
                <td>      
                <button id="btn-editar" onclick="llenarDatosFormulario(${dato.id})" type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#ModalActualizar">
                Editar
                </button>
                </td>
                <td>
                <button id="" class="btn btn-danger" onclick="EliminarCurso(${dato.id})">Eliminar</button>     
                </td>
                </tr>
                `;
            console.log(datos)
            }
        },error: function (e) {
            console.log(e.message);
        }   
    });
}

function agregarCurso(nombre, grupo) { 
    
    if (validarCurso()) {
    let cadena = "nombre=" + nombre +
                 "&grupo=" + grupo;
    $.ajax({
        headers: {
            'Authorization':'api-key-laika'
        },
        type: "POST",
        url: URL + "cursos/guardar",
        data: cadena,
        success: function (respuesta) {
            console.log("Dato Guardado")
            cargarCursos()
        },error: function (e) {
            console.log("Dato No Guardado")
            console.log(e.message);
        }   
    });   
    }          
 }

 function llenarDatosFormulario(id) { 
    $.ajax({
        headers: {
            'Authorization':'api-key-laika'
        },
        type: "GET",
        url: URL + "cursos/buscar/"+id,
        data: "data",
        dataType: "json",
        success: function (datos) {
            console.log(datos)
            let respuesta = document.querySelector("#modaLlenar");
            modaLlenar.innerHTML = "";
            console.log(datos.nombre)
            respuesta.innerHTML += `
            <div class="mb-3">
                <input type="hidden" class="form-control" id="idCurso" value="${datos.id}">
                <label for="actualizarNombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="actualizarNombre" value="${datos.nombre}">
              </div>
              <div class="mb-3">
                <label for="actualizarGrupo" class="form-label">Grupo</label>
                <input type="text" class="form-control" id="actualizarGrupo" value="${datos.grupo}">
              </div>
            `;
        },error: function (e) {
            console.log(e.message);
        }   
    });
  }


 function actualizarCurso(actualizarNombre, actualizarGrupo,id) { 
    if (validarCursoActualizar()) {
        let cadena = "nombre=" + actualizarNombre +
                    "&grupo=" + actualizarGrupo;
                    console.log(cadena)
        $.ajax({
            headers: {
                'Authorization':'api-key-laika'
            },
            type: "PUT",
            url: URL + "cursos/actualizar/"+id,
            data: cadena,
            success: function (respuesta) {
                console.log("Dato Guardado")
                cargarCursos()
            },error: function (e) {
                console.log("Dato No Guardado")
                console.log(e.message);
            }   
        });   
    }          
 }

 function EliminarCurso(id) { 
    $.ajax({
        headers: {
            'Authorization':'api-key-laika'
        },
        type: "DELETE",
        url: URL + "cursos/eliminar/"+id,
        data: id,
        success: function (respuesta) {
            console.log("Dato Guardado")
            cargarCursos()
        },error: function (e) {
            console.log("Dato No Guardado")
            console.log(e.message);
        }   
    });             
 }

 

function sonLetrasSolamente(texto) {
    var regex = /^[a-zA-Z ]+$/;
    return regex.test(texto);
  }