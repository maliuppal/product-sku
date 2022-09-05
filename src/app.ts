import express from 'express';
import { stockLevelRoute } from './routes/stock-level';

const app = express();
const port = 8000;

app.use(express.json());
app.use(stockLevelRoute);

app.listen(port, () => {
    console.log(`server is listening on port: ${port}`);
});

export default app;
