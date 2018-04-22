//Accedemos al elemento por su tag HTML
var cajas = document.getElementsByTagName('div');
//Cambiar el contenido de un elemento
cajas[0].textContent = 'Hola Mundo';
cajas[0].innerHTML = '<b>Hola</b>'

//Acceder al elemento por su nombre de clase
var cajas2 = document.getElementsByClassName('caja');

//Obtener el elemento por id
var caja1 = document.getElementById('caja1');
caja1.innerText = '#MPLVT';

//-----AGREGAR ELEMENTOS AL DOM
//1.- Creando el div
var nuevo = document.createElement('div');
//2.- Creando el texto
var texto = document.createTextNode('Hola Mundo');
//3.- Juntar las partes: Poner el texto dentro del div. Indicamos que el elemento padre es 'nuevo' y el hijo es 'texto'
nuevo.appendChild(texto);
//4.- Definir sus atributos
nuevo.setAttribute('class', 'caja naranja');
//5.- Posicionarlo en el documento
var contenedor = document.getElementById('contenedor');
contenedor.appendChild(nuevo);

//MODIFICANDO ELEMENTOS DEL DOM
//Modificando el ID
nuevo.id = 'primero';
//Modificando la clase
nuevo.className = 'caja';

//Conocer el elemento padre de un elemento
var padre = cajas[0].parentNode;
//Indicamos que queremos insertar el elemento nuevo antes del elemento con el id caja1
padre.insertBefore(nuevo, caja1);
//O bien podemos hacer lo siguiente
//padre.insertBefore(nuevo, cajas[2]);

//REEMPLAZANDO ELEMENTOS DEL DOM
//Como primer parámetro se agrega el nuevo elemento y en segundo lugar el elemento a remplazar
padre.replaceChild(nuevo, cajas[3]);

//ELIMINANDO NODOS DEL DOM
//Se pasa como parámetro el elemento a eliminar
padre.removeChild(cajas[1]);