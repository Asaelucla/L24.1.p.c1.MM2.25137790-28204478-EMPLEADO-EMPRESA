export default class cl_Empresa {
    constructor() {
        this.acumlEdadHombres = 0;
        this.contaHombres = 0;
        this.edadMayorMujeres = 0;
        this.nombredeMujerer = 0;
    }
    procesarEmpleado(emple) {
        if (emple.sexo == "M") {
            this.acumlEdadHombres += emple.edad;
            this.contaHombres++;
        } else if (emple.sexo == "F") {
            if (emple.edad > this.edadMayorMujeres) {
                this.edadMayorMujeres = emple.edad;
                this.nombredeMujerer = emple.nombre;
            }
        }
    }
    promeEdadHombre() {
        return this.acumlEdadHombres / this.contaHombres;
    }
    MayorEdadMujer() {
        return this.edadMayorMujeres;
    }
    nombreMayorMujer() {
        return this.nombredeMujerer;
    }
}