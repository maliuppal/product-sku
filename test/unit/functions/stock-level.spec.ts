import { getStockLevel } from '../../../src/functions/stock-level';
import { StockLevel } from '../../../src/types/StockLevel.type';

const { expect } = require('chai');

describe('Testing the stock level', function () {
    it('it should return stock level object with sku and qty', async () => {
        const sku: string = 'SAL508741/19/43';

        const StockLevel: StockLevel = await getStockLevel(sku);
        expect(StockLevel).to.be.an('object');
    });

    it('it should not return stock level as sku does not exists', async () => {
        const sku: string = 'SAL508741/19/4312';
        try {
            await getStockLevel(sku);
        } catch (error: any) {
            expect(error.message).to.equal('Sku does not exists!');
        }
    });

    it('it should not return stock which should be greater then zero', async () => {
        const sku: string = 'SAL508741/19/43';
        const StockLevel: StockLevel = await getStockLevel(sku);
        expect(StockLevel.qty).to.be.greaterThan(0);
    });

    it('it should return stock named with sku', async () => {
        const sku: string = 'SAL508741/19/43';
        const StockLevel: StockLevel = await getStockLevel(sku);

        expect(StockLevel.sku).to.be.equal(sku);
    });
});
