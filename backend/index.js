import express from 'express';
import 'dotenv/config';
import mainRouter from './routes/index.js';
import cors from "cors";

// const mainRouter = require('./routes/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/v1', mainRouter);

app.listen(port, function (err) {
    if(err) console.log(err);
    else console.log(`server is running at port number ${port}`);
})