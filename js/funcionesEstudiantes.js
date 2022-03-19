const URL= "http://127.0.0.1:8000/api/";

function cargarEstudiantes() {  
    $.ajax({
        headers: {
            'Authorization':'api-key-laika'
        },
        type: "GET",
        url: URL + "estudiantes",
        data: "data",
        dataType: "json",
        success: function (datos) {    
            let respuesta = document.querySelector("#respuesta");
            respuesta.innerHTML = "";
            for (let dato of datos) {
                respuesta.innerHTML += `
                <tr>
                <td >${dato.id} </td>
                <td >${dato.primer_nombre}  ${dato.segundo_nombre}  ${dato.primer_apellido} ${dato.segundo_apellido }</td >
                <td >${dato.telefono} </td>
                <td >${dato.direccion} </td>
                <td>${dato.correo}</td>
                <td>${dato.nombre+" "+dato.grupo}</td>
                <td>      
                <button id="btn-editar"  onclick="llenarDatosFormulario(${dato.id})"  type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#ModalActualizar">
                Editar
                </button>
                </td>
                <td>
                <button id=""class="btn btn-danger" onclick="EliminarEstudiante(${dato.id})">Eliminar</button>     
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

function ObtenerCursos(cod) {  
    $.ajax({
        headers: {
            'Authorization':'api-key-laika'
        },
        type: "GET",
        url: URL + "cursos",
        data: "data",
        dataType: "json",
        success: function (datos) {    
            console.log(datos)
            if (cod==1) {
                respuesta = document.querySelector("#selectCursos");
            } else {
                respuesta = document.querySelector("#actualizarselectCursos");
            }
            respuesta.innerHTML = "";
            for (let dato of datos) {
                respuesta.innerHTML += `
                <option value="${dato.id}">${dato.nombre + " " + dato.grupo}</option>
                `;
            }
        },error: function (e) {
            console.log(e.message);
        }   
    });
}

function agregarEstudiante(id,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,telefono,direccion,correo,curso) { 
    
    if (validarEstudiantes()) {
    let cadena = "id=" + id +
                 "&primer_nombre=" + primer_nombre +
                 "&segundo_nombre=" + segundo_nombre +
                 "&primer_apellido=" + primer_apellido +
                 "&segundo_apellido=" + segundo_apellido +
                 "&telefono=" + telefono +
                 "&direccion=" + direccion +
                 "&correo=" + correo +
                 "&curso_id=" + curso;
                 console.log(cadena)
    $.ajax({
        headers: {
            'Authorization':'api-key-laika'
        },
        type: "POST",
        url: URL + "estudiantes/guardar",
        data: cadena,
        success: function (respuesta) {
            console.log("Dato Guardado")
            cargarEstudiantes()
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
        url: URL + "estudiantes/buscar/"+id,
        data: "data",
        dataType: "json",
        success: function (array) {
            console.log(array[0])
            datos = array[0]
            ObtenerCursos(2)
            respuesta = document.querySelector("#modaLlenar");
            modaLlenar.innerHTML = "";
            console.log(datos.id)
            respuesta.innerHTML += `
            <div style="padding-bottom: 5px;" class="row g-3">
                 <div class="col-12">
                   <label for="identificacion" class="form-label">Identificacion</label>
                   <input type="number"  class="form-control" id="actualizaridentificacion" placeholder="Identificacion" value="${datos.id}" disabled>
                  </div>
                </div>
                <div style="padding-bottom: 5px;" class="row g-3">
                  <div class="col-6">
                    <label for="actualizarprimer_nombre" class="form-label">Primer Nombre</label>
                    <input type="text" class="form-control" id="actualizarprimer_nombre" placeholder="Primer Nombre" required value="${datos.primer_nombre}">
                  </div>
                  <div class="col-6">
                    <label for="actualizarsegundo_nombre" class="form-label">Segundo Apellido</label>
                    <input type="text" class="form-control" id="actualizarsegundo_nombre" placeholder="Segundo Apellido"  value="${datos.segundo_nombre}">
                  </div>
                </div>

                <div style="padding-bottom: 5px;" class="row g-3">
                  <div class="col-6">
                    <label for="actualizarprimer_apellido" class="form-label">Primer Apellido</label>
                    <input type="text" class="form-control" id="actualizarprimer_apellido" placeholder="Primer Apellido" required value="${datos.primer_apellido}">
                  </div>
                  <div class="col-6">
                    <label for="actualizarsegundo_apellido" class="form-label">Segundo Apellido</label>
                    <input type="text" class="form-control" id="actualizarsegundo_apellido" placeholder="Segundo Apellido"  value="${datos.segundo_apellido}">
                  </div>
                </div>

                <div style="padding-bottom: 5px;" class="row g-3">
                  <div class="col-6">
                    <label for="actualizartelefono" class="form-label">Telefono</label>
                    <input type="number" class="form-control" id="actualizartelefono" placeholder="Telefono" required value="${datos.telefono}">
                  </div>
                  <div class="col-6">
                    <label for="actualizartelefono" class="form-label">Cursos</label>
                    <select id="actualizarselectCursos" class="form-select" aria-label="Default select example">
                    
                    </select>
                  </div>
                </div>

                <div style="padding-bottom: 5px;" class="row g-3">
                  <div class="col-12">
                    <label for="actualizarcorreo" class="form-label">Correo</label>
                    <input type="text" class="form-control" id="actualizarcorreo" placeholder="Correo" required value="${datos.correo}">
                  </div>
                </div>

                <div  class="row g-3">
                <div class="col-12">
                  <label for="actualizardireccion" class="form-label">Direccion</label>
                  <input type="text" class="form-control" id="actualizardireccion" placeholder="Direccion" required value="${datos.direccion}">
                </div>
              </div>
            </div>
            `;
        },error: function (e) {
            console.log(e.message);
        }   
    });
  }


 function actualizarCurso(id,actualizarprimer_nombre, actualizarsegundo_nombre,actualizarprimer_apellido, actualizarsegundo_apellido,actualizartelefono, actualizardireccion,actualizarcorreo, actualizarcurso) { 
    if (validarEstudiantesActualizar()) {
        let cadena = "id=" + id +
                    "&primer_nombre=" + actualizarprimer_nombre +
                    "&segundo_nombre=" + actualizarsegundo_nombre +
                    "&primer_apellido=" + actualizarprimer_apellido +
                    "&segundo_apellido=" + actualizarsegundo_apellido +
                    "&telefono=" + actualizartelefono +
                    "&direccion=" + actualizardireccion +
                    "&correo=" + actualizarcorreo +
                    "&curso_id=" + actualizarcurso;
                    console.log(cadena)
        $.ajax({
            headers: {
                'Authorization':'api-key-laika'
            },
            type: "PUT",
            url: URL + "estudiantes/actualizar/"+id,
            data: cadena,
            success: function (respuesta) {
                console.log("Dato Guardado")
                cargarEstudiantes()
            },error: function (e) {
                console.log("Dato No Guardado")
                console.log(e.message);
            }   
        });   
    }          
 }

 function EliminarEstudiante(id) { 
    $.ajax({
        headers: {
            'Authorization':'api-key-laika'
        },
        type: "DELETE",
        url: URL + "estudiantes/eliminar/"+id,
        data: id,
        success: function (respuesta) {
            console.log("Dato Guardado")
            cargarEstudiantes()
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
