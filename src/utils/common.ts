import fs from 'fs';

export const getFileData = (fileName: string) => {
    const data = fs.readFileSync(fileName, { encoding: 'utf8' });
    return JSON.parse(data);
};
