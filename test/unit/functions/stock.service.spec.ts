import { fetchStocksData } from './../../../src/functions/stock.service';

const { expect, assert } = require('chai');

describe('stock test', () => {
    it('it should return stock', async () => {
        const sku = 'SAL508741/19/43';
        const stocks = await fetchStocksData(sku);
        assert.isObject(stocks);
    });

    it('it should not return stock', async () => {
        const sku = 'SAL508741/19/43123';
        const stocks = await fetchStocksData(sku);
        expect(stocks).to.be.undefined
    });
});
