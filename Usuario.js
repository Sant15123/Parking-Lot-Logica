import Perfil_Usuario from "./Perfil_Usuario.js";

class Usuario {
    constructor(id, tipo_documento, primer_nombre,segundo_nombre, primer_apellido,segundo_apellido, direccion_correo, numero_celular,foto_perfil, estado, clave) {

        this.id = id;
        this.tipo_documento = tipo_documento;
        this.primer_nombre = primer_nombre;
        this.segundo_nombre = segundo_nombre;
        this.primer_apellido = primer_apellido;
        this.segundo_apellido = segundo_apellido;
        this.direccion_correo = direccion_correo;
        this.numero_celular = numero_celular;
        this.foto_perfil = foto_perfil;
        this.estado = estado;
        this.clave = clave;        
    }

    getNombreCompleto() {
        return `${this.primer_nombre} ${this.segundo_nombre || ''} ${this.primer_apellido} ${this.segundo_apellido || ''}`.trim();
    }

    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }

    // Actualizar último acceso
    actualizarUltimoAcceso() {
        this.ultimo_acceso = new Date();
    }
    

    get getId() {
        return this.id;
    }

    get getTipo_Usuario() {
        return this.tipo_usuario;
    }

    get getPrimer_Nombre() {
        return this.primer_nombre;
    }

    get getSegundo_Nombre() {
        return this.segundo_nombre;
    }

    get getPrimer_Apellido() {
        return this.primer_apellido;
    }

    get getgetSegundo_Apellido() {
        return this.segundo_apellido;
    }

    get getDireccion_Correo() {
        return this.direccion_correo;
    }

    get getNumero_Celular() {
        return this.numero_celular;
    }

    get getFoto_Perfil() {
        return this.foto_perfil;
    }

    get getEstado() {
        return this.estado;
    }

    get getClave() {
        return this.clave;
    }

    set setid(value) {
        this.id = value;
    }

    set settipo_usuario(value) {
        this.tipo_usuario = value;
    }

    set setprimer_nombre(value) {
        this.primer_nombre = value;
    }       

    set setsegundo_nombre(value) {
        this.segundo_nombre = value;
    }

    set setprimer_apellido(value) {
        this.primer_apellido = value;
    }

    set setsegundo_apellido(value) {
        this.segundo_apellido = value;
    }   

    set setdireccion_correo(value) {
        this.direccion_correo = value;
    }

    set setnumero_celular(value) {
        this.numero_celular = value;
    }

    set setfoto_perfil(value) {
        this.foto_perfil = value;
    }

    set setestado(value) {
        this.estado = value;
    }

    set setclave(value) {
        this.clave = value;
    }
}

export default Usuario;