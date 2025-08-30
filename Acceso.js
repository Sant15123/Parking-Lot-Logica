class Acceso {
  constructor(id, puerta, vehiculo, fechaHora, tipo) {
    this.id = id;
    this.puerta = puerta; // Ej: Puerta 1
    this.vehiculo = vehiculo; // Vehiculo
    this.fechaHora = fechaHora;
    this.tipo = tipo; // entrada o salida
  }
  
  // Verificar si el perfil tiene un permiso específico
    tienePermiso(permiso) {
        return this.permisos.includes(permiso) || this.perfil === "Administrador";
    }

    // Agregar permiso
    agregarPermiso(permiso) {
        if (!this.permisos.includes(permiso)) {
            this.permisos.push(permiso);
        }
    }

    get getId() {
    return this.id;
  }

  get getPuerta() {
    return this.puerta;
  }

  get getVehiculo() {
    return this.vehiculo;
  }

  get getFechaHora() {
    return this.fechaHora;
  }

  get getTipo() {
    return this.tipo;
  }
}

export default Acceso;