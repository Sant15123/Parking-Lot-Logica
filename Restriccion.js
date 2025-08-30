class Restriccion {
  constructor(id, diaSemana, placasRestringidas) {
    this.id = id;
    this.diaSemana = diaSemana; // Ej: "Lunes"
    this.placasRestringidas = placasRestringidas; // Ej: ["A", "B"]
  }
  
  // Agregar dígitos restringidos
    agregarDigitos(digitos) {
        digitos.forEach(digito => {
            if (!this.placasRestringidas.includes(digito)) {
                this.placasRestringidas.push(digito);
            }
        });
    }

    // Remover dígitos restringidos
    removerDigitos(digitos) {
        this.placasRestringidas = this.placasRestringidas.filter(d => !digitos.includes(d));
    }

  get getId() {
    return this.id;
  }
  get getDiaSemana() {
    return this.diaSemana;
  }
  get getPlacasRestringidas() {
    return this.placasRestringidas;
  }

  set setId(id) {
    this.id = id;
  }
  set setDiaSemana(diaSemana) {
    this.diaSemana = diaSemana;
  }
  set setPlacasRestringidas(placasRestringidas) {
    this.placasRestringidas = placasRestringidas;
  }
}

export default Restriccion;