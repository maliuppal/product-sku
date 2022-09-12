import { Stock } from "../types/Stock.type";
import { getFileData } from '../utils/common';

export const fetchStocksData = async (sku: string): Promise<Stock | undefined> => {
    try {
        const stocks: Stock[] = await getFileData('assets/stock.json');
        let skuStock: Stock | undefined = stocks.find((stock: Stock) => stock.sku === sku);
        return skuStock;
    } catch (err) {
        throw new Error(`Error occured while fetching stocks: ${err}`);
    }
};
