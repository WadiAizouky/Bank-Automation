//    "types": ["node"] dans tsconfig.json
//npm i --save-dev @types/node
import * as fs from 'fs';

export class JsonDataRead {

    static readJsonFile(filePath: string) {
        const data = fs.readFileSync(filePath, 'utf-8'); 
        return JSON.parse(data);
    }
}