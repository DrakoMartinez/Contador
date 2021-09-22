var nombre = "Ricardo";

document.write('Hola ' + nombre + ' desde JavaScript');

//////////////////////////////////////////////////////////////////////////////////

//Hoisting
//En javascript las declaraciones se mueven al inicio del ambio. este comportamiento se conoce como hoisting.

diaDeHoy();

function diaDeHoy() {
    document.write(' El dia de hoy es: ' + dia);
}


var dia ='Sabado';

//////////////////////////////////////////////////////////////////////////////////

//Cohersion
var a = 20;
var b = 4;

b = a + ""; //me va a devolver un string 
console.log(typeof b);
document.write(b);

//Convirtinedo de nuimero a cadena
var c = String(a);
console.log(typeof c);

//convirtinedo de cadena a numero
var d = Number(c);
console.log(typeof d);

//condicionales
var edad = 18;

//////////////////////////////////////////////////////////////////////////////////

//el === compara el tipo de variable y el valor de la variable
if (edad === 18){
    document.write('<br> Eres Mayor de edad y puedes votar');
}

else if (edad > 18){
    document.write('<br> Eres Mayor de edad y puedes votar de nuevo');
}

else{
    document.write('<br> Eres Menor de edad y no puedes votar');
}


//////////////////////////////////////////////////////////////////////////////////

//Operador ternario 
var resultado = edad >= 18 ?  "Eres mayor de edad" : "No eres mayor de edad";

document.write('<br>Resultado = '+ resultado);

var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

//////////////////////////////////////////////////////////////////////////////////

//Ciclos 

document.write('<p>Estudiantes <br>');
//Usando un ciclo for para recorrer el arreglo
for (var i = 0; i < estudiantes.length; i++){
    document.write(estudiantes[i]+ ',');
}
document.write('</p>');

//////////////////////////////////////

document.write('<p>Estudiantes <br>');
//Usando un ciclo for.. of para recorrer el arreglo
for (var estudiante of estudiantes){
    document.write(estudiantes + ',');
}
document.write('</p>');

//////////////////////////////////////

//Ciclo While
while(estudiantes.length > 0 ){
    estudiante = estudiantes.shift();
    document.write('<p>'+ estudiante + '</p>');
}


//Funciones Declarativas
function miFuncionD(){
    return "Se ejecuto la funcion"
}
document.write('<p>'+miFuncionD()+'</p>');


//Funciones de Ecpresion con parametros (tambien conocidas como anonimas)
var miFuncionE = function(a,b){
    return a + b;
}
document.write('<p>5 + 10 = '+miFuncionD(5, 10)+ '</p>');

//////////////////////////////////////////////////////////////////////////////////

//Objetos en JavaScript

//Definiendo un nuevo objeto
var Auto = {
    //Propiedades
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,

    //Metodos
    detalleAuto: function(){
        document.write("<p>Auto: " + this.modelo + " " + this.anio + "</p>");
    }
};

//Mostramos el objeto completo

document.write("Marca: " + Auto.marca);
Auto.detalleAuto();

//////////////////////////////////////

//Definiedno clase mediante una funcion constructura.
function CAuto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

//Creando un nuevo objeto de la clase Auto.
var autoNuevo = new CAuto('Tesla', 'Model 3', 2021);

//Mostrando el nuevo objeto
document.write('<p>Auto Nuevo: Marca: '+ autoNuevo.marca+
               ' Modelo: ' + autoNuevo.modelo+
               ' Año: ' + autoNuevo.anio + '</p>');


//////////////////////////////////////////////////////////////////////////////////
 
//Arrays de objetos.

//Creando el array
var articulos =[ 
    { nombre: 'Bicicleta', costo: 3000 },
    { nombre: 'Television', costo: 5500 },
    { nombre: 'Libro', costo: 320},
    { nombre: 'Celular', costo: 11215}
];

//Usando el metodo forEach para recorrer el Array.
document.write('<ul>');
articulos.forEach(function(articulo){
    document.write('<li>' + articulo.nombre + ' - $'+ articulo.costo+ '</li>');
});
document.write('</ul>');

//Usando el metodo filter para filtrar aquellos objetos del arreglo con un costo menor o igual a 5000, y guardarlos en una nueva lista.
var articulosBaratos = articulos.filter (function(articulo){
    return articulo.costo <= 5000;
});

//Usando el metodo forEach para recorrer el array
document.write('Baratos <ul>');
articulosBaratos.forEach(function(articulo){
    document.write('<li>' + articulo.nombre + ' - $'+ articulo.costo+ '</li>');
});
document.write('</ul>');

//Usando la funcion map para manejar los datos de los objetos y guerdarlos en una nueva lista.
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
  });

  //Usando el metodo forEach para recorrer el array.
  document.write('Articulos<ul>');
  nombreArticulos.forEach(function(articulo){
    document.write('<li>'+ articulo +'</li>');
  });
  document.write('</ul>');