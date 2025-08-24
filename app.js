// El principal objuetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let listaResultado = document.getElementById('resultado');

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
    arrayAmigos.push(nombre);
    limpiarCaja();
    console.log(arrayAmigos);

    //limpiarListaHTML(listaAmigos);
    limpiarListaHTML(listaResultado); // Limpia la lista antes de volver a llenarla

    // let lista = document.getElementById('listaAmigos');
    
    //Crea un nuevo elemento <li>
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    
    //Agrega el <li> a la <ul>
    listaAmigos.appendChild(nuevoElemento);

   
    // for (let i = 0; i < arrayAmigos.length; i++) {        
    //     crearElementoLista(arrayAmigos[i], listaAmigos);
    // }

    
    
}

function sortearAmigo() {
    if(arrayAmigos.length < 2) {
        alert("Debe ingresar al menos 2 amigos.")
    }else{
        
        let indexAmigo = Math.floor(Math.random() * arrayAmigos.length);
        limpiarListaHTML(listaResultado);
        crearElementoLista(arrayAmigos[indexAmigo], listaResultado);
        limpiarListaHTML(listaAmigos);
        arrayAmigos = [];
        console.log(indexAmigo);
    }
}



function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function limpiarListaHTML(listaHTML) {
    listaHTML.innerHTML = '';
}

function crearElementoLista(nombre, listaHTML) {6    
    //Crea un nuevo elemento <li>
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    //Agrega el <li> a la <ul>
    listaHTML.appendChild(nuevoElemento);
}
