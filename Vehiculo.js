class vehiculo {
    constructor(id, placa, color, modelo, marca, tipo, usuario) {
       this.id = id;
       this.placa = placa;
       this.color = color;
       this.modelo = modelo;
       this.marca = marca;
       this.tipo = tipo;
       this.usuario = usuario; 
    }

    // Obtener información completa
    getInformacionCompleta() {
        return {
            id: this.id,
            placa: this.placa,
            descripcion: `${this.marca} ${this.modelo} ${this.color}`,
            tipo: this.tipo,
            estado: this.estado,
            usuario_id: this.usuario_id
        };
    }

get getid (){
    return this.id
}

get getplaca (){
    return this.placa
}

get getcolor (){
    return this.color
}

get getmodelo (){
    return this.modelo
}

get getmarca (){
    return this.marca
}

get gettipo (){
    return this.tipo
}

get getusuario (){
    return this.usuario
}
}

export default vehiculo;