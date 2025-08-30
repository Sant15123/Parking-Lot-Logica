class incidencia {
    constructor(id, nombre) {
       this.id = id;
       this.nombre = nombre;
    }

    // Agregar observación
    agregarObservacion(observacion, usuario = null) {
        this.observaciones.push({
            fecha: new Date(),
            usuario: usuario?.getNombre() || "Sistema",
            observacion: observacion
        });
    }

    get getId() {
       return this.id;
    }
    get getNombre() {
       return this.nombre;
    }
    set setId(id) {
       this.id = id;
    }
    set setNombre(nombre) {
       this.nombre = nombre;
    }
}

export default incidencia;