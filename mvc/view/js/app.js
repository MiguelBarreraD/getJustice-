var SliderIzquierdo = document.querySelector(".slider-izquierdo");
var SliderDerecho = document.querySelector(".slider-derecho");
var Contador = 0;
/**
* Método que permite visualizar la siguiente imagen en el arreglo
*/
function MoverDerecha()
  {
     Contador++;
     if(Contador > octopus.obtenerAbogados().length - 1)
        {
           Contador = 0;
        }
     document.Imagen.src = octopus.obtenerAbogados()[Contador].getFotoAbogado();
     document.querySelector("#Nombre").innerHTML= octopus.obtenerAbogados()[Contador].getNombreAbogado();
     document.querySelector("#Perfil").innerHTML= octopus.obtenerAbogados()[Contador].getDescripcionAbogado();
     document.querySelector("#Especialidad").innerHTML= octopus.obtenerAbogados()[Contador].getEspecialidadAbogado();
  }
var Intervalo = setInterval(MoverDerecha, 5000);

SliderDerecho.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverDerecha();
     Intervalo = setInterval(MoverDerecha, 5000);
  });

/**
* Método que permite visualizar la anterior imagen en el arreglo
*/
function MoverIzquierda()
  {
     Contador--;
     if(Contador < 0)
       {
         Contador = octopus.obtenerAbogados().length - 1;
       }
     document.Imagen.src = octopus.obtenerAbogados()[Contador].getFotoAbogado();
     document.querySelector("#Nombre").innerHTML= octopus.obtenerAbogados()[Contador].getNombreAbogado();
     document.querySelector("#Perfil").innerHTML= octopus.obtenerAbogados()[Contador].getDescripcionAbogado();
     document.querySelector("#Especialidad").innerHTML= octopus.obtenerAbogados()[Contador].getEspecialidadAbogado();
  }
SliderIzquierdo.addEventListener("click", function()
  {
     clearInterval(Intervalo);
     MoverIzquierda();
     Intervalo = setInterval(MoverDerecha, 2000);
  });

/**
 * Clase view que controla toda la parte visual de la página web
 */
var view = {
    init: function(){
        document.Imagen.src = octopus.obtenerAbogados()[0].getFotoAbogado();
        document.querySelector("#Nombre").innerHTML= octopus.obtenerAbogados()[0].getNombreAbogado();
        document.querySelector("#Perfil").innerHTML= octopus.obtenerAbogados()[0].getDescripcionAbogado();
        document.querySelector("#Especialidad").innerHTML= octopus.obtenerAbogados()[0].getEspecialidadAbogado();
    }
}