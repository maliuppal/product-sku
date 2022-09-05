import express from 'express';
import * as stockLevelController  from '../controllers/stock-level';

const route = express.Router();

let resource = '/stockLevel';

route.post(
  `${resource}`,
  stockLevelController.stockLevel
);
  
export {
    route as stockLevelRoute
}