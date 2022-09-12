import { Transaction } from '../types/Transaction.type';
import { getFileData } from '../utils/common';

export const fetchTransactionsData = async (sku: string): Promise<[Transaction[], Transaction[]]> => {
    try {
        const transactions = await getFileData('assets/transactions.json');

        const orderTransactions: Transaction[] = [];
        const refundTransactions: Transaction[] = [];
        transactions.forEach((transaction: Transaction) => {
            if (transaction.sku === sku) {
                if (transaction.type === 'order') {
                    orderTransactions.push(transaction);
                } else {
                    refundTransactions.push(transaction);
                }
            }
        });

        return [orderTransactions, refundTransactions];
    } catch (err) {
        throw new Error(`Error occured while fetching transactions: ${err}`);
    }
};
