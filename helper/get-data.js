import fs from 'fs/promises';
import path from 'path';

export const getData = async (dataName) => {
    const filePath = path.join(process.cwd(), "data", dataName)
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)
    return data;
}