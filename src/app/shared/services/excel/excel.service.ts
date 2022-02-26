import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { WorkBook, WorkSheet, utils, write } from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
    providedIn: 'root'
})
export class excelService {
    constructor() { }

    public exportAsExcelFile(json: any[], excelFileName: string): void {
        const worksheet: WorkSheet = utils.json_to_sheet(json);
        const workbook: WorkBook = { Sheets: { 'Consolidado': worksheet }, SheetNames: ['Consolidado'] };
        const excelBuffer: any = write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }

    private saveAsExcelFile(buffer: any, fileName: string): void {

        const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
        saveAs(data, fileName + EXCEL_EXTENSION);
    }

}