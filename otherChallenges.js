// Seccion 2 - Ejercicio 6

console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
    console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);

//Seccion 3 - Ejercicio 8
const counter = () => {
    let cont = 0
    const add = () => {
        alert(`El contador vale ${cont}`)
        if(confirm("Deseas aumentar el contador?")){
            cont++
            return true
        }else{
            return false
        }
    }
    return add
}

let myCounter = counter()

while(myCounter()){}

//Seccion 4 - Ejercicio 10
/* 
¿Qué tareas se consideran macrotareas y cuáles son microtareas?
R// en este caso se refiere a macro los timeout y a micro las promesas, pero en general se refiere a la "grandeza" de la tarea es decir si es algo que normalmente puede tomar mas tiempo o que necesita recursos extra

¿Cómo se relacionan las macrotareas y microtareas con el event loop?
R// La relacion de estas es ya que el orden de ejecucion dentro del event loop varia segun estas, ya que siempre se mostraran primero todas las micro y luego todas las macro

¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
R// Lo que sucede es que en el momento en el que se ejecute esa microtarea la macrotarea que tiene adentro pasara a la cola de macro tareas de forma normal y seguira el orden segun las macro tareas que hubiera anteriormente

¿Cómo se manejan las promesas y los setTimeout en relación con el event loop? 
R//Para el event loop las promesas se comportan como micro tarea al igual que las funciones que tenga al interior como then o catch, por el contrario los setTimeout son tomados como macrotareas es decir que en un caso dado en el que se deban ejecutar de manera simultanea se ejecutra primero la promesa y luego los time out
*/