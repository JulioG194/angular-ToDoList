export class TareaModel {
    id: string;
    nombre: string;
    encargado: string;
    estado: boolean;

    constructor() {
        this.estado = true;
    }
}
