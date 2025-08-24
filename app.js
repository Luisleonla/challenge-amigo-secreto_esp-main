// El principal objuetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let listaResultado = document.getElementById('resultado');

estadoInicial();

//Creación de la función que agregará cada amigo nuevo al arrayAmigos y a la lista que se mostrará en nuestro documento HTML.
function agregarAmigo() {
    //Se extrae el nombre ingresado por el usuario
    let nombre = document.querySelector('#amigo').value;
    
    // Verifica que la entrada no sea una valor vacío.
    // Excluye valores que tengan numeros o caracteres especiales.
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)){
        alert("Verifique que la entrada sea correcta.\n•NO agregar un valor vacío.\n•Solo se permiten letras, espacios y acentos.");
        estadoInicial();
        return;
    }

    //Cuando la entrada sea validada como correcta, se guarda en la variable arrayAmigos.
    arrayAmigos.push(nombre);
    estadoInicial();
    
    // Limpia las listas "listaAmigos" y "listaResultados" para evitar resultados duplicados.
    limpiarListaHTML(listaAmigos);
    limpiarListaHTML(listaResultado); 

    //Iteramos la lectura de los elementos del arrayAmigos para agragarlos uno por uno a la lista HTML de amigos.
    for (let i = 0; i < arrayAmigos.length; i++) {        
        crearElementoLista(arrayAmigos[i], listaAmigos);
    }   
}

//Función que escogerá un amigo aleatoriamente de entre la lista de amigos dada. Mostrará en pantalla el amigo elegido y reiniciará las variables.
function sortearAmigo() {
    //Condición que descartará el comando de sortear amigo cuando la lista no cumpla con al menos 2 elementos.
    if(arrayAmigos.length < 2) {
        alert("Debe ingresar al menos 2 amigos.")
        estadoInicial();
    }else{
        //Cuando existan el mínimo de elementos necesarios para ser sorteados, se realizará la selección aleatoria y será mostrada en pantalla 
        estadoInicial();
        let indexAmigo = Math.floor(Math.random() * arrayAmigos.length);
        crearElementoLista(arrayAmigos[indexAmigo], listaResultado);
        limpiarListaHTML(listaAmigos);
        arrayAmigos = [];
        console.log(indexAmigo);
    }
}

function estadoInicial() {
    document.querySelector('#amigo').value = '';
    //Adicionalmente agregamos un comando para posiciar el cursor nuevamente en la caja input para que la entrada de datos sea mas fácil para el usuario.
    document.querySelector('#amigo').focus();
}

function limpiarListaHTML(listaHTML) {
    listaHTML.innerHTML = '';
}

function crearElementoLista(nombre, listaHTML) {    
    //Crea un nuevo elemento <li>
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    //Agrega el <li> a la <ul>
    listaHTML.appendChild(nuevoElemento);
}
