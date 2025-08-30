class HistorialParqueo {
    constructor(celda, vehiculo, fecha_hora) {
        this.celda = celda;
        this.vehiculo = vehiculo;
        this.fecha_hora = fecha_hora;
    }

    // Obtener resumen del historial
    getResumen() {
        return {
            id: this.id,
            celda: this.celda.codigo,
            vehiculo: this.vehiculo.placa,
            fecha: this.fecha_hora.toLocaleDateString(),
            hora: this.fecha_hora.toLocaleTimeString(),
            duracion: `${this.duracion_minutos} minutos`,
            costo: `$${this.costo_total}`,
            tipo: this.tipo_evento
        };
    }
    
    get celda() {
        return this._celda;
    }
    get vehiculo() {
        return this._vehiculo;
    }
    get fecha_hora() {
        return this._fecha_hora;
    }
    set celda(celda) {
        this._celda = celda;
    }
    set vehiculo(vehiculo) {
        this._vehiculo = vehiculo;
    }
    set fecha_hora(fecha_hora) {
        this._fecha_hora = fecha_hora;
    }
}

export default HistorialParqueo;