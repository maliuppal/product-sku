import { getStockLevel } from './functions/stock-level';
import { stockLevel } from './types/stockLevel.type';

getStockLevel('SAL508741/19/43')
    .then((res: stockLevel) => {
        console.log(`Stock Level: ${JSON.stringify(res)}`);
    })
    .catch((err: any) => {
        console.log(err);
    });
