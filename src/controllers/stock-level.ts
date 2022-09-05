import { Request, Response } from 'express';
import { getStockLevel } from '../services/stock-level';

export const stockLevel = async (req: Request, res: Response) => {
    try {
        // tem added dumy sku
        const sku: string = req.body.sku || 'SAL508741/19/43';

        const result = await getStockLevel(sku);
        if (result) {
            res.status(200).send(result);
        }
    } catch (err) {
        res.status(404).send({ error: 'No SKU found' });
    }
};
