import { getStockLevel } from '../../../src/functions/stock-level';
import { stockLevel } from '../../../src/types/stockLevel.type';

const { expect } = require('chai');

describe('Testing the stock level', function () {
    it('it should return stock level object with sku and qty', async () => {
        const sku: string = 'SAL508741/19/43';

        const stockLevel: stockLevel = await getStockLevel(sku);
        expect(stockLevel).to.be.an('object');
    });

    it('it should not return stock level as sku does not exists.', async () => {
        const sku: string = 'SAL508741/19/4312';
        try {
            await getStockLevel(sku);
        } catch (error) {
            expect(error).to.equal('Sku does not exists!');
        }
    });

    it('it should not return stock which should be greater then zero.', async () => {
        const sku: string = 'SAL508741/19/43';
        const stockLevel: stockLevel = await getStockLevel(sku);
        expect(stockLevel.qty).to.be.greaterThan(0);
    });

    it('it should not return stock which should be greater then zero.', async () => {
        const sku: string = 'SAL508741/19/43';
        const stockLevel: stockLevel = await getStockLevel(sku);

        expect(stockLevel.sku).to.be.equal(sku);
    });
});
