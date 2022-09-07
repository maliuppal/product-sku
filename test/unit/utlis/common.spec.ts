import { getFileData } from "../../../src/utils/common";

const { expect } = require('chai');

describe('Testing the read file util', function () {
    it('it should read the file with valid path', async () => {

        const fileData = await getFileData('assets/stock.json');
        expect(fileData).to.be.an('array');;
    });

    it('it should not read the file', async () => {
        try {
            await getFileData('assets/invalid_file.json');
        } catch (error: any) {
            expect(error.message).to.equal("ENOENT: no such file or directory, open 'assets/invalid_file.json'")
        }  
    });
});
