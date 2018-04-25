//function(){
    //Accedemos a todo el formulario por medio de su id
var formulario = document.getElementById('formulario'),
    //Ya que accedimos al formulario, a través de el podemos acceder a sus elementos por medio de su name
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error');
//Esta funcion valida que no este vacio el nombre
function validarNombre(e) {
    if (nombre.value == '' || nombre.value == null) {
        console.log('Por favor completa el nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor completa el nombre</li>'
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}
//Esta funcion valida que no este vacio el correo
function validarCorreo(e) {
    //Evita que se envien valores nulos
    if (correo.value == '' || correo.value == null) {
        //Imprime en la consola
        console.log('Por favor ingresa un correo');
        //Cambia los estilos del elemento error si los datos se envian vacios
        error.style.display = 'block';
        //Se modifica el contenido HTML del elemento error
        error.innerHTML += '<li>Por favor ingresa un correo</li>'
        //Evita que la página se envie varias ocasiones
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}
//Esta funcion valida que no este vacio el sexo
function validarSexo(e) {
    if (sexo.value == '' || sexo.value == null) {
        console.log('Selecciona tu sexo');
        error.style.display = 'block';
        error.innerHTML += '<li>Elige tu sexo</li>'
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}
//Esta funcion valida que se hayan aceptado los terminos
function validarTerminos(e) {
    if (terminos.checked == false) {
        console.log('Debes aceptar los terminos y condiciones');
        error.style.display = 'block';
        error.innerHTML += '<li>Tienes que aceptar los terminos y condiciones</li>'
        e.preventDefault();
    } else {
        error.style.display = 'none';
    }
}
//Esta funcion manda llamad a las 4 funciones anteriores
function validarFormulario(e) {
    error.innerHTML = '';
    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
}
//Se ejecutala funcion anterior con el evento submit cada que se presione el botón del formulario
formulario.addEventListener('submit', validarFormulario);
//}())