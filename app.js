// El principal objuetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    // Se usa document.getElementById().value para extraer el valor de la caja Input usando el Id asignado en el documento HTML.
    // let inputAmigo = document.getElementById('amigo');
    // let valorAmigo = inputAmigo.value;

    let nombre = document.querySelector('#amigo').value;
    console.log(nombre);

    // Verifica si el nombre está vacío
    if(nombre == ""){
        alert ("Por favor, inserte un nombre.");
        return;
    }

    // Expresión regular: solo letras y espacios
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)){
        alert("El nombre solo debe contener letras y espacios.");
        limpiarCaja();
        return;
    }

    //En caso de que la entrada de texto sea validada como correcta, se procede a guardarla en el array listaAmigos.
    listaAmigos.push(nombre);
    limpiarCaja();
    console.log(listaAmigos);

    let lista = document.getElementById('listaAmigos');
    
    //Crea un nuevo elemento <li>
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    
    //Agrega el <li> a la <ul>
    lista.appendChild(nuevoElemento);
    
}

//console.log(agregarAmigo.toString());

function limpiarCaja () {
    document.querySelector('#amigo').value = '';
}
