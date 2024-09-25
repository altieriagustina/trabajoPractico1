// ### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

// Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. 
// Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de 
// `Sabor`, `Presentación` y `Dificultad` para cada torta. Al final, debes determinar qué torta 
// tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate 
// (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, 
// solo basta con indicar que se produjo empate si al menos existe uno).

// ## Funciones a implementar:

// calcularPuntaje(sabor, presentacion, dificultad):
// Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta 
// y devuelve la suma de esos números (el puntaje total del pastel).

// determinarGanador():
// Utiliza la librería readline-sync para pedir al usuario el número de participantes, 
// luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para 
// determinar la torta con el mayor puntaje.


import * as rs from "readline-sync"

console.log("¡Gran Concurso de Tortas de Tres Arroyos! 🎂" + "\n");

let cantidadParticipantes: number = rs.questionInt("Ingrese cantidad de participantes: ");
let sabor: number;
let presentacion: number;
let dificultad: number;

//Funcion de calcular puntaje
let calcularPuntaje = (sabor: number, presentacion: number, dificultad: number): number => {

    return sabor + presentacion + dificultad;
}

//Ciclo for y while para pedir puntos entre 1 y 5 por categoría por cantidad de participantes

for (let i: number = 1; i <= cantidadParticipantes; i++) {

    console.log("--> Participante Numero " + i);
    
    sabor = rs.questionInt("Ingrese puntos obtenidos sabor: ");
    presentacion = rs.questionInt("Ingrese puntos obtenidos por presentacion: ");
    dificultad = rs.questionInt("Ingrese puntos obtenidos por dificultad: ");

    while ((sabor < 0) || (sabor > 5) || (presentacion < 0) || (presentacion > 5) || (dificultad < 0) || (dificultad > 5)) {

        console.log("Ingrese puntajes entre 1 y 5");
        
        sabor = rs.questionInt("Ingrese puntos obtenidos por sabor: ");
        presentacion = rs.questionInt("Ingrese puntos obtenidos por presentacion: ");
        dificultad = rs.questionInt("Ingrese puntos obtenidos por presentacion: ");

    }

    console.log("Su puntaje total es: " + calcularPuntaje(sabor, presentacion, dificultad) + "\n");

}

// Función para determinar GANADOR (no logré resolverlo, creo que podría ser con un ciclo for)

let determinarGanador = (participantes: number, puntajes: number) : number => {

    cantidadParticipantes = rs.questionInt("Ingrese cantidad de participantes: ");

    return 0
}