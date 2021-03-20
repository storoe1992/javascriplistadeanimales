class Propietario{
    constructor(nombrePrpietario,direccion,telefono){
        this._nombrePrpietario = nombrePrpietario;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    datosPropietario(){
        return `El nombre del dueño es: ${this._nombrePrpietario}. El domicilio es: ${this._direccion}, y el número telefónico del contacto: ${this._telefono}`;
    }
}

class Animal extends Propietario{
    constructor(nombrePrpietario,direccion,telefono,tipo){
        super(nombrePrpietario,direccion,telefono)
        this._tipo = tipo;
    }

    get tipo(){
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal{
    constructor(nombrePrpietario,direccion,telefono,tipo,nombreMascota,enfermedad){
        super(nombrePrpietario,direccion,telefono,tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota(){
        return this._nombreMascota;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set nombreMascota(nombreMascota){
        this._nombreMascota = nombreMascota;
    }

    set enfermedad(enfermedad){
        this_enfermedad = enfermedad;
    }
}

const onAddData = (event) => {
    event.preventDefault();
    let nombrePropietario = document.getElementById("propietario").value;
    let telefono = document.getElementById("telefono").value;
    let residencia = document.getElementById("direccion").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let tipo=document.getElementById("tipo").value;
    let enfermedad = document.getElementById("enfermedad").value;

    let mascota = new Mascota(nombrePropietario, residencia,telefono, tipo, nombreMascota, enfermedad);

    const list = document.getElementById("resultado");
    list.innerHTML = `<ul>
                            <li>${mascota.datosPropietario()}</li>
                            <li>${mascota.tipo}, mientras que el nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es: ${mascota.enfermedad}</li>
                      </ul>`


}



