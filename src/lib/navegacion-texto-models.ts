export class NavegacionTexto {
    label: string;
    enlace: string;
    descripcion: string;
    isExterna: boolean;

    constructor(props) {
        Object.assign(this, props);
    }
}