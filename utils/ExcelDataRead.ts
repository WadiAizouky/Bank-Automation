//npm install xlsx @types/xlsx
import * as XLSX from 'xlsx';


export class ExcelDataRead {

    static readExcelFile(filePath: string) {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        return jsonData as any[]; // Return the data as an array of arrays
    }
}