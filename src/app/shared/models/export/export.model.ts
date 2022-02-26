export class exportFileDto {
    fechaIni?:string;
    fechaFin?:string;

    constructor(filterObj:any){
        this.fechaIni = filterObj.initialDate;
        this.fechaFin = filterObj.finalDate;
    }
}

export class exportData {
    Organizador?: string;
    Participante?: string;
    Materia?: string;
    Tipo_apoyo?: string;
    Fecha?: string;
    Hora?: string;

    constructor(row:any){
        this.Organizador = row.CreateBy;
        this.Participante = row.ReservedBy;
        this.Tipo_apoyo = row.Support;
        this.Materia = row.Subject;
        this.Fecha = row.date;
        this.Hora = row.time;
    }
}