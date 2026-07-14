/* ===========================================
   MUSEO DIGITAL - EL VIAJE DEL AGUA
   SCRIPT.JS
=========================================== */


// Cambiar entre salas del museo

function mostrarSala(numero){

    // Ocultar todas las salas

    let salas = document.querySelectorAll(".sala");


    salas.forEach(function(sala){

        sala.classList.remove("activa");
        sala.classList.remove("cambio");

    });



    // Mostrar la sala seleccionada

    let salaSeleccionada = document.getElementById("sala" + numero);



    if(salaSeleccionada){

        salaSeleccionada.classList.add("activa");


        // Reiniciar animación

        void salaSeleccionada.offsetWidth;


        salaSeleccionada.classList.add("cambio");


        // Guardar última sala visitada

        localStorage.setItem(
            "ultimaSala",
            numero
        );


        // Ir hacia la sala

        setTimeout(function(){

            salaSeleccionada.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        },100);

    }

}



// Abrir última sala visitada al cargar

window.onload=function(){


    let ultimaSala =
    localStorage.getItem("ultimaSala");


    if(ultimaSala){

        mostrarSala(ultimaSala);

    }


};



// Efecto de escritura para títulos

function escribirTexto(elemento,texto,velocidad=60){

    let i=0;

    elemento.innerHTML="";


    let intervalo=setInterval(()=>{


        elemento.innerHTML += texto.charAt(i);


        i++;


        if(i>=texto.length){

            clearInterval(intervalo);

        }


    },velocidad);


}



// Activar efecto en el título principal

document.addEventListener(
"DOMContentLoaded",
()=>{


let titulo=document.querySelector(".hero h1");


if(titulo){


let texto=titulo.textContent;


escribirTexto(
titulo,
texto,
80
);


}



});



// Botón volver arriba

window.addEventListener(
"scroll",
()=>{


let boton =
document.getElementById(
"arriba"
);



if(boton){


if(window.scrollY>500){

boton.style.display="block";


}else{


boton.style.display="none";


}


}


});



function subirArriba(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}