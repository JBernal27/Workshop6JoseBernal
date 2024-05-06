const Q1 = document.getElementById("Q1")
const Q2 = document.getElementById("Q2")
const Q3 = document.getElementById("Q3")
const Q4 = document.getElementById("Q4")
const Q5 = document.getElementById("Q5")
const Q6 = document.getElementById("Q6")
const Q7 = document.getElementById("Q7")
const Q8 = document.getElementById("Q8")

const passQuestion = (dir) => {

    if(dir){
        actualQuestion<8 ? actualQuestion++ : actualQuestion
    }else{
        actualQuestion>1 ? actualQuestion-- : actualQuestion
    }

    actualQuestion == 1 ? Q1.style.display = 'flex' : Q1.style.display = 'none';
    actualQuestion == 2 ? Q2.style.display = 'flex' : Q2.style.display = 'none';
    actualQuestion == 3 ? Q3.style.display = 'flex' : Q3.style.display = 'none';
    actualQuestion == 4 ? Q4.style.display = 'flex' : Q4.style.display = 'none';
    actualQuestion == 5 ? Q5.style.display = 'flex' : Q5.style.display = 'none';
    actualQuestion == 6 ? Q6.style.display = 'flex' : Q6.style.display = 'none';
    actualQuestion == 7 ? Q7.style.display = 'flex' : Q7.style.display = 'none';
    actualQuestion == 8 ? Q8.style.display = 'flex' : Q8.style.display = 'none';   

}

let actualQuestion = 1
passQuestion()

const solve = document.getElementById("solve")
const next = document.getElementById("next-question")
const last = document.getElementById("last-question")


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
    
    const partOne = () => {
        switch(numberInput("Que crees que va mostrarse como resultado de imprimir 'a'\n 1. Error\n 2. Undefined\n 3. '1'")){
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
                return partOne()
        }
    }

    const partTwo = () => {
        switch(numberInput("Que crees que va mostrarse como resultado de imprimir 'b'\n 1. Error\n 2. Undefined\n 3. '2'")){
            case 1:
                impInf("Correcto, ya que esta variable declarada como let, es decir, que su hoisting hace que solo pueda ser llamada despues de su inicializacion")
            break;
    
            case 2:
                impInf("Incorrecto, ya que esta varibale esta iniciada como let, esto quiere decir que unicamente puede ser llamada despues de la inicializacion, como consecuente, no puede tener ningun valor, incluso 'undefined'")
            break;
    
            case 3:
                impInf("Incorrecto, ya que la variable no tiene un hoisting que la arrastre arriba por lo que al momento de llamarla no estara creada ademas de que el valor no estara asignado, ya que se inicializa junto con su creación")
            break;
    
            default:
                impErr("Ingrese una opcion valida")
                return partTwo()
        }
    }

    const partThree = () => {
        switch(numberInput("Que crees que va mostrarse como resultado de imprimir 'c'\n 1. Error\n 2. Undefined\n 3. '3'")){
            case 1:
                impInf("Correcto, ya que esta variable declarada como const, es decir, que su hoisting hace que solo pueda ser llamada despues de su inicializacion")
            break;
    
            case 2:
                impInf("Incorrecto, ya que esta varibale esta iniciada como const, esto quiere decir que unicamente puede ser llamada despues de la inicializacion, como consecuente, no puede tener ningun valor, incluso 'undefined'")
            break;
    
            case 3:
                impInf("Incorrecto, ya que la variable no tiene un hoisting que la arrastre arriba por lo que al momento de llamarla no estara creada ademas de que el valor no estara asignado, ya que se inicializa junto con su creación")
            break;
    
            default:
                impErr("Ingrese una opcion valida")
                return partThree()
        }
    }

    partOne()
    partTwo()
    partThree()

    if(confirm(`Crees que la funcion declarada se mostrara correctamente`)){
        impInf("Correcto, ya que las funciones declaradas son llevadas hacia arriba gracias al hoisting por lo que podran ser ejecutadas en cualquier parte del codigo")
    }else{
        impInf("Incorrecto, ya que las funciones declaradas son llevadas hacia arriba gracias al hoisting por lo que podran ser ejecutadas en cualquier parte del codigo")
    }

    if(confirm(`Crees que la funcion expresada se mostrara correctamente`)){
        impInf("Incorrecto, ya que a diferencia de las declaradas las funciones expresadas no tienen un hoisting que las lleve arriba, es decir, siguen el orden de la cascada y solo pueden ser llamadas despues de su declaracion")
    }else{
        impInf("Correcto, ya que a diferencia de las declaradas las funciones expresadas no tienen un hoisting que las lleve arriba, es decir, siguen el orden de la cascada y solo pueden ser llamadas despues de su declaracion")
    }

}

const Question3 = () => {

    if(confirm("Segun lo que observaste del codigo anterior, la linea:\n'const sumarCinco = crearSumador(5);'\n\n retorna '5'?")){
        impInf('Incorrecto, ya que como podemos ver lo que encontramos en el retorno de la funcion crearSumador es una funcion, es decir, que lo que se retornara es esa funcion como tal mas no su ejecucion')
    }else{
        impInf('Correcto, ya que como podemos ver lo que encontramos en el retorno de la funcion crearSumador es una funcion, es decir, que lo que se retornara es esa funcion como tal mas no su ejecucion')
    }

    if(confirm("Segun lo anterior, la linea:\n'const resultado = sumarCinco(3);'\n\nhara que '3' sea el valor de num?")){
        impInf("Incorrecto, ya que el valor asignado a sumarCinco es una funcion por lo que en la linea mencionada lo que se esta cambiando es el parametro de esa funcion, es decir, num1")
    }
    else{
        impInf("Correcto, ya que el valor asignado a sumarCinco es una funcion por lo que en la linea mencionada lo que se esta cambiando es el parametro de esa funcion, es decir, num1")
    }


}

const Question4 = () => {
    if(confirm("¿Qué sucede cuando intentamos llamar a 'funcionDeclarada' antes de su declaración? ¿Funcionara correctamente?")){
        impInf("Se ejecuta sin problemas porque las funciones declaradas tienen hoisting y se pueden llamar antes de su declaración.")
    }else{
        impInf("Incorrecto, en realidad se ejecuta sin problemas porque las funciones declaradas tienen hoisting y se pueden llamar antes de su declaración.")
    }
    
    if(confirm("¿Qué sucede cuando intentamos llamar a 'funcionExpresada' antes de su declaración? ¿Saldra error?")){
        impInf("Correcto, nos dará un error porque las funciones expresadas no tienen hoisting y no se pueden llamar antes de su declaración.")
    }else{
        impInf("Incorrecto, en realidad nos dará un error porque las funciones expresadas no tienen hoisting y no se pueden llamar antes de su declaración.")
    }
    
    if(confirm("¿Qué sucede cuando llamamos a 'funcionDeclarada' después de su declaración? ¿Saldra error?")){
        impInf("Incorrecto, en realidad se ejecuta sin problemas porque ya ha sido declarada.")
    }else{
        impInf("Correcto, se ejecuta sin problemas porque ya ha sido declarada.")
    }
    
    if(confirm("¿Qué sucede cuando llamamos a 'funcionExpresada' después de su declaración?¿Funcionara bien?")){
        impInf("Correcto, se ejecuta sin problemas porque ya ha sido declarada.")
    }else{
        impInf("Incorrecto, en realidad se ejecuta sin problemas porque ya ha sido declarada.")
    }
    
}

const Question5 = () => {
    if(confirm("¿Las promesas en JavaScrit se utilizan para manejar operacion asícrionas?")){
        impInf("Correcto, ya que estas son operaciones asincronas que sulen utilizarce para realizar procesos largos sin necesidad de detener el funcionamiento de todo el programa")
    }else{
        impInf("Incorrecto, ya que estas son operaciones asincronas que sulen utilizarce para realizar procesos largos sin necesidad de detener el funcionamiento de todo el programa")
    }

    if(confirm("¿Las promesas envian su respuesta por medio de un 'return'?")){
        impInf("Incorrecto, ya que estas envian su respuesta por medio de un 'resolve' o 'reject' para asi segun sea la opcion procesar la informacion enviada de una u otra forma")
    }else{
        impInf("Correcto, ya que estas envian su respuesta por medio de un 'resolve' o 'reject' para asi segun sea la opcion procesar la informacion enviada de una u otra forma")
    }
}

const Question6 = () => {

    const partOne = () => {
        switch(numberInput("Cual crees que sera el orden de impresion?\n 1. Inicio del script\n\tPromesa resuelta\n\tPrimer setTimeout\n\tSegundo setTimeout\n\tFin del script\n\n 2. Inicio del script\n\tFin del script\n\tPromesa resuelta\n\tPrimer setTimeout\n\tSegundo setTimeout\n\n 3. Inicio del script\n\tFin del script\n\tPrimer setTimeout\n\tSegundo setTimeout\n\tPromesa resuelta\n\n")){
            case 1:
                impInf("Incorrecto, esto ya que los console log son funciones sincronas por lo que van a ejecutarse primero, ya luego de esto se ejecutaran primero las micro tareas, en este caso la promesa, y por ultimo las macro tareas en este caso los setTimeout")
            break;
    
            case 2:
                impInf("Correcto, esto ya que los console log son funciones sincronas por lo que van a ejecutarse primero, ya luego de esto se ejecutaran primero las micro tareas, en este caso la promesa, y por ultimo las macro tareas en este caso los setTimeout")
            break;
    
            case 3:
                impInf("Incorrecto, esto ya que los console log son funciones sincronas por lo que van a ejecutarse primero, ya luego de esto se ejecutaran primero las micro tareas, en este caso la promesa, y por ultimo las macro tareas en este caso los setTimeout")
            break;
    
            default:
                impErr("Ingrese una opcion valida")
                return partOne()
        }
    }

    partOne()

}

const Question7 = () => {
    let timeToSet = numberInput("Ingresa el tiempo que quieres que tarde como maximo la solicitud de los datos")

    const url = "https://jsonplaceholder.typicode.com/posts"

    const loadData = () => {
        return promise = new Promise((resolve,reject) => {
            setTimeout( () =>{
                fetch(url)
                    .then(Response => {
                        if (!Response.ok) {
                            reject("Error al cargar los datos")
                        }
                        impInf("Datos cargados correctamente")
                        return Response.json()
                    })
                    .then(data => resolve(data))
                    .catch(message => impErr(message))
            },timeToSet*1000)
        })
    }

    loadData()
    .then((data) => {
        let index = numberInput("Ingrese el id del articulo que desea mostrar") - 1; 
        let articleToShow = data[index];
        if (articleToShow) { 
            impInf(`Titulo: ${articleToShow.title}\n Cuerpo: ${articleToShow.body}`)
        } else {
            impErr("El índice proporcionado no corresponde a ningún artículo.")
        }
    })
    .catch(menssage => impErr(menssage))
}

const Question8 = () => {
    window.location.href = "reservations.html";
}

const forSolve = () =>{
    switch(actualQuestion)
    {
        case 1:
            Question1()
        break
        case 2:
            Question2()
        break
        case 3:
            Question3()
        break
        case 4:
            Question4()
        break
        case 5:
            Question5()
        break
        case 6:
            Question6()
        break
        case 7:
            Question7()
        break;
        case 8:
            Question8()
        break;
    }
}

//Preguntas

document.getElementById

const start = () => {

		solve.addEventListener("click", forSolve)
        next.addEventListener("click", () => passQuestion(true))
        last.addEventListener("click", () => passQuestion(false))
}

window.addEventListener("load" , start())

/* // 5.1: Definir la función
function manejarAsincronia(callback, promesa) {
    // 5.2: Crear la Promesa
    promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promesa resuelta después de 2 segundos");
      }, 2000);
    });
  
    // Ejecutar el Callback una vez que la promesa se resuelva
    promesa.then((message) => {
      callback(message);
    });
  }
  
  // 5.3: Definir el callback
  let callback =  (message) => {
    console.log("¡Promesa cumplida y callback ejecutado! Mensaje: ", message);
  };
  
  // 5.4: Invocar la Función
  manejarAsincronia(callback); */