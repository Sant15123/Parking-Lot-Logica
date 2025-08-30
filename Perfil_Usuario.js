class PerfilUsuario {
    constructor(id, perfil) {
        this.id = id;
        this.perfil = perfil;
    }

    get Id() {
        return this._id;
    }

    get Perfil() {
        return this._perfil;
    }       

    set id(value) {
        this._id = value;
    }

    set perfil(value) {
        this._perfil = value;
    }
}

export default PerfilUsuario;


