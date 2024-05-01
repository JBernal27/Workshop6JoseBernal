const Q1 = document.getElementById("Q1")
const Q2 = document.getElementById("Q2")
    Q2.style.display = 'none'

const solve = document.getElementById("solve")
const next = document.getElementById("next-question")
const last = document.getElementById("last-question")
let actualQuesion = 1

//Funciones de proposito general

const textInput = (input) => {
    const userInput = prompt(input).trim()
    return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()
}

const numberInput = (msj, num = 0) => {
    while(true){
        num = Number(prompt(msj))
        if(typeof num === "number" && !Number.isNaN(num)){
            return num
        }else{
            impErr("Por favor ingrese un valor numerico")
        }
    }
}

const impErr = (input) => alert(`Error!\n${input}`)

const impInf = (input) => alert(input)

const nextQuestion = () => {
    switch(actualQuesion)
    {
        case 1:
            Q1.style.display = 'none'
            Q2.style.display = 'flex'
        break
    }
    actualQuesion<10 ? actualQuesion++ : actualQuesion
}

const lastQuestion = () => {
    switch(actualQuesion)
    {
        case 2:
            Q1.style.display = 'flex'
            Q2.style.display = 'none'
        break
    }
    actualQuesion>1 ? actualQuesion-- : actualQuesion
}

//Funciones de proposito general

//Preguntas

const Question1 = () => {

    if(confirm(`Crees que la variable "globalVariable" se mostrara correctamente`)){
        impInf("Correcto, Al ser una variable global, es decir, no creada dentro de ninguna otra funcion podremos hacer uso de ella desde cualquier parte del programa")
    }else{
        impInf("Incorrecto, Al ser una variable global, es decir, no creada dentro de ninguna otra funcion podremos hacer uso de ella desde cualquier parte del programa")
    }

    if(confirm(`Crees que la variable "functionVariable" se mostrara correctamente`)){
        impInf("Correcto, ya que aunque no tiene un scope global, se esta llamando dentro de la misma funcion donde fue declarada")
    }else{
        impInf("Incorrecto, esta variable si se muestra correctamente, ya que aunque no tiene un scope global, se esta llamando dentro de la misma funcion donde fue declarada")
    }

    if(confirm(`Crees que la variable "blockVariable" se mostrara correctamente`)){
        impInf("Correcto, ya que aunque no tiene un scope global, se esta llamando dentro de la el mismo contexto de bloque donde fue declarada")
    }else{
        impInf("Incorrecto, esta variable si se muestra correctamente, ya que aunque no tiene un scope global, se esta llamando dentro de la el mismo contexto de bloque donde fue declarada")
    }

}

const Question2 = () => {
    switch(numberInput("Que crees que va mostrarse como resultado de imprimir a\n 1. Error\n 2. Undefined\n 3. '1'")){
        case 1:
            impInf("Incorrecto, ya que esta variable esta iniciada como constante, es decir, que puede ser llamada desde cualquier parte del codigo, lo que mostrara es 'undefined' ya que es como se inicializan las constantes y como podemos ver la inicializacion se hizo por debajo de la impresion")
        break;

        case 2:
            impInf("Correcto, ya que al ser var la variable si existe desde que se ejecuta el programa pero al no estar inicializada aun se muestra 'undefined'")
        break;

        case 3:
            impInf("Incorrecto, ya que aunque la variable al ser var ya esta creada, es decir, existe; al momento de mostrarla un no ha sido inicializada, se inicializa lineas mas abajo donde si se le da el valor de '1'")
        break;

        default:
            impErr("Ingrese una opcion valida")
            return Question2()
    }

    switch(numberInput("Que crees que va mostrarse como resultado de imprimir b\n 1. Error\n 2. Undefined\n 3. '2'")){
        case 1:
            impInf("Incorrecto, ya que esta variable esta iniciada como constante, es decir, que puede ser llamada desde cualquier parte del codigo, lo que mostrara es 'undefined' ya que es como se inicializan las constantes y como podemos ver la inicializacion se hizo por debajo de la impresion")
        break;

        case 2:
            impInf("Correcto, ya que al ser var la variable si existe desde que se ejecuta el programa pero al no estar inicializada aun se muestra 'undefined'")
        break;

        case 3:
            impInf("Incorrecto, ya que aunque la variable al ser var ya esta creada, es decir, existe; al momento de mostrarla un no ha sido inicializada, se inicializa lineas mas abajo donde si se le da el valor de '1'")
        break;

        default:
            impErr("Ingrese una opcion valida")
            return Question2()
    }
}

const forSolve = () =>{
    switch(actualQuesion)
    {
        case 1:
            Question1()
        break
        case 2:
            Question2()
        break
    }
}

//Preguntas

document.getElementById

const start = () => {

		solve.addEventListener("click", forSolve)
        next.addEventListener("click", nextQuestion)
        last.addEventListener("click", lastQuestion)
}

window.addEventListener("load" , start())