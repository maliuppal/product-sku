import { fetchStocksData } from './stock.service';
import { fetchTransactionsData } from './transaction.service';
import { StockLevel } from '../types/StockLevel.type';
import { Transaction } from '../types/Transaction.type';
import { Stock } from '../types/Stock.type';

export const getStockLevel = async (sku: string): Promise<StockLevel> => {
    let qty: number = 0;
    let error: string;
    let result: StockLevel;
    try {
        const stockSku: Stock | undefined = await fetchStocksData(sku);
        const [orderTransactions, refundTransactions]: [Transaction[], Transaction[]] = await fetchTransactionsData(sku);

        if (!stockSku && !orderTransactions.length && !refundTransactions.length) {
            throw (`Sku does not exists!`);
        }
        if (stockSku) {
            qty += stockSku.stock;
        }

        orderTransactions.forEach((transaction: Transaction) => {
            qty -= transaction.qty;
        });

        refundTransactions.forEach((transaction: Transaction) => {
            qty += transaction.qty;
        });

    } catch (err: any) {
        throw new Error(err);
    }
    return { sku, qty };
};