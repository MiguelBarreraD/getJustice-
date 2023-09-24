/**
 * Clase 'octopus' que funciona como intermedio entre el modelo y la vista
 */

var octopus = {
    /**
     * Constructor de la clase 'Octopus' que inicializa el modelo y la vista de la página web
     */
    init: function() {
        model.init();
        view.init();
    },
    /**
     * Método que retorna un arreglo de abogados que posee la página web
     * @returns {[Abogado]} 
     */
    obtenerAbogados: function(){
        return model.obtenerAbogados();
    }
}
octopus.init();