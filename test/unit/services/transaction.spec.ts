import { getTransactionsData } from '../../../src/services/transaction';

const { expect, assert } = require('chai');

describe('transactions test', () => {
    it('it should return transactions', async () => {
        const sku = 'SAL508741/19/43';
        const transactions = await getTransactionsData(sku);

        assert.isArray(transactions);
    });
});
