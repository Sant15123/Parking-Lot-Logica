class Celda {
  constructor(id, codigo, tipoCelda, area, estado = "disponible", vehiculo = null) {
    this.id = id;
    this.codigo = codigo; // único
    this.tipoCelda = tipoCelda; // moto o carro
    this.area = area; // área, piso o nivel
    this.estado = estado; // ocupado o disponible
    this.vehiculo = vehiculo;
  }

  // Calcular tarifa según tipo de celda
    calcularTarifa() {
        const tarifas = {
            'moto': 1500,
            'carro': 3000,
            'discapacitado': 2500
        };
        return tarifas[this.tipoCelda] || 2000;
    }
    
  get getId() {
    return this.id;
  }
  get getCodigo() {
    return this.codigo;
  }
  get getTipoCelda() {
    return this.tipoCelda;
  }
  get getArea() {
    return this.area;
  }
  get getEstado() {
    return this.estado;
  }
  get getVehiculo() {
    return this.vehiculo;
  }
  set setId(id) {
    this.id = id;
  }
  set setCodigo(codigo) {
    this.codigo = codigo;
  }
  set setEstado(estado) {
    this.estado = estado;
  }
  set setVehiculo(vehiculo) {
    this.vehiculo = vehiculo;
  } 
  set setArea(area) {
    this.area = area;
  }
  set setTipoCelda(tipoCelda) {
    this.tipoCelda = tipoCelda;
  }
}


export default Celda;