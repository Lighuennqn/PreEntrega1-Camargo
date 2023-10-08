/* Variables */
let balance = 0;
let opcion = 0;
let semanas = 0;
let porcentaje = 21;
let haberes = 0;

/* Funciones*/

function ivaFiltro(periodos) {
    for (let i = 1; i <= periodos; i++) {
        let numeroIngresado = parseInt(prompt("Ingrese sus ingresos de la semana " + i));
        let valorConPorcentaje = (porcentaje / 100) * numeroIngresado;
        balance = balance + (numeroIngresado - valorConPorcentaje);
    }
}
function saldoNeto(saldo) {
    if (saldo > 0) {
        alert("Esta semana has tenido ganancias.")
    }

    else if (saldo < 0) {
        alert("Esta semana has tenido pérdidas.")
    }

    else {
        alert("Esta semana no has perdido ni ganado dinero.")
    }
}

/* MAIN */
alert("Bienvenidos al sistema de cálculos de ganacias mensuales, ejecutado semana por semana.");

while (opcion != 1 && opcion != 2) {
    opcion = parseInt(prompt(`¿Cuántas semanas tiene el corriente mes?
    Opción 1) 4 semanas. 
    Opción 2) 5 semanas.`))

    if (opcion == 1) {
        semanas = 4
        console.log("hola entre a op1")
    }
    else if (opcion == 2) {
        semanas = 5
        console.log("hola entre a op2")
    }
    else {
        alert("Ingrese una opción válida")
    }
}

ivaFiltro(semanas)

balance = Math.trunc(balance)

alert("El balance sin el 21% del IVA es de: $" + balance)

haberes = parseInt(prompt("Ingrese los haberes(gastos del mes)"));


let balanceFinal = balance - haberes

alert("Y el balance final restados los gastos es de $" + balanceFinal)


saldoNeto(balanceFinal)



