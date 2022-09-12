import { getStockLevel } from './functions/stock-level';
import { StockLevel } from './types/StockLevel.type';

getStockLevel('SAL508741/19/43')
    .then((res: StockLevel) => {
        console.log(`Stock Level: ${JSON.stringify(res)}`);
    })
    .catch((err: any) => {
        console.log(err);
    });
