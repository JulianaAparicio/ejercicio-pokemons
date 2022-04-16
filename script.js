async function fillPokemonData(name, order) {
    //NO TOCAR - ESTA VARIABLE CONTIENE LA INFORMACIÓN SOBRE LOS POKEMONS,
    // QUE USARÁS PARA COMPLETAR LAS ACTIVIDADES
    const pokemonData = await getPokemonData(name);

    //Actividades

    // 1) Insertar la imagen del pokemon dentro cada card. Para ello,
    // puedes explorar los elementos HTML utilizando las Dev Tools de tu
    // navegador.

    const pokemonCards = document.querySelector(`#imagen-pokemon-${order}`);
    pokemonCards.src = pokemonData.imagen;


    // 2) Utilizando los stats de cada pokemon, deberás rellenar cada una de las
    // barras que figuran en la card. Dependiendo de la cantidad de cada atributo
    // tendrás que decidir el color que tendrá la barra en cada caso:
    // Si la habilidad es menor a 35, la barra será de color rojo
    // Si la habilidad es mayor o igual a 35 pero menor que 70, la barra será amarilla
    // Si la habilidad es igual o mayor a 70, la barra será de color verde.
    // Deberás utilizar las clases que se encuentran en el archivo styles.css

    //ESCRIBE TU CÓDIGO A CONTINUACIÓN DENTRO DE LA FUNCIÓN:

    // Ver que contiene
    //console.log(pokemonData.stats);

    // Seleccionamos la barra
    pokemonData.stats.forEach((stat) => {
        const barra = document.querySelector(`#barra-${stat.name}-${order}`);

        // se rellena según el valor del stat
        barra.style.width = `${stat.amount}%`;

        if (stat.amount < 35) {
            barra.classList.add("rojo");
        } else if (stat.amount < 70) {
            barra.classList.add("amarillo");
        } else {
            barra.classList.add("verde");
        }
    });
}


//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["meowth", "arcanine", "charizard", "aerodactyl", "mewtwo", "scyther", "growlithe", "jolteon", "charmeleon", "magmar", "dragonite", "ninetales"];

//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
    const pokemonNumber = index + 1;
    createPokemonCard(pokemon, pokemonNumber);
    fillPokemonData(pokemon, pokemonNumber);
});


// EJERCICIO  DE PLAYGROUND

//Como continuación del ejercicio del módulo anterior, (Barra de progreso) vamos a utilizar un loader 
//que sea visible solamente hasta que la información de las cards de los pokémones haya sido cargada:

//HTML: Crear un div con id “contenedor-carga” y, dentro de él, otro div con id “carga” justo después del header.
//¡No modificar el CSS!
//JS: en el caso de que la carga ocurriera demasiado rápido, utilizar settimeout para que simule su retraso.

/* const header = document.querySelector('header');

setTimeout(function() {
    header.innerHTML += `<!-- contenedor de carga -->
    <div id="contenedor-carga">
        <div id="carga"></div>
    </div>`;
}, 5000); */

/* const spinner = document.getElementById('contenedor-carga')

spinner.width = 36;
spinner.height = 36; */