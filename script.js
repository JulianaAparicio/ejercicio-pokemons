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

    //console.log(pokemonData.stats);

    agregarColorBarra("hp", order, obtenerStats(pokemonData, "hp"));
    agregarColorBarra("ataque", order, obtenerStats(pokemonData, "ataque"));
    agregarColorBarra("defensa", order, obtenerStats(pokemonData, "defensa"));
    agregarColorBarra("velocidad", order, obtenerStats(pokemonData, "velocidad"));
}

// Retorna la cantidad del stats según el nombre del mismo:
function obtenerStats(data, tipo) {
    return data.stats.find(element => {
        if (element.name === tipo)
            return element;
    }).amount;
}

// Esta funcion recibe el nombre del stat, el orden del pokemon y el puntaje correspondiente:
function agregarColorBarra(tipoStat, order, puntos) {
    // Seleccionamos la barra
    const barra = document.querySelector(`#barra-${tipoStat}-${order}`);
    // Inicializamos el progreso en 0, para asegurarnos
    // que siempre arranque desde el principio
    let width = 0;
    const tiempoCarga = 2000;
    // Calculamos el progreso en base al tiempo total de carga
    const progresoCarga = tiempoCarga / 100;
    let intervalo = setInterval(aumentarProgreso, progresoCarga);

    function aumentarProgreso() {
        // Si el progreso esta completo, detenemos el programa:
        if (width >= puntos) {
            clearInterval(intervalo);
            // Sino le agregamos la clase que corresponda:
        } else {
            if (width < 35) {
                barra.classList.add("rojo");
                barra.classList.remove("amarillo");
                barra.classList.remove("verde");
            } else if (width <= 70) {
                barra.classList.add("amarillo");
                barra.classList.remove("rojo");
                barra.classList.remove("verde");
            } else {
                barra.classList.add("verde");
                barra.classList.remove("amarillo");
                barra.classList.remove("rojo");
            }
            width++;
        }
        // Modificamos el DOM, para impactar el nuevo progreso:
        barra.style.width = width + "%";
    }
}



//LISTADO DE POKEMONS - PUEDES CAMBIAR POR TU FAVORITO!
const pokemons = ["meowth", "arcanine", "charizard", "aerodactyl", "mewtwo", "scyther", "growlithe", "jolteon", "charmeleon", "magmar", "dragonite", "ninetales"];

//INICIALIZADOR - NO TOCAR
pokemons.forEach((pokemon, index) => {
    const pokemonNumber = index + 1;
    createPokemonCard(pokemon, pokemonNumber);
    fillPokemonData(pokemon, pokemonNumber);
});