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
        //mostrarError("Todos los campos son obligatorios");
        mostrarResultForm("Todos los campos son obligatorios", false);
        
        return; //Return corta la ejecución del codigo
    }

    //ENVIAR FORMULARIO
    //mostrarExito("Formulario enviado");
    mostrarResultForm("Todos los campos son obligatorios", true);
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
    mostrarError.classList.add("formularioError");
    formulario.appendChild(mostrarError);
    console.log(mostrarError);

    setTimeout(() => {
        mostrarError.remove();
    }, 5000);
}
function mostrarExito(mensaje) {
    const mostrarExito = document.createElement("P");
    mostrarExito.textContent = mensaje;
    mostrarExito.classList.add("formularioExito")
    formulario.appendChild(mostrarExito);
    console.log(mostrarExito);

    setTimeout(() => {
        mostrarExito.remove();
    }, 5000);
}


//La siguiente funcion junta las dos anteriores (refactorizar)
function mostrarResultForm(mensaje, estado){
    //Para juntar las dos funciones, se le pasara un estado booleano que asigne la alerta correspondiente
    let clase = "";
    switch (estado) {
        case true:
            clase = "formularioExito";
            break;
        case false:
            clase = "formularioError";
            break;
        default:
            break;
    }


    const mostrarAlerta = document.createElement("P");
    mostrarAlerta.textContent = mensaje;
    mostrarAlerta.classList.add(clase);
    formulario.appendChild(mostrarAlerta);
    console.log(mostrarAlerta);

    setTimeout(() => {
        mostrarAlerta.remove();
    }, 5000);
}