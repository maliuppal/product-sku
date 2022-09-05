import { Transaction } from './../types/transaction.type';
import { Stock } from './../types/stock.type';
import { getFileData } from '../utils/common';
import { getTransactionsData } from './transaction';
import { stockLevel } from '../types/stockLevel.type';

export const getStockLevel = async (sku: string): Promise<stockLevel> => {
    let qty: number = 0;
    try {
        const stockSku: Stock = await getStocksData(sku);
        const [orderTransactions, refundTransactions] : [Transaction[], Transaction[]] = await getTransactionsData(sku);

        if (!stockSku && !orderTransactions.length && !refundTransactions.length) {
            return Promise.reject(`Sku does not exists!`)
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
    } catch (err) {
        console.error(`Error occurred while getting stock level: ${err}`);
        return Promise.reject(`Error occurred in getStockLevel: ${err}`)
    }
    return { sku, qty };
};

const getStocksData = async (sku: string): Promise<any> => {
    const stocks: Stock[] = await getFileData('assets/stock.json');
    let skuStock: Stock | undefined = stocks.find((stock: Stock) => stock.sku === sku);
    return skuStock;
};
