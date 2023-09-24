class Abogado{
    constructor(nombre, foto, descripcion, especialidad){
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.especialidad = especialidad;
    }
    /**
     * Método para obtener el nombre del abogado
     * @returns {String} el nombre del abogado
     */
    getNombreAbogado(){
        return this.nombre;
    }

    /**
     * Método para obtener el foto del abogado
     * @returns {String} el foto del abogado
     */
    getFotoAbogado(){
        return this.foto;
    }
    
    /**
     * Método para obtener la descripción del abogado
     * @returns {String} la descripción del abogado
     */
    getDescripcionAbogado(){
        return this.descripcion;
    }

    /**
     * Método para obtener la especialidad del abogado
     * @returns {String} la especialidad del abogado
     */
    getEspecialidadAbogado(){
        return this.especialidad;
    }
    
    /**
     * Método para cambiar el nombre del abogado
     * @param {String} 
     */
    setNombreAbogado(nombre){
        this.nombre=nombre;
    }
    
}
var model = {
    listaAbogados: [],
    añadirAbogado: function(nombre, foto, descripcion, especialidad){
        var abogado = new Abogado(nombre, foto, descripcion, especialidad);
        this.listaAbogados.push(abogado);
    },
    /**
     * Método que retorna una lista de objetos tipo Abogado
     * @returns {[Abogado]} lista de objetos tipo Abogado
     */
    obtenerAbogados: function(){
        return this.listaAbogados;
    },
    /**
     * Método que inicializa la página con 3 abogados
     */
    init: function(){
        this.añadirAbogado('Camilo Fajardo', 'img/CamiloFajardo.jpg', 'Abogado con Maestría en Relaciones Laborales y 10 años de experiencia. Experto en resolución de conflictos laborales y casos de acoso en el trabajo.','Derecho Laboral y Relaciones Laborales');
        this.añadirAbogado('Jaider Gonzalez', 'img/JaiderGonzalez.jpg', 'Abogado penalista con sólida trayectoria y habilidad para analizar evidencia en casos criminales, obteniendo resultados favorables en situaciones complejas.','Derecho Penal');
        this.añadirAbogado('Miguel Barrera', 'img/MiguelBarrera.jpg', 'Abogado en Derecho de Propiedad Intelectual. Asesora a creadores y empresas en protección de derechos de autor y marcas comerciales, impulsando la creatividad y la innovación.','Propiedad Intelectual');
    }
}