console.log("Script cargado");

/* FORMAS DE SELECCIONAR ELEMENTOS */

/*querySelector*/
//a esta funcion le puedo pasar por argumento algun selector CSS, devuleve SOLO el primer elemento
const header = document.querySelector(".header-texto h2");
console.log(header);


//Implicitamente tiene un monton de metodos para modificar su contenido y propiedades
header.textContent="Texto modificado por JS";
header.classList="NUEVA_CLASE";




/*querySelectorAll*/
const enlaces = document.querySelectorAll("footer a");
enlaces[2].textContent = "Enlace modificado";
console.log(enlaces);



//getElementById, esta ya no es tan común como los dos anteriores
const texto = document.getElementById("PruebaID_JS");
console.log(texto);













/* INSERTAR ELEMENTOS A HTML */
const nuevoLink = document.createElement("A");    //JS recomienda pasar el atributo en MAYUS

//modificar atributos del elemento
nuevoLink.textContent = "Link Insertado";
nuevoLink.href = "contacto.html";
nuevoLink.classList.add("navegacion__enlace");

console.log(nuevoLink);

//insertar elemento
const navegacionLinks = document.querySelector("footer nav");
console.log(navegacionLinks);  
navegacionLinks.appendChild(nuevoLink);














/* EVENTOS */

window.addEventListener("load", function(){
    console.log("load espera a cargar TODA la pag web (HTML,CSS,SCRIPTS)");
})

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOMContentLoaded espera solo a cargar el HTML");
})





/* CAPTURAR EVENTOS */
//Por norma general, lo que haria el JS es recoger los archivos y enviarlos a un servidor
//para ser procesado por un lenguaje backend, pero en este caso no existe, entonces para evitar
//que me recargue la pagina y voy a prevenir su comportamiento normal.
const botonEnviar = document.querySelector(".boton--contacto");
botonEnviar.addEventListener("click", function(evento) {

    evento.preventDefault(); //<--- Puede ser util para validar un formulario antes de enviarlo
    //console.log("Enviando datos del formulario");

    //Podemos imprimir lo que captura el evento
    //console.log(evento);

})





/* EVENTOS EN INPUTS Y TEXTAREA 
//para consultar todos los eventos posibles: https://www.w3schools.com/jsref/dom_obj_event.asp



const formNombre = document.querySelector("#nombre");
const formEmail = document.querySelector("#email");
const formMensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");
const objetoForm = {
    nombre: '',
    email: '',
    mensaje: ''
}


formNombre.addEventListener("input", leerTexto);
formEmail.addEventListener("input", leerTexto);
formMensaje.addEventListener("input", leerTexto);

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    
    
    //VALIDAR FORMULARIO
    //Usando la deconstruccion de objetos
    const { nombre, email, mensaje }= objetoForm;
    
    if(nombre ==='' || email ==='' || mensaje ===''){
        console.log("Entro en el if");
        mostrarError("Todos los campos son obligatorios");
        
        return; //Return corta la ejecución del codigo
    }

    //ENVIAR FORMULARIO
    console.log("Formulario enviado");
})



function leerTexto(evento) {
    //Vamos a meter toda la info de inputs dentro de un objeto
    //Los ids tiene que corresponder con los atributos del objeto
    objetoForm[evento.target.id] = evento.target.value;
    //console.log(objetoForm);
    
}

function mostrarError(mensaje){
    const mostrarError = document.createElement("P");
    mostrarError.textContent = mensaje;
    mostrarError.classList.add("error");
    formulario.appendChild(mostrarError);
    console.log(mostrarError);
}

*/
