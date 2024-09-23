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

// *Si lo consideran necesario, pueden implementar funciones extra.

import * as rs from "readline-sync";

let cantidadParticipantes: number = rs.questionInt("Ingrese cantidad de participantes: ");
let puntos : number;
let sabor: number = rs.questionInt("Ingrese puntos obtenidos en sabor entre 1 y 5: ") // Falta rango: sabor >= 1 || sabor <= 5
let presentacion: number = rs.questionInt("Ingrese puntos obtenidos en presentacion entre 1 y 5: "); // Falta rango: presentacion >= 1 || presentacion <= 5
let dificultad: number = rs.questionInt("Ingrese puntos obteni dos en dificultad entre 1 y 5: "); // Falta rango: dificultad >= 1 || dificultad <= 5


//Pide puntos para cantidad de participantes OK

for (let i : number = 1; i < cantidadParticipantes; i++) {
    sabor = rs.questionInt("Ingrese puntos obtenidos en sabor entre 1 y 5: "); 
     presentacion = rs.questionInt("Ingrese puntos obtenidos en presentacion entre 1 y 5: "); 
     dificultad = rs.questionInt("Ingrese puntos obteni dos en dificultad entre 1 y 5: "); 
    sabor++
    presentacion++
    dificultad++
}    

//Funcion que calcula TOTAL 

let calcularPuntaje = (sabor: number, presentacion: number, dificultad: number): number => {
    
    return sabor + presentacion + dificultad;
}

// Funcion de total asignada a una variable
// let total : number = calcularPuntaje(sabor, presentacion, dificultad);


// Determinar Ganador:
let determinarGanador = (participantes: number, puntiaciones: number): number => {
    
    
    return 0
}



    


