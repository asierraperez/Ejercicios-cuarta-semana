function Ejercicio_1(num1, num2) {
    var multiplo = 0;
    var bool = false;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 < num2) {
        multiplo = num2 % num1;
        console.log(num1 + "<=" + num2);
    } else {
        multiplo = num1 % num2;
        console.log(num2 + "<=" + num1);
    }
    console.log(multiplo);
    if (multiplo == 0) {
        bool = true;
        //alert("Ejercicio 1\n\n" + num1 + " y " + num2 + " son multiplos");
    } else {
        bool = false;
        //alert("Ejercicio 1\n\n" + num1 + " y " + num2 + " No son multiplos");
    }
    return bool;
}

function Ejercicio_2(numero) {
    var bool = false;
    var resto;
    while (numero > 100) {
        numero = prompt("Ejercicio 2\n\nError, " + numero + ">100, introduce un valor nuevo");
    }
    for (let index = 1; index < numero; index++) {
        resto = numero % index;
        if (resto == 0 & index > 1) {
            bool = true;
            return bool;
            break;
        }
    }
}

function Ejercicio_3(caracteres) {
    var nLetras = caracteres.length;
    var lista = new String("");
    for (let index = 0; index <= nLetras; index++) {
        console.log("en el for");
        if (index > 0) {
            lista = (lista + "\n\n");
        }
        lista = (lista + caracteres.charAt(index));
        ;
    }
    return lista;
}

function Ejercicio_4(alimento, cantidad) {
    var elemento = {
        nombre: alimento,
        numero: cantidad,
    }
    alert("Ejercicio 4\n\nAlimento = " + elemento.nombre + "\nCantidad = " + elemento.numero);
}

function Ejercicio_5(lado, altura) {
    //var superficie;
    lado = parseInt(lado);
    altura = parseInt(altura);
    var cuadrilatero = function (lado, altura) {
        var ancho = lado;
        var alto = altura;
        var area = 0;
            this.CalculoArea = function () {
                area = ancho * alto;
                console.log(area);
                alert("Ejercicio 5\n\nArea = " + area);
            }
    }
    //superficie=cuadrilatero.CalculoArea();
    var rectangulo = new cuadrilatero(lado,altura);
    //console.log(rectangulo.alto + " " + rectangulo.ancho)
    rectangulo.CalculoArea()
    //console.log(rectangulo.area);
    return rectangulo.area;
}

function Ejercicio_6() {
    var numeroActual = 0;
    var suma = 0;
    var media = 0;
    var acumulado = "";
    for (let index = 0; index < 10; index++) {
        numeroActual = prompt("Ejercicio 6\n\nEscribe 10 números\nQuedan " + ((9 - index) + 1) + " numeros restantes");
        suma = parseInt(suma) + parseInt(numeroActual);
        console.log(suma);
        media = suma / (index + 1);
        acumulado = (numeroActual + ", " + acumulado);
        alert("Ejercicio 6\n\nNumeros introducidos hasta ahora: " + acumulado + "\nMedia actual= " + media);
    }

}

function Ejercicio_7() {
    var aventurero = function () {
        this.clase;
        this.nivel;
        this.raza;
    }
    var tabla = "personaje | clase | nivel | raza"
    var personaje = ["Personaje 1", "Personaje 2", "Personaje 3"];
    for (let index = 0; index < 3; index++) {
        personaje[index] = new aventurero();
        personaje[index].clase = prompt("Ejercicio 7\n\n clase de personaje " + [index + 1]);
        personaje[index].nivel = prompt("Ejercicio 7\n\n nivel de personaje " + [index + 1]);
        personaje[index].raza = prompt("Ejercicio 7\n\n raza de personaje " + [index + 1]);
        tabla = tabla + "\npersonaje" + (index + 1) + " | " + personaje[index].clase + " | " + personaje[index].nivel + " | " + personaje[index].raza

    }
    alert(tabla);
}

function Ejercicio_8() {
    var resultado;
    var confirmar = "n";
    var repetir = "n";
    do {
        if ((repetir == "n") & (confirmar == "n")) {
            var num1 = prompt("Ejercicio 8\n\nIntroduce un valor");
            var num2 = prompt("Ejercicio 8\n\nIntroduce un valor");
            num1 = parseInt(num1);
            num2 = parseInt(num2);
        }

        do {
            var menu = prompt("Ejercicio 8\n\nElige una operación a realizar. Escribe uno de los numeros marcados en las opciones\n1.-Sumar\n2.-Restar\n3.-Multiplicar\n4.-Dividir\n5.-Salir");
            menu = parseInt(menu);
            if ((menu != 1) & (menu != 2) & (menu != 3) & (menu != 4) & (menu != 5)) {
                alert("Ejercicio 8\n\nOpción incorrecta, intentalo de nuevo");
            }
            console.log(menu);
        } while ((menu != 1) & (menu != 2) & (menu != 3) & (menu != 4) & (menu != 5));

        switch (menu) {
            case 1:
                resultado = num1 + num2;
                console.log(menu);
                alert("Ejercicio 8\n\n" + num1 + " + " + num2 + " = " + resultado);
                break;
            case 2:
                resultado = num1 - num2;
                alert("Ejercicio 8\n\n" + num1 + " - " + num2 + " = " + resultado);
                break;
            case 3:
                resultado = num1 * num2;
                alert("Ejercicio 8\n\n" + num1 + " * " + num2 + " = " + resultado);
                break;
            case 4:
                resultado = num1 / num2;
                alert("Ejercicio 8\n\n" + num1 + " / " + num2 + " = " + resultado);
                break;
            case 5:
                do {
                    confirmar = prompt("Ejercicio 8\n\n¿Estas seguro de que quieres finalizar es programa?(Y/N)");
                    confirmar = confirmar.toLowerCase();
                    if (confirmar == "y") {
                        alert("Ejercicio 8\n\nFinalizando el programa");
                    }
                } while ((confirmar != "y") & (confirmar != "n"));

                break;
        }
        if (confirmar != "y") {
            do {
                repetir = prompt("Ejercicio 8\n\nQuieres seguir usando los mismos valores?(Y/N)");
                repetir = repetir.toLowerCase();
            } while ((repetir != "y") & (repetir != "n"));
        }


    } while (confirmar != "y");

}

var menu;
var confirmar;
do {
    do {
        menu = prompt("EJERCICIOS 4\n\nEscribe es numero del ejercicio a consultar\n1.-Comprobacion de multiplos\n2.-comprobacion de nº primos\n3.-Desglosar caracteres\n4.-Alimentos y cantidades\n5.-Calculo de area\n6.-Calculo de media\n7.-Aventureros\n8.-Calculadora\n9.-Salir");
        menu = parseInt(menu);
        if ((menu != 1) & (menu != 2) & (menu != 3) & (menu != 4) & (menu != 5) & (menu != 6) & (menu != 7) & (menu != 8) & (menu != 9)) {
            alert("EJERCICIOS 4\n\nOpción incorrecta, intentalo de nuevo")
        }
    } while ((menu != 1) & (menu != 2) & (menu != 3) & (menu != 4) & (menu != 5) & (menu != 6) & (menu != 7) & (menu != 8) & (menu != 9));
    switch (menu) {
        case 1:
            var dato1 = prompt("Ejercicio 1\n\nEscribe un numero");
            var dato2 = prompt("Ejercicio 1\n\nEscribe otro numero");
            var resultado = Ejercicio_1(dato1, dato2)
            if (resultado == true) {
                alert("Ejercicio 1\n\n" + dato1 + " y " + dato2 + " son multiplos");
            } else {
                alert("Ejercicio 1\n\n" + dato1 + " y " + dato2 + " No son multiplos");
            }
            break;
        case 2:
            var valor = prompt("Ejercicio 2\n\nEscribe un numero menor que 100");
            var bool = Ejercicio_2(valor)
            if (bool == true) {
                alert("Ejercicio 2\n\n" + valor + " NO es un numero primo");
            } else {
                alert("Ejercicio 2\n\n" + valor + " SI es un numero primo");
            }
            break;
        case 3:
            var palabra = new String(prompt("Ejercicio 3\n\nEscribe una lista de caracteres"));
            console.log(palabra);
            var individual = new String(Ejercicio_3(palabra));
            alert("Ejercicio 3\n\n" + individual);
            break;
        case 4:
            var alimento = prompt("Ejercicio 4\n\nEscribe un alimento");
            var cantidad = prompt("Ejercicio 4\n\nIntroduce una cantidad");
            Ejercicio_4(alimento, cantidad)
            break;
        case 5:
            var lado = prompt("Ejercicio 5\n\nIntroduce longitud del lado");
            var altura = prompt("Ejercicio 5\n\nIntroduce altura");
            Ejercicio_5(lado, altura);           
            break;
        case 6:
            Ejercicio_6()
            break;
        case 7:
            Ejercicio_7()
            break;
        case 8: Ejercicio_8()
            break;
        case 9:
            do {
                confirmar = prompt("EJERCICIOS 4\n\n¿Estas seguro de que quieres finalizar es programa?(Y/N)");
                confirmar = confirmar.toLowerCase();
                if (confirmar == "y") {
                    alert("EJERCICIOS 4\n\nFinalizando el programa");
                }
            } while ((confirmar != "y") & (confirmar != "n"));
            break;

    }
} while (confirmar != "y");