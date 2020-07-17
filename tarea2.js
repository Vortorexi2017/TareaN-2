/* // TAREA: Tenemos 2 funciones de la tarea anterior -- 'sumar' y 'restar'
//      Vamos a decirle a la máquina qué función tiene que correr,
//      dependiendo del operador artmético (+, -, /, *, etc.)
//
//      Si el (IF) operador es '+', vamos a usar la función para sumar.
//      Si no (ELSE), vamos a usar la función para restar.
//
// Paso 1 - Crear una variable llamada 'operador' y asignarle el valor '+'.
// Paso 2 - Crear 2 variables que contengan 2 números cualquiera.
// Paso 3 - Crear una condición if/else basada en el operador que tenemos.
//
// Si (if) tenemos un operador igual a '+', llamamos (ejecutamos. sumar(1,2)) la función
// 'sumar' con nuestros números (las variables del paso 2).
// Si no (else), tenemos que llamar la función 'restar', con nuestros números (las variables del paso 2).
//
// No se olviden de hacer un console.log para ver el resultado!
//

// TAREA: Cambiar el operador a '-', y fijarse que llame a la función 'restar' en vez de a la de 'sumar'.*/

document.querySelector('#calcular').onclick = function(event){
    
    validarOperador();
    calcularOperacion();
   
    event.preventDefault();
}

function validarOperador(){
    let operador = document.querySelector('#operador').value
    
    if (operador === "+"){
         operador = "+";
    }
    else if(operador === "-"){
         operador = "-";
    }
    else {
        alert('El operador solo puede ser + o -')
    }
    //console.log(operador)
}


function calcularOperacion(){

 
        const numero1 = Number(document.querySelector('#numero1').value);
        const numero2 = Number(document.querySelector('#numero2').value);
        const operador = document.querySelector('#operador').value;

    
    let calc;

    if (operador === "+"){
        calc = sumar(numero1, numero2);
    }else if (operador === "-"){
        calc = restar(numero1, numero2)
    }else{
        operador = " ";
    }
    const resultado =document.querySelector('#resultado'); 
    resultado.value = calc;
}

function sumar(numero1, numero2){
    return numero1 + numero2;
}

function restar(numero1, numero2){
    return numero1 - numero2;
}

document.querySelector('#resetear').onclick = function(event){
    
    numero1.value = " ";
    numero2.value = " ";
    operador.value =" ";
    resultado.value = " ";

    event.preventDefault();
}