export default class cl_Empleado {
    constructor(n, s, e) {
        this.nombre = n;
        this.sexo = s;
        this.edad = e;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set sexo(s) {
        this._sexo = s;
    }
    get sexo() {
        return this._sexo;
    }
    set edad(e) {
        this._edad = e;
    }
    get edad() {
        return this._edad;
    }
}