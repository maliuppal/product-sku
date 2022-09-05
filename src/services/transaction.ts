import { Transaction } from './../types/transaction.type';
import { getFileData } from '../utils/common';

export const getTransactionsData = async (sku: string): Promise<[Transaction[], Transaction[]]> => {
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
};
